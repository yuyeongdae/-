import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToAdmin = () => {
    router.push("/admin");
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f6", // 오프화이트
        minHeight: "100vh",
        padding: 60,
        fontFamily: "sans-serif",
        textAlign: "center",
        color: "#333"
      }}
    >
      <div style={{ fontSize: 80, marginBottom: 20 }}>🐶</div>
      <h1 style={{ fontSize: 40, marginBottom: 10 }}>온마루펫</h1>
      <p style={{ fontSize: 18, marginBottom: 40 }}>
        프리미엄 반려견 간식 정기배송 플랫폼입니다.
      </p>
      <button
        onClick={goToAdmin}
        style={{
          backgroundColor: "#ffb347",
          color: "white",
          fontSize: 16,
          padding: "12px 24px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
      >
        관리자 로그인 바로가기 →
      </button>
    </div>
  );
}
