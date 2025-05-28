// src/components/AnatomyModel.jsx
import React from "react";
import { Button } from "antd";
import anatomyImage from "../assets/anatomy.jpg"; // ✅ Import the image

const AnatomyModel = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Human Model Image */}
      <img
        src={anatomyImage}
        alt="Anatomy Model"
        style={{
          maxHeight: "100%",
          width: "auto",
          flexShrink: 0,
          objectFit: "contain",
        }}
      />

      {/* Heart Tag */}
      <Button
        size="small"
        type="default"
        style={{
          position: "absolute",
          top: "28%",
          right: "20px", // ✅ fixed unit
          transform: "translateY(-50%)",
          color: "white",
          borderColor: "blue",
          backgroundColor: "blue",
          zIndex: 1,
        }}
      >
        ❤️ Healthy Heart
      </Button>

      {/* Leg Tag */}
      <Button
        size="small"
        type="default"
        style={{
          position: "absolute",
          bottom: "28%",
          left: "22%",
          transform: "translateX(-50%)",
          color: "blue",
          borderColor: "cyan",
          backgroundColor: "cyan",
          zIndex: 1,
        }}
      >
        🦵 Healthy Leg
      </Button>
    </div>
  );
};

export default AnatomyModel;
