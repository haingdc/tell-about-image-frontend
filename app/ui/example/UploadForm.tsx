'use client';

import UploadComponent from "@/app/ui/components/upload/upload.component.tsx";
import { type ChangeEvent, useRef, useState } from "react";

export default function UploadForm() {
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  return (
    <div>
      <UploadComponent
        ref={ref}
        handleFileSelect={handleFileSelect}
        selectedFile={selectedFile}
      />
    </div>
  );
}
