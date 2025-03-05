import Link from "next/link";

export default function TestPage() {
  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Test Page for Dynamic Routes</h1>

      <p>
        This page tests direct navigation to event pages using different link
        styles.
      </p>

      <div style={{ marginTop: "30px" }}>
        <h2>Test Links with Next.js Link Component:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              href="/upcoming-events/healthcare-innovation-summit/"
              style={{
                color: "blue",
                textDecoration: "underline",
                display: "block",
                padding: "10px",
                border: "1px solid blue",
                borderRadius: "4px",
              }}
            >
              Healthcare Innovation Summit - Link Component
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link
              href="/upcoming-events/digital-health-workshop/"
              style={{
                color: "green",
                textDecoration: "underline",
                display: "block",
                padding: "10px",
                border: "1px solid green",
                borderRadius: "4px",
              }}
            >
              Digital Health Workshop - Link Component
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Test Links with Regular Anchor Tags:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="/upcoming-events/healthcare-innovation-summit/"
              style={{
                color: "purple",
                textDecoration: "underline",
                display: "block",
                padding: "10px",
                border: "1px solid purple",
                borderRadius: "4px",
              }}
            >
              Healthcare Innovation Summit - Anchor Tag
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="/upcoming-events/digital-health-workshop/"
              style={{
                color: "orange",
                textDecoration: "underline",
                display: "block",
                padding: "10px",
                border: "1px solid orange",
                borderRadius: "4px",
              }}
            >
              Digital Health Workshop - Anchor Tag
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Link
          href="/upcoming-events/"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Back to All Events
        </Link>
      </div>
    </div>
  );
}
