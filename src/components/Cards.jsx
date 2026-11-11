export function Cards () {
  return (
    <section class="cards">
        <article class="card">
          <header>
            <div class="card-img praia"></div>
            <h2>Praias Paradisíacas</h2>
            <p>
              Litorais de águas mornas, coqueirais encantadores e cenários
              inesquecíveis
            </p>
          </header>
          <footer>
            <a href="praias.html" class="button">Saiba mais</a>
          </footer>
        </article>

        <article class="card">
          <header>
            <div class="card-img ponto-turistico"></div>
            <h2>Pontos Turísticos</h2>
            <p>
              Explore a rica história, a cultura vibrante e os cartões-postais
              da cidade.
            </p>
          </header>
          <footer>
            <a href="pontos-turisticos.html" class="button">Saiba mais</a>
          </footer>
        </article>
      </section>
  );
}

export default Cards;