// Dados dos produtos (pode ser substituído por uma API ou banco de dados)
const products = [
    {
        id: 1,
        name: "Refrescante Sabor 250ML",
        description: "Galpão T5, Rua 01, Coluna 3, Nível 1",
        quantity: 24,
        location: "Galpão T5"
    }
];

// Selecionar o modal e seus elementos
const modal = document.getElementById("productModal");
const modalProductName = document.getElementById("modalProductName");
const modalProductDescription = document.getElementById("modalProductDescription");
const modalProductQuantity = document.getElementById("modalProductQuantity");
const modalProductLocation = document.getElementById("modalProductLocation");
const closeModal = document.querySelector(".close-modal");

// Função para abrir o modal com os detalhes do produto
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        modalProductName.textContent = product.name;
        modalProductDescription.textContent = product.description;
        modalProductQuantity.textContent = `Quantidade: ${product.quantity}`;
        modalProductLocation.textContent = `Localização: ${product.location}`;
        modal.style.display = "flex"; // Mostrar o modal
    }
}

// Função para fechar o modal
function closeModalHandler() {
    modal.style.display = "none"; // Esconder o modal
}

// Adicionar evento de clique aos cards de produto
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const productId = parseInt(card.getAttribute("data-product-id"));
        openModal(productId);
    });
});

// Fechar o modal ao clicar no botão de fechar
closeModal.addEventListener("click", closeModalHandler);

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});