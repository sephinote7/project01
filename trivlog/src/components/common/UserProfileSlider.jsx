import React, { useRef, useEffect } from 'react';
import leniNo from '../../img/leni_No.png';

// isProfileOpen: 현재 상태 값 (열림/닫힘)
// onClose: 사이드바를 닫는 함수
function UserProfileSidebar({ isProfileOpen, onClose }) {
  // 💡 사이드바 영역 자체를 참조하기 위한 useRef
  const sidebarRef = useRef(null);

  // 💡 외부 클릭 감지 로직 (재사용)
  useEffect(() => {
    function handleClickOutside(e) {
      // 사이드바가 열려 있고, 클릭된 요소가 사이드바 내부가 아니라면 닫기
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose(); // HeaderComp에서 전달받은 닫기 함수 호출
      }
    }

    // 사이드바가 열려있을 때만 리스너를 추가하는 것이 더 효율적입니다.
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen, onClose]); // isProfileOpen이 변경될 때마다 effect 재실행

  // isProfileOpen 상태에 따라 사이드바가 보이거나 숨겨집니다.
  if (!isProfileOpen) {
    return null; // 닫힌 상태면 아무것도 렌더링하지 않습니다.
  }

  // Tailwind CSS: fixed, inset-y-0, right-0으로 오른쪽 고정
  return (
    // 💡 ref 연결
    <div
      ref={sidebarRef}
      className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 translate-x-0"
    >
      <div className="flex justify-end">
        {/* 닫기 버튼 */}
        <button onClick={onClose} className="text-xl font-bold">
          &times;
        </button>
      </div>

      {/* --- 프로필 콘텐츠 영역 (이미지 참조) --- */}
      <h2 className="text-2xl font-bold mb-4">프로필</h2>

      {/* 프로필 정보 */}
      <div className="flex items-center space-x-4 border-b pb-4 mb-4">
        {/* 💡 임시 프로필 이미지 */}
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

      {/* 활동 요약 박스 */}
      <div className="border p-3 rounded-lg bg-gray-50 mb-4">
        <p className="font-bold mb-2">활동 요약 박스</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span>총 좋아요 ❤️: 1,830</span>
          <span>작성 글 📝: 32개</span>
          <span>저장한 글 💾: 54개</span>
          <span>가입일 📅: 2025.01.12</span>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="flex justify-around border-t pt-4">
        <button className="text-sm font-bold text-red-500">
          [ 내 여행 글 ]
        </button>
        <button className="text-sm">[ 저장한 글 ]</button>
        <button className="text-sm">[ 좋아요한 글 ]</button>
      </div>

      {/* 임시 목록 */}
      <div className="mt-4 space-y-3 max-h-[calc(100vh-350px)] overflow-y-auto">
        <p className="text-sm text-red-500">여행 글 목록 (리스트 or 카드형)</p>
        <div className="p-3 border rounded">제주 2박3일 힐링 코스</div>
        <div className="p-3 border rounded">도쿄 3박4일 맛집 투어</div>
      </div>
    </div>
  );
}

export default UserProfileSidebar;
