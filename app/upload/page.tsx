'use client';

import { useState, useRef, ChangeEvent } from 'react';
import styles from './upload.module.css';

export default function UploadPage() {
  const [selectedMode, setSelectedMode] = useState<'base64' | 'describe'>('base64');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleModeChange = (mode: 'base64' | 'describe') => {
    setSelectedMode(mode);
  };

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
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'x-upload-mode': selectedMode
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setResult(data.result || data.base64 || '');
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <button
          className={styles.modeButton}
          data-active={selectedMode === 'base64'}
          onClick={() => handleModeChange('base64')}
        >
          Base64
        </button>
        <button
          className={styles.modeButton}
          data-active={selectedMode === 'describe'}
          onClick={() => handleModeChange('describe')}
        >
          Describe
        </button>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.uploadArea} onClick={handleUploadClick}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            style={{ display: 'none' }}
          />
          {selectedFile ? (
            <div>Selected: {selectedFile.name}</div>
          ) : (
            <>
              <div>Click to upload or drag and drop</div>
              <div>Supported files: PNG, JPG, JPEG</div>
            </>
          )}
        </div>

        <div style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
          <button
            className={styles.actionButton}
            onClick={handleSubmit}
            disabled={!selectedFile || isLoading}
          >
            {isLoading
              ? 'Processing...'
              : `Get ${selectedMode === 'base64' ? 'Base64' : 'Description'}`}
          </button>

          {result && (
            <div style={{ marginTop: '1rem', wordBreak: 'break-all' }}>
              <h3>Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
