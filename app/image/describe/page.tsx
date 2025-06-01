"use client";

import { ChangeEvent, useRef, useState } from "react";
/* @ts-ignore: css modules */
import styles from "../styles/image.module.css";

type DescribeType = "alt" | "short";

export default function DescribePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [describeType, setDescribeType] = useState<DescribeType>("alt");

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleTypeChange = (type: DescribeType) => {
    setDescribeType(type);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("type", describeType);

    try {
      const response = await fetch("/api/image/describe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setResult(data.data || "");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
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

      <div className={styles.descriptionTypeSection}>
        <label className={styles.label}>Select Type Description</label>
        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={`${styles.modeButton} ${describeType === "alt" ? styles.active : ""}`}
            onClick={() => handleTypeChange("alt")}
          >
            Alt
          </button>
          <button
            type="button"
            className={`${styles.modeButton} ${describeType === "short" ? styles.active : ""}`}
            onClick={() => handleTypeChange("short")}
          >
            Short
          </button>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}>
        <button
          type="button"
          className={styles.actionButton}
          onClick={handleSubmit}
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? "Processing..." : "Get Description"}
        </button>
      </div>

      {result && (
        <textarea
          className={styles.textBase64}
          value={result}
          readOnly
          rows={8}
          cols={50}
        >
        </textarea>
      )}
    </div>
  );
}
