"use client";

import "./base64-section.component.css";
import "./google-chrome-tabs-like.css";
import "pedals-gears-wc";
import { CopyDocument, X } from "@/app/ui/icons/index.ts";
import { useMemo, useState } from "react";
import LitButton from "../lit-button/lit-button-wrapper-react.tsx";
import { Button } from "@/app/ui/components/button/index.ts";

export function Base64Section__Header() {
  return (
    <div>
      <div className="sd-tabs">
        <input
          className="sd-tab-radio"
          name="tabs"
          tabIndex={1}
          type="radio"
          id="tabone"
          checked={true}
        />
        <label className="sd-tab-label" htmlFor="tabone">
          <div className="sd-tab-icon">
          </div>

          <div className="sd-tab-desc">Tab One</div>
          <div className="sd-tab-icon sd-tab-close">
            <X />
          </div>
        </label>
        <div className="sd-tab-content" tabIndex={1}>
          <h2>Tab One Content</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
          </p>
        </div>
      </div>
    </div>
  );
}

interface Base64SectionProps {
  children?: string;
}
export default function Base64Section({ children }: Base64SectionProps) {
  const [mode, setMode] = useState<"raw" | "img">("raw");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleMode = () => {
    setMode((val) => val === "raw" ? "img" : "raw");
  };
  const text = useMemo(() => {
    if (typeof children !== "string") {
      return "";
    }
    if (isReadMore) {
      return children;
    }
    return children.substring(0, 2000);
  }, [children, isReadMore]);

  const handleCopyToClipboard = async () => {
    if (typeof children !== "string") return;
    if ("clipboard" in navigator && navigator.clipboard) {
      await (
        navigator.clipboard as { writeText(text: string): Promise<void> }
      ).writeText(children);
    } else {
      throw new Error("Clipboard API not supported");
    }
  };
  return (
    <div>
      <div className="tabs">
        <div className="tab-bar">
          <div className="tab-item">
            <input
              className="tab-radio"
              name="tabs"
              tabIndex={1}
              type="radio"
              id="tabone"
            />
            <label className="tab-label" htmlFor="tabone">
              <div className="tab-icon">
                <Button
                  type="button"
                  size="icon"
                  intent="secondary"
                  onClick={handleCopyToClipboard}
                >
                  <CopyDocument />
                </Button>
              </div>
            </label>
          </div>
          <LitButton onClick={toggleMode}>{mode === "raw" ? "Img" : "Raw"}</LitButton>
        </div>
        <div className="tab-content">
          <div className="wrapper-base64-text-container">
            <div className="wrapper-base64-text">
              {text}
              {!isReadMore && (
                <button type="button" onClick={() => setIsReadMore(true)}>Read more</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
