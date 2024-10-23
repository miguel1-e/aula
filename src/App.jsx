import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Produto from './components/produto';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Produto
        img="https://m.media-amazon.com/images/I/51UEzBR2sNL._AC_SX679_.jpg"
        titulo="Vonder, Esmerilhadeira Angular"
        preco="R$265,10"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/51iZaTDir5L._AC_SX569_.jpg"
        titulo=" FAOLONE Martelo de cosplay de Halloween"
        preco="R$174,44"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/61HwqDmL0IL._AC_SL1500_.jpg"
        titulo="Stanley Serra Esquadria "
        preco="R$1.159,90"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/515Hm5yH-EL._AC_SL1000_.jpg"
        titulo="WAP Furadeira De Impacto E Parafusadeira"
        preco="R$167,50"
      />
      <Produto
        img="https://m.media-amazon.com/images/I/61Vi5P4oRwL._AC_SL1500_.jpg"
        titulo="Cortador Tec"
        preco="R$375,86"
      />
    </>
  );
}

export default App;
