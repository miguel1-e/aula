function Produto({ img, titulo, preco }) {
  return (
    <>
      <img src={img}/>
      <h2>{titulo}</h2>
      <p>R${preco}</p>
    </>
  );
}

export default Produto;
