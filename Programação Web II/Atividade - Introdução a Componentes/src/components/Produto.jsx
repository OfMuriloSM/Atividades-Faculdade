function Produto({ nome, preco, categoria }) {
  return (
    <div className="produto">
      <h2>{nome}</h2>

      <p>
        <strong>Categoria:</strong> {categoria}
      </p>

      <p>
        <strong>Preço:</strong> R$ {preco}
      </p>
    </div>
  );
}

export default Produto;