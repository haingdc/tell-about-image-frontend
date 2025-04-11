'use client';

import UploadComponent from '@/app/ui/components/upload/upload.component.tsx';
import ImageEdit from '@/app/ui/components/image-edit/image-edit.component.tsx';
import { type ChangeEvent, useRef, useState } from 'react';
import "./upload-form.component.css";

export default function UploadForm() {
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
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
    <div className="upload-form-component">
      {previewUrl ? (
        <ImageEdit imageUrl={previewUrl} onClose={handleClose} />
      ) : (
        <UploadComponent
          ref={ref}
          handleFileSelect={handleFileSelect}
          selectedFile={selectedFile}
        />
      )}
    </div>
  );
}
