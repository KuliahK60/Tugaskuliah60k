// Data resep makanan (50 resep)
const recipes = [
    {
        name: "Nasi Goreng",
        ingredients: ["Nasi", "Telur", "Bawang", "Kecap"],
        steps: "Goreng bawang, tambahkan nasi dan kecap, lalu aduk rata.",
        image: "img/nasigoreng.png"
    },
    {
        name: "Soto Ayam",
        ingredients: ["Ayam", "Santan", "Rempah", "Soun"],
        steps: "Rebus ayam dengan santan dan rempah, lalu sajikan dengan soun.",
        image: "img/soto ayam.png"
    },
    {
        name: "Rendang",
        ingredients: ["Daging", "Santan", "Cabai", "Rempah"],
        steps: "Masak daging dengan santan dan bumbu hingga matang.",
        image: "img/rendang.png"
    },
    {
        name: "Gado-Gado",
        ingredients: ["Sayuran", "Sambal Kacang", "Kerupuk", "Telur"],
        steps: "Rebus sayuran, siram dengan sambal kacang, tambahkan kerupuk dan telur.",
        image: "img/gado-gado.png"
    },
    {
        name: "Bakso",
        ingredients: ["Daging Sapi", "Tepung", "Bawang Putih", "Soun"],
        steps: "Bentuk adonan bakso, rebus hingga matang, lalu sajikan dengan kuah kaldu.",
        image: "img/baso.png"
    },
    // Tambahkan lebih banyak resep unik hingga total 50
];

// Fungsi untuk menampilkan resep
const recipeList = document.getElementById("recipe-list");
function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image || 'https://via.placeholder.com/150'}" alt="${recipe.name}" class="recipe-image">
            <h2>${recipe.name}</h2>
            <p><strong>Bahan:</strong> ${recipe.ingredients.join(", ")}</p>
            <button onclick="showDetails('${recipe.name}')">Lihat Langkah</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Tampilkan detail langkah
function showDetails(recipeName) {
    const recipe = recipes.find((r) => r.name === recipeName);
    if (recipe) {
        alert(`Langkah-langkah membuat ${recipe.name}:\n\n${recipe.steps}`);
    } else {
        alert("Resep tidak ditemukan!");
    }
}

// Fungsi pencarian
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
});

// Inisialisasi
displayRecipes(recipes);
