import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "#0a0a0f",
          color: "#ededed",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#fb923c", fontFamily: "monospace" }}>
          {profile.location}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 24 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "rgba(237,237,237,0.7)", marginTop: 16 }}>
          {profile.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
