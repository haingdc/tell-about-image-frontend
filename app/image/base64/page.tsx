"use client";

import { ChangeEvent, useRef, useState } from "react";
/* @ts-ignore: css modules */
import styles from "../styles/image.module.css";
import clsx from "clsx";

export default function Base64Page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tooltip, setTooltip] = useState("Copy to clipboard");

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/image/base64", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setResult(data.base64 || "");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if ("clipboard" in navigator && navigator.clipboard) {
      await (
        navigator.clipboard as { writeText(text: string): Promise<void> }
      ).writeText(result);
      setTooltip("Copied");
    } else {
      throw new Error("Clipboard API not supported");
    }
  };

  const handleCopyImgTag = async () => {
    if ("clipboard" in navigator && navigator.clipboard) {
      const imgTag = `<img src="${result}" />`;
      await (
        navigator.clipboard as { writeText(text: string): Promise<void> }
      ).writeText(imgTag);
      setTooltip("Copied img tag");
    } else {
      throw new Error("Clipboard API not supported");
    }
  };

  const handleCopyToClipboardOut = () => {
    setTooltip("Copy to clipboard");
  };

  return (
    <div className={styles.rightPanel}>
      <div className={styles.uploadArea} onClick={handleUploadClick}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: "none" }}
        />
        {selectedFile ? <div>Selected: {selectedFile.name}</div> : (
          <>
            <div>Click to upload or drag and drop</div>
            <div>Supported files: PNG, JPG, JPEG</div>
          </>
        )}
      </div>

      <div style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}>
        <button
          type="button"
          className={styles.actionButton}
          onClick={handleSubmit}
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? "Processing..." : "Get Base64"}
        </button>
      </div>

      <div className={styles.textareaToolbar}>
        <div className={clsx(styles.tooltip, styles.tooltipSimple)}>
          <button
            type="button"
            className={styles.toolbarButton}
            onClick={handleCopyToClipboard}
            onMouseOut={handleCopyToClipboardOut}
            disabled={!result}
          >
            <span className={styles.tooltiptext}>{tooltip}</span>
            <i className="icon-clipboard"></i>
            Copy to Clipboard
          </button>
          <button
            type="button"
            className={styles.toolbarButton}
            onClick={handleCopyImgTag}
            onMouseOut={handleCopyToClipboardOut}
            disabled={!result}
          >
            <span className={styles.tooltiptext}>{tooltip}</span>
            <i className="icon-clipboard"></i>
            Copy as Img Tag
          </button>
        </div>
      </div>
      <textarea
        className={styles.textBase64}
        value={result}
        readOnly
        rows={8}
        cols={50}
      >
      </textarea>
    </div>
  );
}
