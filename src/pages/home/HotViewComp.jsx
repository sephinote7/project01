// HotView.js

import React from 'react';
import LeniNo from '../../img/leni_No.png';

// 💡 1. 인기 게시물 데이터 구조 정의
const hotPosts = {
  top1: {
    id: 1,
    badge: '⭐️ TOP 1 - 가장 인기 있는 여행글 (전체 픽)',
    title: '제주 감성 3일 여행 코스',
    summary: '“제주공항-애월-협재_ 감성 호텔과 카페가 너무 좋았던...”',
    likes: 132,
    scraps: 48,
    views: 912,
  },
  top2: {
    id: 2,
    badge: 'TOP 2',
    title: '부산 해운대 낭만 여행',
    summary: '부산 해운대와 광안리에서 즐긴 낭만적인 3박 4일 일정',
    likes: 98,
    scraps: 22,
    views: 718,
  },
  top3: {
    id: 3,
    badge: 'TOP 3',
    title: '도쿄 디저트 투어 4일',
    summary: '시부야와 신주쿠를 중심으로 펼쳐지는 달콤한 디저트 코스',
    likes: 80,
    scraps: 17,
    views: 430,
  },
};

const Card = ({ post, isTop1 = false, isTop23 = false }) => {
  // TOP 1의 경우 이미지를 더 크게, 텍스트가 더 많이 보이도록 조정
  const imageClasses = isTop1
    ? 'w-1/3 h-full object-cover rounded-xl'
    : 'w-[120px] h-full object-cover rounded-xl';
  const contentWidth = isTop1 ? 'w-2/3' : 'flex-1';
  const titleSize = isTop1 ? 'text-3xl' : 'text-xl';
  const summaryLines = isTop1 ? 'line-clamp-4' : 'line-clamp-2';
  const containerHeight = isTop1
    ? 'h-[300px] md:h-[350px]'
    : 'h-[300px] w-full';

  return (
    <div
      className={`border p-5 rounded-2xl bg-gray-100 flex gap-4 shadow-xl transition-transform duration-300 hover:scale-[1.01] ${containerHeight}`}
    >
      {/* 썸네일 이미지 영역 */}
      <img
        src={LeniNo}
        alt={`No_img for ${post.title}`}
        className={imageClasses}
      />

      {/* 컨텐츠 영역 */}
      <div className={`flex flex-col gap-2 ${contentWidth}`}>
        {/* TOP 1 배지 (TOP 2/3에는 표시 안 함) */}
        {isTop1 && (
          <div className="text-lg font-bold text-amber-600 mb-2 border-b pb-2">
            {post.badge}
          </div>
        )}

        {/* 제목 */}
        <h3
          className={`font-extrabold ${titleSize} text-gray-800 hover:underline cursor-pointer`}
        >
          {post.title}
        </h3>

        {/* 요약/내용 (TOP 1은 더 길게 표시) */}
        <p className={`text-base text-gray-600 mt-1 ${summaryLines}`}>
          {post.summary}
        </p>

        {/* 통계 정보 */}
        <div className="flex items-center gap-4 text-base font-bold text-gray-700 mt-auto pt-3 border-t">
          {/* 좋아요 */}
          <span className="flex items-center gap-1">
            <span role="img" aria-label="likes">
              ❤️
            </span>{' '}
            {post.likes}
          </span>

          {/* 저장/스크랩 */}
          <span className="flex items-center gap-1">
            <span role="img" aria-label="scraps">
              📝
            </span>{' '}
            {post.scraps}
          </span>

          {/* 조회수 */}
          <span className="flex items-center gap-1">
            <span role="img" aria-label="views">
              👁️
            </span>{' '}
            {post.views}
          </span>
        </div>
      </div>
    </div>
  );
};

function HotView() {
  const { top1, top2, top3 } = hotPosts;

  return (
    <div className="container mx-auto bg-fuchsia-300 min-h-[850px] p-6 mb-5 rounded-3xl shadow-2xl">
      <p className="text-4xl mb-6 p-4 font-extrabold text-fuchsia-800 border-b-4 border-fuchsia-500">
        ✨ 주간 인기 게시글 TOP 3 ✨
      </p>

      {/* 📌 TOP 1 */}
      <div className="mb-10">
        <Card post={top1} isTop1={true} />
      </div>

      <p className="text-3xl mb-6 p-4 font-bold text-fuchsia-700">
        🏆 인기 글 TOP 2/3
      </p>

      {/* 📌 TOP 2 & 3 */}
      <div className="flex flex-wrap justify-between gap-4">
        {/* TOP 2 */}
        <div className="w-full md:w-[49%]">
          <Card post={top2} isTop23={true} />
        </div>

        {/* TOP 3 */}
        <div className="w-full md:w-[49%]">
          <Card post={top3} isTop23={true} />
        </div>
      </div>
    </div>
  );
}

export default HotView;
