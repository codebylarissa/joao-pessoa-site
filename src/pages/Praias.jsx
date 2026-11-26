import { AtracaoCard } from "../components/AtracaoCard";
import { praiasData } from "../data/siteData";

export function Praias() {
  return (
    <>
      <h1>Praias de João Pessoa</h1>
      <hr />
      <section className="abouts">
        {praiasData.map((praia) => (
          <AtracaoCard
            key={praia.id}
            nome={praia.nome}
            imagem={praia.imagem}
            descricao={praia.descricao}
            mapsUrl={praia.mapsUrl}
          />
        ))}
      </section>
    </>
  );
}