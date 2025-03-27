import React from "react";
import IntroImage from "../../assets/pic.jpg"; // 배경으로 쓸 이미지

const About = () => {
  return (
    <div className="bg-white">
      {/* 1) 상단 흰색 배경 섹션 */}
      <section className="pt-20 bg-cover bg-center relative">
        <h1 className="text-4xl font-bold text-white">About Samjung</h1>
      </section>

      {/* 2) 배경 이미지 섹션 (About Samjung) */}
      <section className="relative">
        {/* 배경 이미지 */}
        <div
          className="h-[50vh] md:h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${IntroImage})` }}
        />
        {/* 어두운 오버레이 (가독성 향상) */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* 문구 (이미지 위) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Samjung
          </h2>
          <p className="max-w-2xl leading-relaxed">
            본 회사는 건축 및 산업용 가공 전문기술을 기반으로 국내외 유리 시장을
            선도하고 있습니다. 고객 요구에 맞춘 맞춤형 솔루션과 지속적인
            연구개발로 고품질의 유리를 제공하며, 다양한 분야에서 최고의 파트너가
            되기 위해 노력하고 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
