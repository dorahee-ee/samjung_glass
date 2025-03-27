import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* 상단 제목/부제목 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            문의하기
          </h1>
          <p className="text-gray-700">
            유리 제조부터 설치까지, 전문가와 상담하세요. 24시간 내에
            답변드리겠습니다.
          </p>
        </div>

        {/* 실제 폼 영역 */}
        <form className="space-y-6">
          {/* 1) 기본 정보 (이름/업체명, 연락처, 이메일, 직함/부서) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 이름/업체명 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) 홍길동"
                required
              />
            </div>
            {/* 업체명 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                업체명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) 삼정유리"
                required
              />
            </div>
            {/* 연락처 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) 010-1234-5678"
                required
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예) example@email.com"
                required
              />
            </div>
          </div>

          {/* 2) 상담 유형 (체크박스) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              상담 유형 <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                "강화유리",
                "접합유리",
                "복층유리",
                "공학적유리",
                "CNC 추가가공",
                "쉐터드 정가공",
              ].map((item) => (
                <label key={item} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 3) 주소 */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">주소</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="예) 경기도 평택시 ..."
            />
          </div>

          {/* 4) 내용 (textarea) */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="문의 내용을 작성해주세요."
              required
            />
          </div>

          {/* 5) 파일 첨부 */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">파일</label>
            <input
              type="file"
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 6) 전송 버튼 */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              전송하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
