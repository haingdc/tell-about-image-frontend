"use client";

import styles from "./styles/image.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function ImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <button
          type="button"
          className={styles.modeButton}
          data-active={pathname === "/image/base64"}
          onClick={() => handleNavigate("/image/base64")}
        >
          Base64
        </button>
        <button
          type="button"
          className={styles.modeButton}
          data-active={pathname === "/image/describe"}
          onClick={() => handleNavigate("/image/describe")}
        >
          Describe
        </button>
      </div>
      <div className="separator" />
      {children}
    </div>
  );
}
