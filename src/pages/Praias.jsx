export function Praias() {
  return (
    <>
      <h1>Praias de João Pessoa</h1>
      <hr />
      <section className="abouts">
        <div className="about">
          <img src="/img/praia-tambau.avif" alt="Praia de Tambaú" />
          <div className="info">
            <h2>Praia de Tambaú</h2>
            <p>
              Uma das praias mais vibrantes e queridas da cidade. Conta com um
              calçadão movimentado, ótima infraestrutura de quiosques, águas
              mornas e é o principal ponto de partida para os famosos passeios
              de barco até as piscinas naturais.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Praia+de+Tambaú+João+Pessoa"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="about">
          <img src="/img/praia-cabo-branco.avif" alt="Praia de Cabo Branco" />
          <div className="info">
            <h2>Praia de Cabo Branco</h2>
            <p>
              Conhecida pela sua atmosfera tranquila e larga faixa de areia. É o
              destino favorito para quem quer caminhar ao amanhecer, pedalar na
              ciclovia à beira-mar ou simplesmente relaxar apreciando o mar
              calmo e a paisagem arborizada.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Praia+de+Cabo+Branco+João+Pessoa"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="about">
          <img src="/img/praia-ponta-seixas.avif" alt="Ponta do Seixas" />
          <div className="info">
            <h2>Ponta do Seixas</h2>
            <p>
              Um lugar verdadeiramente especial por ser o ponto mais oriental de
              todas as Américas — onde o sol nasce primeiro no continente.
              Cercada por falésias e águas cristalinas, oferece um cenário
              rústico e uma vista marinha de tirar o fôlego.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ponta+do+Seixas+João+Pessoa"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Praias;
