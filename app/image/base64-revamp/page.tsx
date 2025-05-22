import styles from "../styles/image.module.css";
import UploadForm from "@/app/ui/image/base64-revamp/upload-form/upload-form.component.tsx";

export default function Base64RevampPage() {
  return (
    <div className={styles.rightPanel}>
      <UploadForm />
    </div>
  );
}
