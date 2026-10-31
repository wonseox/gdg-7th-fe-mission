
function Navbar() {
  return (
    <nav className="navbar">
      {/* GDG 로고 */}
      <img
        className="navbar-logo"
        src="/gdg-logo.svg"
        alt="GDG Logo"
      />

      {/* 필터링 버튼 그룹 */}
      <div className="filter-buttons">
        <button onClick={() => console.log("카테고리 필터링 클릭")}>
          카테고리 필터링
        </button>

        <button onClick={() => console.log("가격 범위 필터링 클릭")}>
          가격 범위 필터링
        </button>

        <button onClick={() => console.log("상품 정렬 클릭")}>
          상품 정렬
        </button>
      </div>

      {/* 관리자 버튼 */}
      <button className="admin-button">
        관리자
      </button>
    </nav>
  );
}

export default Navbar;
