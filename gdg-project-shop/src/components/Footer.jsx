export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} My Shop. All rights reserved.</p>
        <nav className="footer__links" aria-label="하단 메뉴">
          <a href="#terms">이용약관</a>
          <a href="#privacy">개인정보처리방침</a>
          <a href="#contact">문의하기</a>
        </nav>
      </div>
    </footer>
  )
}
