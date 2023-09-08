const produtos = [
    {
        id: '1',
        nome: 'Informática para Internet',
        prof: 'Prof Kelly',
        preco_de: 80,
        preco_por: 50,
        descricao: 'O melhor curso de Javascript',
        imagem: './assets/1.png'
    },

        {
            id: '2',
            nome: 'Gestão de conteúdo Web II',
            prof: 'Prof Kelly',
            preco_de: 80,
            preco_por: 50,
            descricao: 'O melhor curso de Javascript',
            imagem: './assets/3.png'
        }
    
];

function renderizaProdutos() {
    let html = '';

    for (let i = 0; i < produtos.length; i++) {
        html = html + criaProduto(produtos[i], i);
        
    }
    return html;
}

function criaProduto(produtos, index) {
    return `
    <div class="curso">
    <img class="inicio" title="t" src="${produtos.imagem}" />
    <div class="curno-info">
      <h4>${produtos.nome}</h4>
      <p>${produtos.prof}</p>
      <p>${produtos.descricao}</p>
    </div>
  
    <div class="curso-preco"> 
      <span class="preco-de"> R$ ${produtos.preco_de}</span>
      <span class="preco-por"> R$ ${produtos.preco_por}</span>
      <button class="btncar btn-add" data-index="${index}"> </button>
    </div>
  </div>
    `;
}   

const container = document.querySelector('#container')
container.innerHTML = renderizaProdutos();

const carrinhoItens = {};

function renderizaCarrinho() {
    let html = '';
    for (const produtoId in carrinhoItens) {
            html = html + criaItemCarrinho(carrinhoItens[produtoId]) ;
    }

    document.querySelector('.carrinho_itens').innerHTML = html;
}

function criaItemCarrinho(produto) {
    return `
    <div class="carrinho_compra">
      <h4>Preço unidade: ${produto.preco_por}</h4>
      <p>Quantidade: ${produto.quantidade}</p>
      <p>Valor: R$${produto.preco_por * produto.quantidade}</p>
      <button class="btn-remove" data-produto-id="${produto.id}"> </button>
    </div>
    `;
    
}

function criaCarrinhoTotal() {
    let total = 0;
    for (const produtoId in carrinhoItens) {
        total = total + carrinhoItens[produtoId].preco_por * carrinhoItens[produtoId].quantidade;
    }

    document.querySelector('.carrinho_total').innerHTML = `
    <h4> Total: <strong>R$ ${total}</strong></h4>

            <a href="#" target="_blank">
          <ion-icon name="card-outline"></ion-icon>
          <strong> Comprar Agora </strong>
        </a>
    `;}

    
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
