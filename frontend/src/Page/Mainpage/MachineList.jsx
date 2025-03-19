import React from "react";

// 예시: 프로젝트 내 assets 폴더에 이미지들이 있다고 가정
import HeatSoakOvenImg from "../../assets/black.jpg";
import BangChiroImg from "../../assets/black.jpg";
import CncImg from "../../assets/black.jpg";

const MachineList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 섹션 제목 */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">설비보유현황</h2>
        {/* 간단 설명 */}
        <p className="text-gray-700 mb-8">
          (주)삼정유리의 설비보유현황입니다.
        </p>

        {/* 3개 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1) Heat soak oven */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={HeatSoakOvenImg}
              alt="Heat soak oven"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">강화로</h3>
            </div>
          </div>

          {/* 2) 방치로 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={BangChiroImg}
              alt="방치로"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">접합로</h3>
            </div>
          </div>

          {/* 3) CNC */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={CncImg}
              alt="CNC"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">복층라인</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineList;