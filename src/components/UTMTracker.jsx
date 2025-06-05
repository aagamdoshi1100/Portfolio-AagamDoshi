"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function UTMTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    const utm_campaign = params.get("utm_campaign");

    if (utm_source || utm_medium || utm_campaign) {
      posthog.capture("UTM Visit", {
        utm_source,
        utm_medium,
        utm_campaign,
      });
    }
  }, []);

  return null;
}
