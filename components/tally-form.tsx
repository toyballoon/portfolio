"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_FORM_ID = "vGgPPv";
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

export function TallyForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      if (iframeRef.current && !iframeRef.current.src) {
        iframeRef.current.src = TALLY_EMBED_URL;
      }
    };

    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;

      if (e.data.includes("Tally.FormSubmitted")) {
        setSubmitted(true);
      }

      if (e.data.includes("Tally.Embeds")) {
        try {
          const data = JSON.parse(e.data);
          if (
            data.event === "Tally.Embeds.resize" &&
            iframeRef.current &&
            typeof data.payload?.height === "number"
          ) {
            iframeRef.current.style.height = `${data.payload.height}px`;
          }
        } catch {
          // ignore malformed messages
        }
      }
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
    } else {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${widgetScriptSrc}"]`
      );

      if (existingScript) {
        existingScript.addEventListener("load", loadEmbeds);
        loadEmbeds();
      } else {
        const script = document.createElement("script");
        script.src = widgetScriptSrc;
        script.async = true;
        script.onload = loadEmbeds;
        script.onerror = loadEmbeds;
        document.body.appendChild(script);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (submitted) {
    return (
      <div className="flex min-h-[320px] w-full flex-col border-2 border-[#FF4D00] bg-black md:min-h-[400px]">
        <div className="h-1 w-full bg-[#FF4D00]" />
        <div className="flex flex-1 items-center justify-center px-6 py-12">
          <p className="text-center text-lg font-bold text-[#FF4D00] md:text-xl">
            Thanks for contact me!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group w-full border-2 border-white bg-black transition-colors hover:border-[#FF4D00]">
      <div className="h-1 w-full bg-[#FF4D00]" />
      <div className="px-4 py-6 md:px-8 md:py-8">
        <iframe
          ref={iframeRef}
          data-tally-src={TALLY_EMBED_URL}
          src={TALLY_EMBED_URL}
          loading="lazy"
          width="100%"
          height="400"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Contact"
          className="min-h-[360px] w-full bg-black md:min-h-[420px]"
          style={{ background: "#000000", colorScheme: "dark" }}
        />
      </div>
    </div>
  );
}
