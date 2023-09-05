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
      <h4>Preço unidade: ${produtos.preco_por}</h4>
      <p>Quantidade: ${produtos.quantidade}</p>
      <p>Valor: R$${produtos.preco_por * produto.quantidade}</p>
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

    