/* @ts-ignore: css modules */
import styles from "../styles/image.module.css";
import GetBase64FromImage from "@/app/ui/image/base64-revamp/get-base64-from-image/get-base64-from-image.component.tsx";

export default function Base64RevampPage() {
  return (
    <div className={styles.rightPanel}>
      <GetBase64FromImage />
    </div>
  );
}
