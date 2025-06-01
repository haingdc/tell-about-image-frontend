"use client";
import { type ChangeEvent, useRef, useState } from "react";
import UploadComponent from "@/app/ui/components/upload/upload.component.tsx";
import ImageEdit from "@/app/ui/components/image-edit/image-edit.component.tsx";
import "./get-base64-from-image.component.css";
import Base64Section from "@/app/ui/components/base64-section/base64-section.component.tsx";

function GetBase64FromImage() {
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    const formData = new FormData();
    formData.append("file", file);
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
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (ref.current) {
      ref.current.files = null;
    }
  };

  return (
    <div className="get-base64-from-image-component">
      {previewUrl ? <ImageEdit imageUrl={previewUrl} onClose={handleClose} /> : undefined}
      {!previewUrl
        ? (
          <UploadComponent
            ref={ref}
            handleFileSelect={handleFileSelect}
            selectedFile={selectedFile}
          />
        )
        : undefined}
      <Base64Section>{result}</Base64Section>
    </div>
  );
}

export default GetBase64FromImage;
