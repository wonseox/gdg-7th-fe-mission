import Logo from './Logo'

const MENUS = [
  { id: 'category', label: '카테고리 필터링' },
  { id: 'price', label: '가격 범위 필터링' },
  { id: 'sort', label: '상품 정렬' },
]

export default function Navbar({ onMenuClick, onAdminClick }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" aria-label="홈">
          <Logo />
        </a>

        <nav className="navbar__menu" aria-label="상품 메뉴">
          {MENUS.map((m) => (
            <button
              key={m.id}
              type="button"
              className="navbar__link"
              onClick={() => onMenuClick?.(m.id)}
            >
              {m.label}
            </button>
          ))}
        </nav>

        <button type="button" className="btn btn--outline-sm" onClick={onAdminClick}>
          관리자
        </button>
      </div>
    </header>
  )
}
