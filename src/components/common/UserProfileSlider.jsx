// UserProfileSidebar.js

import React, { useEffect, useState } from 'react';
import leniNo from '../../img/leni_No.png';

const ANIMATION_DURATION = 300;

function UserProfileSidebar({ isProfileOpen, onClose }) {
  // 1. DOM 렌더링 제어 상태: isProfileOpen 상태를 따라 초기화 (처음부터 열려있으면 Mounted도 true)
  const [isMounted, setIsMounted] = useState(isProfileOpen);
  // 2. 닫힘 애니메이션 상태: isProfileOpen 상태와 반대로 초기화 (isProfileOpen이 false면 isClosing은 true여야 함)
  const [isClosing, setIsClosing] = useState(!isProfileOpen); // 💡 초기값 수정

  useEffect(() => {
    let timer;

    if (isProfileOpen) {
      // ✅ 열릴 때:
      setIsMounted(true); // DOM에 나타나도록 함 (translate-x-full 상태로 시작)

      // 💡 50ms 지연 후 닫힘 상태를 해제 (translate-x-full -> translate-x-0으로 이동 시작)
      timer = setTimeout(() => {
        setIsClosing(false);
      }, 50);
    } else {
      // ✅ 닫힐 때:
      if (isMounted) {
        // 1. 닫힘 애니메이션 시작 (isClosing: true)
        setIsClosing(true);

        // 2. 300ms 후에 DOM에서 완전히 제거
        timer = setTimeout(() => {
          setIsMounted(false);
        }, ANIMATION_DURATION);
      }
    }

    return () => clearTimeout(timer); // Cleanup
  }, [isProfileOpen, isMounted]);

  // 컴포넌트가 마운트되지 않았으면 렌더링하지 않음
  if (!isMounted) {
    return null;
  }

  // 최종적으로 사이드바가 보이는지 여부
  // 열려 있거나 (isProfileOpen: true) 닫힘 애니메이션 중이 아닐 때 (isClosing: false)
  const sidebarIsVisible = isProfileOpen && !isClosing;

  // --- 동적 클래스 정의 ---

  // 오버레이 클래스
  const overlayClasses = `
    fixed inset-0 bg-black/60 transition-opacity z-40 duration-300
    ${sidebarIsVisible ? 'opacity-100' : 'opacity-0'}
  `;

  // 사이드바 클래스
  const sidebarClasses = `
    fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 p-6 
    transform transition-transform duration-300 
    ${sidebarIsVisible ? 'translate-x-0' : 'translate-x-full'}
  `;

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={sidebarClasses} onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">프로필</h2>
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <img src={leniNo} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <p className="font-semibold text-lg">EmilyChen</p>
            <p className="text-sm text-yellow-600">
              ★ 여행의 달인 (전체 랭킹 12위)
            </p>
            <button className="text-xs text-blue-500 mt-1 cursor-pointer">
              [프로필 수정] 버튼
            </button>
          </div>
        </div>
        <div className="border p-3 rounded-lg bg-gray-50 mb-4">
          <p className="font-bold mb-2">활동 요약 박스</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>총 좋아요 ❤️: 1,830</span>
            <span>작성 글 📝: 32개</span>
            <span>저장한 글 💾: 54개</span>
            <span>가입일 📅: 2025.01.12</span>
          </div>
        </div>
        <div className="flex justify-around border-t pt-4">
          <button className="text-sm font-bold text-red-500">
            [ 내 여행 글 ]
          </button>
          <button className="text-sm">[ 저장한 글 ]</button>
          <button className="text-sm">[ 좋아요한 글 ]</button>
        </div>
        <div className="mt-4 space-y-3 max-h-[calc(100vh-350px)] overflow-y-auto">
          <p className="text-sm text-red-500">
            여행 글 목록 (리스트 or 카드형)
          </p>
          <div className="p-3 border rounded">제주 2박3일 힐링 코스</div>
          <div className="p-3 border rounded">도쿄 3박4일 맛집 투어</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSidebar;
