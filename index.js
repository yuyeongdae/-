import Image from "next/image";
import { useRouter } from "next/router";

export default function OnmarupetHome() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#432818]">
      {/* 상단 네비게이션 */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#fff0d6] border-b border-[#e0c7a3]">
        <h1 className="text-2xl font-bold">온마루펫</h1>
        <nav className="space-x-4 text-sm">
          <button>강아지</button>
          <button>고양이</button>
          <button>브랜드소개</button>
          <button>고객센터</button>
          <button onClick={() => router.push("/admin")} className="ml-4 px-3 py-1 bg-[#ffb347] text-white rounded">관리자</button>
        </nav>
      </header>

      {/* 메인 비주얼 */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-2">자연을 담은 정직한 간식</h2>
        <p className="text-lg text-[#6a4e33]">장어 부산물로 만든 고단백 반려견 간식</p>
        <div className="mt-6 inline-block bg-[#ffe9c4] text-[#432818] px-4 py-2 rounded-full text-sm font-medium">
          신규 가입 시 10% 할인 혜택!
        </div>
      </section>

      {/* 제품 카드 소개 */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 pb-12">
        <div className="bg-white shadow rounded p-4 text-center">
          <Image src="/stick.png" width={200} height={150} alt="스틱 간식" className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg">스틱</h3>
          <p className="text-sm text-[#6a4e33]">에너지 충전용 장어 단백질 스틱</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <Image src="/treat.png" width={200} height={150} alt="트릿 간식" className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg">트릿</h3>
          <p className="text-sm text-[#6a4e33]">겉바속촉한 바삭한 껍질 간식</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <Image src="/jerky.png" width={200} height={150} alt="져키 간식" className="mx-auto mb-4" />
          <h3 className="font-semibold text-lg">져키</h3>
          <p className="text-sm text-[#6a4e33]">저온건조 방식의 건강한 육포</p>
        </div>
      </section>

      {/* 하단 정보 */}
      <footer className="bg-[#fff0d6] text-center text-sm py-6 text-[#6a4e33]">
        © 2025 온마루펫 | 프리미엄 반려동물 정기배송 플랫폼
      </footer>
    </div>
  );
}
