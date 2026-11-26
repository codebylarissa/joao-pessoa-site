import { Link } from "react-router-dom";

export function Cards({ items = [] }) {
  return (
    <section className="cards">
      {items.map((item) => (
        <article className="card" key={item.id}>
          <header>
            <div className={item.classeImagem}></div>
            <h2>{item.titulo}</h2>
            <p>{item.descricao}</p>
          </header>
          <footer>
            <Link className="button" to={item.to}>
              Saiba mais
            </Link>
          </footer>
        </article>
      ))}
    </section>
  );
}