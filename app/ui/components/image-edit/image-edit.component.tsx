import "./image-edit.component.css";

export default function ImageEdit({
  imageUrl,
  onClose,
}: {
  imageUrl: string;
  onClose: () => void;
}) {
  return (
    <div className="image-edit">
      <button type="button" className="close-button" onClick={onClose}>
        <span>×</span>
      </button>
      <div className="image-container">
        <img src={imageUrl} alt="Uploaded preview" />
      </div>
    </div>
  );
}
