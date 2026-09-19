function Rodape({ autor, ano }) {
  return (
    <footer className="rodape">
      <p>
        Desenvolvido por {autor} - {ano}
      </p>
    </footer>
  );
}

export default Rodape;