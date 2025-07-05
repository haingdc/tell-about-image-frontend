import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="web-container">
        <div
          className="general-box"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "4rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            className="title"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            AI Image Description Generator
          </div>
          <div
            className="subtitle"
            style={{
              fontSize: "1.2rem",
              marginBottom: "2.5rem",
              color: "#666",
            }}
          >
            Upload your images and get AI-generated descriptions instantly. Our advanced AI
            technology analyzes your images and provides detailed, accurate descriptions.
          </div>
          <Link
            href="./image/base64"
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.3s ease",
            }}
          >
            Get Started
          </Link>
          <Link href="./example" prefetch={false}>Example</Link>
        </div>
      </div>
    </main>
  );
}
