// VisualComp.js

import React from 'react';

function VisualComp() {
  return (
    // 💡 pt-24 (약 96px) 추가: Fixed Header가 차지하는 공간만큼 밀어냄
    <div className="container bg-pink-100 mx-auto w-full h-[100vh] lg:max-h-[500px] flex mb-5 pt-24">
      <p className="flex items-center text-5xl font-extrabold">
        대충 멋진 로고
      </p>
    </div>
  );
}

export default VisualComp;
