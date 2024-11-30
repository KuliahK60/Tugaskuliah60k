// Data resep makanan
const recipes = [
    {
        name: "Nasi Goreng",
        ingredients: ["Nasi", "Telur", "Bawang", "Kecap"],
        steps: [
        "Goreng bawang",
        "tambahkan nasi dan kecap",
        "lalu aduk rata."
        ],
        image: "img/nasigoreng.png"
    },
    {
        name: "Soto Ayam",
        ingredients: ["Ayam", "Santan", "Rempah", "Soun"],
        steps:[
            "Rebus ayam dengan santan dan rempah.",
            "lalu sajikan dengan soun."
        ],
        image: "img/soto ayam.png"
    },
    {
        name: "Rendang",
        ingredients: ["Daging", "Santan", "Cabai", "Rempah"],
        steps: [
            "Masak daging dengan santan dan bumbu hingga matang.",
        ],
        image: "img/rendang.png"
    },
    {
        name: "Gado-Gado",
        ingredients: ["Sayuran", "Sambal Kacang", "Kerupuk", "Telur"],
        steps: [
            "Rebus sayuran.",
            "siram dengan sambal kacang.",
            "tambahkan kerupuk dan telur."
        ],
        image: "img/gado-gado.png"
        
    },
    {
        name: "Bakso",
        ingredients: ["Daging sapi", "Tepung bawang putih", "soun"],
        steps: [
            "Campur daging sapi dengan tepung tapioka dan bawang putih halus.",
            "Tambahkan garam dan air, aduk hingga merata.",
            "Bentuk adonan menjadi bulatan kecil-kecil.",
            "Rebus bola daging dalam air mendidih hingga mengapung.",
            "Angkat dan sajikan dengan kuah kaldu dan bahan pelengkap."
        ],
        image: "img/baso.png"
    }
];

// Ambil query string dari URL
const params = new URLSearchParams(window.location.search);
const recipeName = params.get('name');

// Cari resep berdasarkan nama
const recipe = recipes.find((r) => r.name === recipeName);

// Elemen HTML
const recipeTitle = document.getElementById('recipe-title');
const recipeImage = document.getElementById('recipe-image1');
const recipeIngredients = document.getElementById('recipe-ingredients');
const recipeSteps = document.getElementById('recipe-steps');

// Tampilkan data resep
if (recipe) {
    recipeTitle.textContent = recipe.name;
    recipeImage.src = recipe.image || 'img/default.png'; // Gambar default jika tidak ditemukan
    recipeImage.alt = recipe.name;
    recipeIngredients.textContent = recipe.ingredients.join(', ');
    recipeSteps.textContent = recipe.steps;

    recipeSteps.innerHTML = '';
    recipe.steps.forEach((step, index) => {
        const stepElement = document.createElement('p');
        stepElement.textContent = `${index + 1}. ${step}`;
        recipeSteps.appendChild(stepElement);
    });
} else {
    recipeTitle.textContent = "Resep Tidak Ditemukan";
    recipeImage.src = 'img/default.png'; // Gambar placeholder
    recipeImage.alt = 'Resep tidak ditemukan';
    recipeIngredients.textContent = '';
    recipeSteps.textContent = '';
    alert("Resep tidak ditemukan!");
}

// Fungsi kembali
function goBack() {
    window.history.back();
}
