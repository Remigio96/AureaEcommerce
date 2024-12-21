// Obtener el parámetro ID desde la URL
function getProductIdFromURL() {
    const queryString = window.location.search; // Ejemplo: ?id=1
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id'); // Obtiene el valor del parámetro "id"
}

// Función para intentar cargar imágenes en diferentes formatos
async function getImageWithFallback(srcBase) {
    const formats = [".jpg", ".webp"];
    for (const format of formats) {
        const url = srcBase + format;
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
            return url; // Retorna la URL del formato disponible
        }
    }
    return null; // Si ningún formato es válido
}

// Cargar los datos del producto desde un archivo JSON
async function loadProductData(productId) {
    try {
        // Cargar el archivo JSON con los datos de los productos
        const response = await fetch('./data/products_with_descriptions.json'); // Ajusta la ruta si es necesario
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        const products = await response.json();

        // Buscar el producto por ID
        const product = products.find((item) => item.id === productId);

        if (!product) {
            alert("Producto no encontrado");
            return;
        }

        // Actualizar los datos en el DOM
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description;

        // Intentar cargar la imagen principal
        const mainImgSrc = await getImageWithFallback(product.images[0].replace(/\.\w+$/, ""));
        if (mainImgSrc) {
            document.getElementById("MainImg").src = mainImgSrc;
        } else {
            document.getElementById("MainImg").alt = "Imagen no disponible";
        }

        // Si el producto tiene más de una imagen, cargar imágenes pequeñas
        if (product.images.length > 1) {
            const smallImgGroup = document.querySelector(".small-img-group");
            smallImgGroup.innerHTML = ""; // Limpiar imágenes existentes

            for (const imgSrcBase of product.images) {
                const imgSrc = await getImageWithFallback(imgSrcBase.replace(/\.\w+$/, ""));
                if (imgSrc) {
                    const imgCol = document.createElement("div");
                    imgCol.classList.add("small-img-col");
                    imgCol.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="">`;
                    smallImgGroup.appendChild(imgCol);

                    // Agregar funcionalidad para cambiar la imagen principal
                    imgCol.querySelector("img").addEventListener("click", () => {
                        document.getElementById("MainImg").src = imgSrc;
                    });
                }
            }
        }
    } catch (error) {
        console.error("Error al cargar los datos del producto:", error);
        alert("Hubo un problema al cargar los datos del producto");
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const productId = getProductIdFromURL();
    if (productId) {
        loadProductData(productId);
    } else {
        alert("No se encontró un ID válido en la URL");
    }
});
