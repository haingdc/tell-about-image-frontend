"use client";

import { useState, useRef } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      
      // Check if file is an image
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }

      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setDescription(null); // Reset description when new image is uploaded
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setError(null);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      
      // Check if file is an image
      if (!droppedFile.type.startsWith('image/')) {
        setError('Please drop an image file');
        return;
      }

      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setDescription(null); // Reset description when new image is uploaded
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleGenerateDescription = async () => {
    if (!file) {
      setError('Please upload an image first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      // This would be replaced with your actual API endpoint
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate description');
      }

      const data = await response.json();
      setDescription(data.description);
    } catch (err) {
      setError('Error generating description. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container-s">
      <h1 className="web-typo-heading-bold-3 web-typo-center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        Image Description Generator
      </h1>
      
      <div 
        className="upload-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
        style={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '2rem',
          backgroundColor: 'rgba(0,0,0,0.02)'
        }}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange} 
          accept="image/*" 
          style={{ display: 'none' }}
        />
        
        {!preview ? (
          <div>
            <p className="web-typo-regular-3">Drag and drop an image here, or click to select</p>
            <p className="web-typo-regular-5" style={{ color: '#666' }}>Supported formats: JPG, PNG, GIF</p>
          </div>
        ) : (
          <div style={{ position: 'relative', height: '300px', width: '100%' }}>
            <img 
              src={preview} 
              alt="Preview" 
              style={{ 
                objectFit: 'contain',
                maxHeight: '100%',
                maxWidth: '100%',
                margin: '0 auto',
                display: 'block'
              }}
            />
          </div>
        )}
      </div>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
          {error}
        </div>
      )}

      {preview && (
        <button 
          onClick={handleGenerateDescription}
          disabled={loading}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
            marginBottom: '2rem',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Generating...' : 'Generate Description'}
        </button>
      )}

      {description && (
        <div 
          className="description-container"
          style={{
            backgroundColor: '#f0f9ff',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid #cce5ff'
          }}
        >
          <h2 className="web-typo-bold-4" style={{ marginBottom: '0.5rem' }}>AI Description</h2>
          <p className="web-typo-regular-4">{description}</p>
        </div>
      )}
    </div>
  );
}
