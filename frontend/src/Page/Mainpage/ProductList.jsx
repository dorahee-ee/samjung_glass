import React from "react";

import TemperedImg from "../../assets/black.jpg";
import LaminatedImg from "../../assets/black.jpg";
import PairImg from "../../assets/black.jpg";
import RailingImg from "../../assets/black.jpg";
import MetalImg from "../../assets/black.jpg";
import PvcImg from "../../assets/black.jpg";

const products = [
  { title: "강화", image: TemperedImg },
  { title: "접합", image: LaminatedImg },
  { title: "복층", image: PairImg },
  { title: "난간대", image: RailingImg },
  { title: "메탈", image: MetalImg },
  { title: "PVC", image: PvcImg },
];

const ProductList = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 제목 */}
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-8">PRODUCTS</h2>
        
        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden"
            >
              {/* 제품 이미지 */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              
              {/* 카드 텍스트 영역 */}
              <div className="p-4">
                <h3 className="text-center text-xl font-bold mb-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

