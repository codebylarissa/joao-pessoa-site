export function Hero({
  titulo = "Descubra as belezas da capital mais oriental das Américas",
}) {
  return (
    <section className="hero">
      <div className="hero-img"></div>
      <h1>{titulo}</h1>
    </section>
  );
}


