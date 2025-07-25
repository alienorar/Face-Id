import React from "react"

const LoginPage: React.FC = () => {
  const handleHemisLogin = () => {
    window.location.href = "https://edu.asianuniversity.uz/teacher/hemis/login"
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <button
        onClick={handleHemisLogin}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      >
        HEMIS orqali kirish
      </button>
    </div>
  )
}

export default LoginPage