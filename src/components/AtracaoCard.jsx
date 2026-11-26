export function AtracaoCard({ nome, imagem, descricao, mapsUrl }) {
  return (
    <div className="about">
      <img src={imagem} alt={nome} />
      <div className="info">
        <h2>{nome}</h2>
        <p>{descricao}</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}