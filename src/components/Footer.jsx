export function Footer({
  ano = 2026,
  nomeProjeto = "Visite João Pessoa",
}) {
  return (
    <footer className="footer">
      <p>&copy; {ano} {nomeProjeto}. Todos os direitos reservados.</p>
    </footer>
  );
}
