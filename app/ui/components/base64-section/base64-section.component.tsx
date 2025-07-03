"use client";

import "./google-chrome-tabs-like.css";
import { CopyDocument } from "@/app/ui/icons/index.ts";
import { useMemo, useState } from "react";
import LitButton from "../lit-button/lit-button-wrapper-react.tsx";
import { Button } from "@/app/ui/components/button/index.ts";

interface Base64SectionProps {
  children?: string;
  readMore?: boolean;
  onReadMore?: () => void;
}
function Base64Section({ children, readMore, onReadMore }: Base64SectionProps) {
  const [mode, setMode] = useState<"raw" | "img">("raw");
  const toggleMode = () => {
    setMode((val) => val === "raw" ? "img" : "raw");
  };
  const text = useMemo(() => {
    if (typeof children !== "string") {
      return "";
    }
    if (readMore) {
      return children;
    }
    return children.substring(0, 2000);
  }, [children, readMore]);

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
          <div className="toggle-button">
            <LitButton onClick={toggleMode}>{mode === "raw" ? "Img" : "Raw"}</LitButton>
          </div>
        </div>
        <div className="tab-content">
          <div className="wrapper-base64-text-container">
            {children
              ? (
                <div className="wrapper-base64-text">
                  {text}
                  {children && !readMore && (
                    <button
                      className="read-more-button"
                      type="button"
                      onClick={onReadMore}
                    >
                      Read more
                    </button>
                  )}
                </div>
              )
              : <div className="placeholder" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base64Section;
