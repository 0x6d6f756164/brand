import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle, #262626 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: "#e5e5e5",
            fontFamily: "monospace",
            letterSpacing: -1,
          }}
        >
          Mouad Dev
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#8a8a8a",
            fontFamily: "monospace",
          }}
        >
          Full-Stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}