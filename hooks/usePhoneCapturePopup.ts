"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEYS = {
  SUBMITTED: "popup_submitted",
  DISMISS_COUNT: "popup_dismiss_count",
  DISMISS_DATE: "popup_dismiss_date",
};

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

interface UsePhoneCapturePopupReturn {
  showPopup: boolean;
  closePopup: () => void;
  onSubmitSuccess: () => void;
  popupWasDismissed: boolean;
}

export function usePhoneCapturePopup(delay: number = 1500): UsePhoneCapturePopupReturn {
  const [showPopup, setShowPopup] = useState(false);
  const [popupWasDismissed, setPopupWasDismissed] = useState(false);

  useEffect(() => {
    // Check if we should show the popup
    const shouldShow = checkShouldShowPopup();

    if (shouldShow) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // If we're not showing popup, mark as dismissed immediately
      // so chatbot can appear
      setPopupWasDismissed(true);
    }
  }, [delay]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setPopupWasDismissed(true);
    incrementDismissCount();
  }, []);

  const onSubmitSuccess = useCallback(() => {
    // Keep popup open for success state - component handles auto-close
    localStorage.setItem(STORAGE_KEYS.SUBMITTED, new Date().toISOString());
  }, []);

  return {
    showPopup,
    closePopup,
    onSubmitSuccess,
    popupWasDismissed,
  };
}

function checkShouldShowPopup(): boolean {
  if (typeof window === "undefined") return false;

  try {
    // Check if already submitted within 30 days
    const submittedDate = localStorage.getItem(STORAGE_KEYS.SUBMITTED);
    if (submittedDate) {
      const submittedTime = new Date(submittedDate).getTime();
      const now = Date.now();
      if (now - submittedTime < THIRTY_DAYS_MS) {
        return false; // Already a lead, don't show
      }
    }

    // Check dismiss count
    const dismissCount = parseInt(localStorage.getItem(STORAGE_KEYS.DISMISS_COUNT) || "0", 10);

    if (dismissCount >= 3) {
      const dismissDate = localStorage.getItem(STORAGE_KEYS.DISMISS_DATE);
      if (dismissDate) {
        const dismissTime = new Date(dismissDate).getTime();
        const now = Date.now();
        if (now - dismissTime < SEVEN_DAYS_MS) {
          return false; // Dismissed 3+ times within 7 days, respect their choice
        } else {
          // 7+ days since last dismiss, reset count and show again
          localStorage.setItem(STORAGE_KEYS.DISMISS_COUNT, "0");
          localStorage.removeItem(STORAGE_KEYS.DISMISS_DATE);
        }
      }
    }

    return true; // Show the popup
  } catch {
    // localStorage not available
    return true;
  }
}

function incrementDismissCount(): void {
  if (typeof window === "undefined") return;

  try {
    const currentCount = parseInt(localStorage.getItem(STORAGE_KEYS.DISMISS_COUNT) || "0", 10);
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEYS.DISMISS_COUNT, String(newCount));

    if (newCount >= 3) {
      localStorage.setItem(STORAGE_KEYS.DISMISS_DATE, new Date().toISOString());
    }
  } catch {
    // localStorage not available
  }
}
