// SearchBar.js

import React from 'react';

// 💡 props로 ref, searchScroll 함수, submitHandler를 전달받습니다.
function SearchBar({ formRef, searchScroll, submitHandler }) {
  return (
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
    </form>
  );
}

export default SearchBar;
