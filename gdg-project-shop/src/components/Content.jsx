
import { useState } from "react";

function Content() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <main className="content">
      {/* 검색 영역 */}
      <div className="search-area">
        <input
          type="text"
          placeholder="상품 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          검색
        </button>
      </div>

      {/* 검색 결과가 없을 때 보여줄 로고 */}
      <div className="empty-result">
        <img src="/gdg-logo.svg" alt="GDG Logo" />
        <p>검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;
