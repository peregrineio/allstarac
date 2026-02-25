// Meta Pixel event tracking
export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && "fbq" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq("track", eventName, data);
  }
}

// Pre-defined events for Meta Pixel
export function trackLead(contentName: string, category?: string) {
  trackEvent("Lead", {
    content_name: contentName,
    content_category: category || "HVAC Service",
  });
}

export function trackContact(method: string) {
  trackEvent("Contact", { content_name: method });
}

export function trackPhoneClick() {
  trackContact("Phone Click");
}

export function trackFormSubmit(formType: string, serviceType?: string) {
  trackLead(formType, serviceType);
}

export function trackEstimateRequest() {
  trackEvent("InitiateCheckout", { content_name: "Free Estimate CTA" });
}

export function trackServicePageView(serviceName: string) {
  trackEvent("ViewContent", {
    content_name: serviceName,
    content_type: "Service Page",
  });
}

// Google Analytics event tracking
export function trackGA(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && "gtag" in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", eventName, params);
  }
}

// Combined tracking for both platforms
export function trackPhoneClickAll() {
  trackPhoneClick();
  trackGA("phone_click", { method: "click_to_call" });
}

export function trackFormSubmitAll(formType: string, serviceType?: string) {
  trackFormSubmit(formType, serviceType);
  trackGA("form_submit", { form_type: formType, service_type: serviceType || "" });
}

export function trackCTAClickAll(ctaName: string) {
  trackEstimateRequest();
  trackGA("cta_click", { cta_name: ctaName });
}
