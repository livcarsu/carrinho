 *A EXPLICAÇÃO TAMBÉM ESTÁ NO ARQUIVO script_finalizado.js (PARA MELHOR VISUALIZAÇÃO)*
 



     // inicia uma função com variavel produto(que já está no carrinho) como parâmetro
function adicionaItemCarrinho(produto){

  //se não tiver um item 
  if (!carrinhoItens[produto.id]) {

    //o item do carrinho vai se tornar o produto
    carrinhoItens[produto.id] = produto;

    //e a quantidade vai ser 0 de início
    carrinhoItens[produto.id].quantidade = 0;

    //e vai adicionar mais uma vez a quantidade do id do produto se for clicado para adicionar
  }++carrinhoItens[produto.id].quantidade;

  //chama a função para colocar itens no carrinho
  renderizaCarrinho();
//chama a função para calcular o valor da compra
  criaCarrinhoTotal();
}

//adiciona um evento ao click do elemento no body do html
document.body.addEventListener('click',function (event) {

  //adiciona uma constante com o valor sendo um evento
  const elemento = event.target;

  // se a class do botão foi btn-add
  if (elemento.classList.contains('btn-add')) {
    
    //cria a constante com o valor inteiro do data-index do html
    const index = parseInt(elemento.getAttribute('data-index'), 10);
    
    //o produto vai se tornar o index do elemento do array produtos 
    const produto = produtos[index];
  
    // chama a função para adicionar um produto no carrinho
    adicionaItemCarrinho(produto);
  }


  //se a class do botão foi btn-remove
    if (elemento.classList.contains('btn-remove')) {
      
      //cria a contante com o valor do data-produto-id do html
      const produtoId = elemento.getAttribute('data-produto-id');

      // ser a quantidade do produto no carrinho for menor ou igual a 1
      if (carrinhoItens[produtoId].quantidade <= 1) {
        
        //vai deletar o produto do carrinho
        delete carrinhoItens[produtoId];

      } 
      
      //senão vai diminuir a quantidade de produtos que tem no carrinho
      else {
        --carrinhoItens[produtoId].quantidade;
      }

      //chama a função para colocar itens no carrinho
      renderizaCarrinho();

      //chama a função para calcular o valor da compra
      criaCarrinhoTotal();
    }

});
