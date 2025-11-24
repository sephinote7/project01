// HeaderComp.js

import React, { useEffect, useRef, useState } from 'react';
import UserProfileSidebar from './UserProfileSlider';
import SearchBar from './SearchBar';
import CategoryDropdown from './CategoryDropdown';

function HeaderComp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const formRef = useRef(null); // 프로필 토글 함수 (상태 즉시 변경)

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  // 사이드바 닫기 함수 (상태 즉시 변경)
  const handleCloseSidebar = () => {
    setIsProfileOpen(false);
  }; // 스크롤 감지 로직

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 검색창 외부 클릭 닫기 로직

  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Tailwind CSS 클래스

  const headerClasses = `
  w-full z-[60] transition-all duration-400 h-24 
  ${isScrolled ? 'fixed top-0 bg-white/70 shadow-lg' : 'relative bg-white'}
 `;

  return (
    <div className={headerClasses}>
      <div className="container p-6 mx-auto w-full relative">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-5xl">Travlog</h1>
          <SearchBar
            formRef={formRef}
            searchScroll={() => setIsSearchOpen(!isSearchOpen)}
            submitHandler={(e) => e.preventDefault()}
          />
          <ul className="flex gap-4 font-bold">
            <li>Blog</li> <li>Profile</li> <li>로그인</li>
            <li>
              <button
                onClick={toggleProfile}
                className="text-sm hover:text-blue-500"
                title="프로필 보기"
              >
                사이드바
              </button>
            </li>
          </ul>
          <UserProfileSidebar
            isProfileOpen={isProfileOpen}
            onClose={handleCloseSidebar}
          />
        </div>
        {isSearchOpen && (
          <div
            className="absolute w-[70%] bg-blue-200 p-5 rounded-b-lg shadow-xl z-10 
           left-1/2 transform -translate-x-1/2"
            style={{ top: '96px' }}
          >
            <CategoryDropdown />
          </div>
        )}
      </div>
      {/* 문의하기 플로팅 버튼 */}
      <button
        className="fixed bottom-8 right-8 z-30 p-4 bg-blue-300 text-white font-semibold rounded-full shadow-2xl hover:bg-blue-500 transition-colors text-lg"
        title="궁금한 점을 문의하세요"
      >
        문의하기
      </button>
    </div>
  );
}

export default HeaderComp;
