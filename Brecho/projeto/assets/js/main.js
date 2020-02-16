let product = [{
    id: 1,
    image:"produto-5.jpg",
    nameProduct: "Sutiã com bojo",
    price: 9.90.toFixed(2),
    size: 40
},{
    id: 2,
    image: "produto-1.jpg" ,
    nameProduct: "Camiseta Branca",
    price: 39.90,
    size: 34
},{
    id: 3,
    image: "produto-2.jpg",
    nameProduct: "Calça Preta",
    price: 59.90,
    size: 34
},{
    id: 4,
    image: "produto-3.jpg",
    nameProduct: "Calça Camuflada",
    price: 59.90,
    size: 34
},{
    id: 5,
    image: "produto-4.jpg",
    nameProduct: "Tenis Vans",
    price: 99.90,
    size: 36
},{
    id: 6,
    image: "produto-6.png" ,
    nameProduct: "Camiseta" ,
    price: 25.90,
    size: "P"
}
];


function listarProdutos(){
product.forEach(task => {

    let container = document.querySelector(".container-produtos");
    let div = document.createElement("div");
    div.className = "item-container";
    // div.style.backgroundImage = `url('assets/js/ImagesArray/produtos/${task.image}')`;
    // div.style.backgroundRepeat = "no-repeat";
    // div.style.backgroundSize = "cover";
    div.innerHTML = `
    <ul class="details">
    <li class="ImageProduct"><img src="assets/js/ImagesArray/produtos/${task.image}"></li>
    <li><h1>${task.nameProduct}</li></tr>
    <li><span>Por apenas R$${task.price}</span></li>
    <li><span>Tamanho: ${task.size}</span></li>
    </ul>
    `;
    container.append(div);
});
};


listarProdutos();

console.log(product.image);