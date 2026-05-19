"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
  loading: () => null,
});

export default function CookieBannerLazy() {
  return <CookieBanner />;
}
