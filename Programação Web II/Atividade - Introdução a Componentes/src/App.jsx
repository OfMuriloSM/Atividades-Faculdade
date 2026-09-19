import './App.css';

import Cabecalho from './components/Cabecalho';
import Produto from './components/Produto';
import CardDinamico from './components/CardDinamico';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="container">

      <Cabecalho
        titulo="Minha Loja"
        subtitulo="Atividade de Introdução a Componentes"
      />

      <main className="conteudo">

        <h2>Produtos</h2>

        <div className="produtos">

          <Produto
            nome="Teclado Mecânico"
            preco="250,00"
            categoria="Periféricos"
          />

          <Produto
            nome="Mouse Gamer"
            preco="120,00"
            categoria="Periféricos"
          />

          <Produto
            nome="Monitor"
            preco="1200,00"
            categoria="Hardware"
          />

        </div>

        <CardDinamico>
          <h2>Promoção</h2>

          <p>
            Produtos selecionados estão com desconto!
          </p>

          <button>Ver produtos</button>
        </CardDinamico>

        <CardDinamico>
          <h2>Sobre a loja</h2>

          <p>
            Este conteúdo foi passado para o componente
            CardDinamico utilizando a propriedade children.
          </p>
        </CardDinamico>

      </main>

      <Rodape
        autor="Murilo"
        ano="2026"
      />

    </div>
  );
}

export default App;