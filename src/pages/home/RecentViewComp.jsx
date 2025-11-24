// RecentViewComp.js

import React from 'react';
import LeniNo from '../../img/leni_No.png';

// 💡 1. 데이터 구조를 통계 정보로 변경
const recentPosts = [
  {
    id: 1,
    title: 'Lorem, ipsum dolor.',
    likes: 25,
    scraps: 2,
    views: 110,
    summary: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: '여행은 늘 옳다.',
    likes: 45,
    scraps: 8,
    views: 230,
    summary: '바다로 떠나자.',
  },
  {
    id: 3,
    title: '맛집 탐방 기록',
    likes: 78,
    scraps: 15,
    views: 450,
    summary: '파스타 최고.',
  },
  {
    id: 4,
    title: '제주도 힐링',
    likes: 12,
    scraps: 1,
    views: 70,
    summary: '맑은 공기.',
  },
  {
    id: 5,
    title: '도심 속 휴가',
    likes: 50,
    scraps: 10,
    views: 300,
    summary: '호캉스 최고.',
  },
  {
    id: 6,
    title: '알고리즘 공부',
    likes: 33,
    scraps: 5,
    views: 180,
    summary: '파이썬 재미.',
  },
];

const cardText = 'text-sm text-gray-600';

function RecentViewComp() {
  // 💡 2. 카드 컴포넌트: 통계 정보를 표시하도록 UI 변경
  const Card = ({ post }) => (
    <div className="h-[200px] w-full md:w-[32%] border p-3 rounded-2xl bg-gray-100 flex gap-4 shadow-md">
      <img
        src={LeniNo}
        alt="No_img"
        className="w-[150px] h-full object-cover rounded-xl"
      />
      <div className="flex flex-col gap-2 pt-1 pb-1 overflow-hidden">
        {/* 제목 */}
        <h3 className="font-bold text-2xl hover:underline cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis mb-1">
          {post.title}
        </h3>

        {/* 요약 텍스트 (줄바꿈 방지 및 줄임표 적용) */}
        <p
          className={
            cardText + ' mb-4 whitespace-nowrap overflow-hidden text-ellipsis'
          }
        >
          {post.summary}
        </p>

        {/* 💡 통계 정보 단 (하트, 저장, 조회수) */}
        <div className="flex items-center gap-3 text-base font-medium text-gray-700">
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

  return (
    <div className="container mx-auto bg-sky-200 h-[100%] p-6 mb-5">
      <p className="text-3xl mb-4 p-4 font-semibold">최근 게시 글</p>

      <div className="mb-5 flex flex-wrap justify-start gap-4">
        {recentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default RecentViewComp;
