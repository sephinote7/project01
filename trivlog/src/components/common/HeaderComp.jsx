import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfileSidebar from './UserProfileSlider';

function HeaderComp() {
  // 검색 스크롤 창 토글
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const formRef = useRef(null);

  const buttonClass =
    'border rounded-xl p-1 px-3 hover:bg-blue-500 hover:text-white cursor-pointer';

  const searchScroll = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    // 💡 프로필 열 때 검색창 닫기 (동시 열림 방지)
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
  }, []);

  return (
    <div className="container bg-amber-200 p-6 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl">Travlog</h1>

        {/* 검색 */}
        <form className="relative" ref={formRef} onSubmit={submitHandler}>
          <div className="flex gap-3 items-center">
            <label htmlFor="search" className="font-bold">
              검 색
            </label>
            <input
              type="text"
              id="search"
              autoComplete="off"
              className="border w-[500px] p-2.5 rounded-2xl"
              onClick={searchScroll}
            />
          </div>
          {isSearchOpen && (
            <div className="absolute w-full mt-6 bg-blue-200 p-5 rounded-b-lg shadow-xl z-10">
              <p className=" font-bold text-xl mb-3">카테고리</p>
              {/* 1개 태그 */}
              <div className="flex gap-3 items-center mb-3">
                <p>A</p>
                <div className="flex gap-3">
                  <button className={buttonClass}>A-1</button>
                  <button className={buttonClass}>A-2</button>
                  <button className={buttonClass}>A-3</button>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <p>B</p>
                <div className="flex gap-3">
                  <button className={buttonClass}>B-1</button>
                  <button className={buttonClass}>B-2</button>
                  <button className={buttonClass}>B-3</button>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <p>C</p>
                <div className="flex gap-3">
                  <button className={buttonClass}>C-1</button>
                  <button className={buttonClass}>C-2</button>
                  <button className={buttonClass}>C-3</button>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Util */}
        <ul className="flex gap-4 font-bold">
          <li>Blog</li>
          <li>Profile</li>
          <li>로그인</li>
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
          onClose={() => setIsProfileOpen(false)} // 닫기 함수 전달
        />
      </div>
    </div>
  );
}

export default HeaderComp;
