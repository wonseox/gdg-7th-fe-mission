import { useState } from 'react'
import Logo from './Logo'

export default function Content({ products = [], onCheckout }) {
  const [keyword, setKeyword] = useState('')
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(keyword.trim())
  }

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="content">
      <form className="search" onSubmit={handleSearch} role="search">
        <input
          type="text"
          className="search__input"
          placeholder="상품 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          aria-label="상품 검색"
        />
        <button type="submit" className="btn btn--primary">
          검색
        </button>
      </form>

      <section className="results" aria-live="polite">
        {results.length === 0 ? (
          <div className="empty">
            <Logo size={330} faded />
            <p className="empty__text">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <ul className="product-list">
            {results.map((p) => (
              <li key={p.id} className="product">
                <span className="product__name">{p.name}</span>
                <span className="product__price">{p.price.toLocaleString()}원</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <button type="button" className="btn btn--outline-lg" onClick={onCheckout}>
        장바구니 구매하기
      </button>
    </main>
  )
}
