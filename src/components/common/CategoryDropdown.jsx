// CategoryDropdown.js (SearchBar와 같은 폴더에 있다고 가정)

import React, { useState } from 'react';

// 카테고리 데이터 구조 정의 (반복문을 위해 필수)
const CATEGORIES_DATA = [
  { group: 'A', items: ['A-1', 'A-2', 'A-3'] },
  { group: 'B', items: ['B-1', 'B-2', 'B-3'] },
  { group: 'C', items: ['C-1', 'C-2', 'C-3'] },
];

function CategoryDropdown() {
  // 선택된 카테고리를 저장하는 상태
  const [selectedCategories, setSelectedCategories] = useState({});

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (categoryName) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // 카테고리 버튼 CSS 클래스 동적 설정
  const getCategoryButtonClass = (categoryName) => {
    const isSelected = selectedCategories[categoryName];
    const baseClasses =
      'border rounded-xl p-1 px-3 cursor-pointer transition-colors duration-150';
    const selectedClasses = ' bg-blue-500 text-white';
    const unselectedClasses = ' hover:bg-blue-500 hover:text-white';

    return baseClasses + (isSelected ? selectedClasses : unselectedClasses);
  };

  return (
    <>
      <p className="font-bold text-xl mb-3">카테고리</p>

      {/* 💡 반복문 적용: CATEGORIES_DATA를 순회하며 그룹별 버튼을 렌더링 */}
      {CATEGORIES_DATA.map((category) => (
        <div key={category.group} className="flex gap-3 items-center mb-3">
          <p>{category.group}</p>
          <div className="flex gap-3">
            {category.items.map((item) => (
              <button
                key={item}
                className={getCategoryButtonClass(item)}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoryDropdown;
