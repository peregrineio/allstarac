"use client";

import { useEffect, useRef } from "react";
import { usePhoneCapturePopup } from "@/hooks/usePhoneCapturePopup";
import { PhoneCapturePopup } from "./PhoneCapturePopup";

export function GetStartedPopupWrapper() {
  const { showPopup, closePopup, onSubmitSuccess, popupWasDismissed } = usePhoneCapturePopup(1500);
  const hasDispatchedEvent = useRef(false);

  // Set data attribute on mount to signal chatbot should delay
  useEffect(() => {
    document.documentElement.setAttribute("data-delay-chatbot", "true");

    return () => {
      document.documentElement.removeAttribute("data-delay-chatbot");
    };
  }, []);

  // Dispatch custom event when popup is dismissed (with 1 second delay)
  useEffect(() => {
    if (popupWasDismissed && !hasDispatchedEvent.current) {
      hasDispatchedEvent.current = true;

      const timer = setTimeout(() => {
        window.dispatchEvent(new CustomEvent("popup-dismissed"));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [popupWasDismissed]);

  if (!showPopup) {
    return null;
  }

  return <PhoneCapturePopup onClose={closePopup} onSubmitSuccess={onSubmitSuccess} />;
}
