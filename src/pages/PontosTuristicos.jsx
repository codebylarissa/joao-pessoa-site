import { AtracaoCard } from "../components/AtracaoCard";
import { pontosTuristicosData } from "../data/siteData";

export function PontosTuristicos() {
  return (
    <>
      <h1>Pontos Turísticos de João Pessoa</h1>
      <hr />
      <section className="abouts">
        {pontosTuristicosData.map((ponto) => (
          <AtracaoCard
            key={ponto.id}
            nome={ponto.nome}
            imagem={ponto.imagem}
            descricao={ponto.descricao}
            mapsUrl={ponto.mapsUrl}
          />
        ))}
      </section>
    </>
  );
}