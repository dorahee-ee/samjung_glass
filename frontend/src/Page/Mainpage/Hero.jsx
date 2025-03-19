import React from "react";
import HeroImage from "../../assets/pic.jpg"; // 원하는 배경 이미지를 가져오세요.

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* 어두운 오버레이 (텍스트 가독성 향상) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* 텍스트 영역 */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="font-bold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          삼정유리,
          <br />
          신뢰할 수 있는 유리 제조의 기준을 만듭니다.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
