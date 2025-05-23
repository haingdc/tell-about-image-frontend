import { type Ref } from "react";
import "./upload.component.css";

export default function UploadComponent(
  { ref, handleFileSelect, selectedFile }: {
    ref: Ref<HTMLInputElement>;
    handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedFile: File | null;
  },
) {
  const handleClick = () => {
    if (ref && "current" in ref && ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className="upload-component" onClick={handleClick}>
      <div className="image-wrapper">
        <img
          src="/static/icons/desert.svg"
          alt="Upload Icon, illustration of desert"
          width="150"
          height="150"
        />
      </div>
      <input
        type="file"
        ref={ref}
        onChange={handleFileSelect}
        accept="image/*"
        style={{ display: "none" }}
      />
      {selectedFile
        ? <div>Selected: {selectedFile.name}</div>
        : (
          <div className="upload-texts web-typo-center">
            <div className="text--primary">
              Click to upload or drag and drop
            </div>
            <div className="text--secondary">Supported files</div>
            <div className="extensions">
              <div className="extension_item">PNG</div>
              <div className="extension_item">JPG</div>
              <div className="extension_item">HEIC</div>
            </div>
          </div>
        )}
    </div>
  );
}
