// singleProduct.js modificado para carga offline sin fetch HEAD

const products = [
    {
        "id": "1",
        "name": "Bowee Tee",
        "description": "A sleeker T-shirt. Made from a cotton rib-knit enhanced with modal for extra softness and a slim fit that hits just right, this tee takes the basic to a more polished place. Wear it tucked in with everything from high-waisted denim to a tailored suit.",
        "price": "$39,600",
        "images": [
            "assets/img/shop/1.jpg",
            "assets/img/shop/1.2.jpg",
            "assets/img/shop/1.3.jpg",
            "assets/img/shop/1.4.jpg",
            "assets/img/shop/1.5.jpg"
        ]
    },
    {
        "id": "2",
        "name": "Pima Bowee Tee",
        "description": "Our sleek, signature Bowee Tee—now offered in ribbed pima cotton for an ultra-soft handfeel. Made in a slim fit that hits just right, this tee takes the basic to a more polished place. Wear it tucked in with everything from high-waisted denim to a tailored suit.",
        "price": "$39,600",
        "images": [
            "assets/img/shop/2.jpg"
        ]
    },
    {
        "id": "3",
        "name": "Perfect Tee",
        "description": "Perfect color. Perfect fit. Perfect layer. Our signature wear-everywhere tee in polished, structured Ponte with a slim silhouette, longer sleeve, and modern detailing. Whether worn under one of our blazers or on its own, the Perfect Tee is easily the most versatile piece in your wardrobe.",
        "price": "$72,400",
        "images": [
            "assets/img/shop/3.jpg",
            "assets/img/shop/3.2.jpg"
        ]
    },
    {
        "id": "4",
        "name": "Mesh Cami",
        "description": "Scalloped edges and gossamer mesh give the classic cami a sophisticated feel. Designed with soft boning for shape and plenty of stretch for a slim, flattering fit that looks extra chic peeking out from under a blazer.",
        "price": "$102,100",
        "images": [
            "assets/img/shop/4.jpg"
        ]
    },
    {
        "id": "5",
        "name": "Cashmere Ribbed Midi Skirt",
        "description": "A chic, comfortable option for the colder months, this midi skirt features allover vertical ribbing in soft, luxurious cashmere. We love this streamlined silhouette paired back to our Cashmere Cropped Mock Neck Sweater.",
        "price": "$310,300",
        "images": [
            "assets/img/shop/5.jpg",
            "assets/img/shop/5.2.jpg"
        ]
    },
    {
        "id": "6",
        "name": "Fluted Knit Midi Skirt",
        "description": "An elegant and easy option, this slim sweater skirt features allover ribbing and a fluted silhouette. Pair it with your sleekest silk blouse (or a simple tee on casual days).",
        "price": "$154,100",
        "images": [
            "assets/img/shop/6.jpg"
        ]
    },
    {
        "id": "7",
        "name": "Wool Blend Pleated Midi Skirt",
        "description": "A focus on textural fabrications and intentional movement. This softly structured midi skirt is made from a premium wool blend and sits high on the waist before falling to an A-line pleated silhouette.",
        "price": "$258,200",
        "images": [
            "assets/img/shop/7.jpg"
        ]
    },
    {
        "id": "8",
        "name": "Silk Charmeuse Maxi Skirt",
        "description": "Slip into something a little more comfortable—like this elegant (but still easy) maxi skirt crafted of lustrous silk charmeuse. Tuck in your favorite knit sweater, billowy blouse, or the matching Silk Charmeuse Drape Shoulder Cami.",
        "price": "$310,300",
        "images": [
            "assets/img/shop/8.jpg",
            "assets/img/shop/8.2.jpg",
            "assets/img/shop/8.3.jpg"
        ]
    },
    {
        "id": "9",
        "name": "Plush Single-Breasted Wool Blazer",
        "description": "The cold weather blazer that means business. Expertly tailored from a premium wool blend with an exceptionally plush handfeel, this single-breasted rendition is fully lined for added warmth and effortless layering.",
        "price": "$414,400",
        "images": [
            "assets/img/shop/9.jpg"
        ]
    },
    {
        "id": "10",
        "name": "Double-Faced Blazer Coat",
        "description": "A perfectly tailored blazer cut from a brushed, double-faced wool blend for classic warmth. Your go-to top layer for the colder months.",
        "price": "$362,400",
        "images": [
            "assets/img/shop/10.jpg"
        ]
    },
    {
        "id": "11",
        "name": "Cutaway Borrem Blazer",
        "description": "Our signature Borrem Blazer in a new cutaway silhouette that slightly cinches the waist. Crafted of the cool, refined seasonless wool blend you already know and love. Wear it with the matching Borrem Pant as a tailored suit or pair it with denim or dresses for casual occasions.",
        "price": "$310,300",
        "images": [
            "assets/img/shop/11.jpg",
            "assets/img/shop/11.2.jpg"
        ]
    },
    {
        "id": "12",
        "name": "Borrem Pleated Pant",
        "description": "Our signature suit trouser, now with a pleated front for a more relaxed fit. Made from our best-selling, seasonless wool blend with a touch of stretch. Wear it together with the matching Borrem Blazer as a tailored suit, or team it with tees or blouses, heels or sneakers, the whole year round.",
        "price": "$206,200",
        "images": [
            "assets/img/shop/12.jpg"
        ]
    },
    {
        "id": "13",
        "name": "Strapless Silk Charmeuse Maxi Dress",
        "description": "A maxi-length strapless dress crafted of luxe silk charmeuse for a gorgeous sheen. Pair with classic heels and statement earrings to complete the look.",
        "price": "$290,500",
        "images": [
            "assets/img/shop/13.jpg"
        ]
    },
    {
        "id": "14",
        "name": "Cashmere Blend Open Collar Maxi Dress",
        "description": "Back and reimagined by popular demand. Our fan-favorite Johnny Collar Sweater Dress gets a cold weather upgrade with an enduringly warm and sleek maxi length silhouette this season. It’s spun from an incredibly soft wool and cashmere blend that will take you from desk to dinner effortlessly.",
        "price": "$362,400",
        "images": [
            "assets/img/shop/14.jpg",
            "assets/img/shop/14.2.jpg"
        ]
    },
    {
        "id": "15",
        "name": "Sleeveless Turtleneck Maxi Dress",
        "description": "An effortless maxi dress made for day-to-night versatility with finely knit wool-cashmere. This comfortable, classic A-line silhouette features a turtleneck that looks very put-together styled under any of our outerwear pieces.",
        "price": "$310,300",
        "images": [
            "assets/img/shop/15.jpg",
            "assets/img/shop/15.2.jpg"
        ]
    },
    {
        "id": "16",
        "name": "Wool Flannel Midi Shirt Dress",
        "description": "Yes, you can do both. This chic wool shirt dress infuses the soft warmth of your favorite winter flannel in a flattering midi length silhouette for endless versatility. Chest pockets and a tulip hemline nod to utilitarian design while a D-ring belt provides a feminine touch to highlight your frame.",
        "price": "$258,200",
        "images": [
            "assets/img/shop/16.jpg"
        ]
    },
    {
        "id": "17",
        "name": "Signature Solid Linen Shirt",
        "description": "Live comfortably. One of our best-selling staple button-down shirts, reworked for the sunny season in lightweight, breathable linen. For a comfier classic.",
        "price": "$103,100",
        "images": [
            "assets/img/shop/17.jpg",
            "assets/img/shop/17.2.jpg",
            "assets/img/shop/17.3.jpg"
        ]
    },
    {
        "id": "18",
        "name": "Cowl Neck Matte Jersey Cami",
        "description": "A draped neckline and slinky straps take a simple matte jersey camisole from easy to elegant.",
        "price": "$61,500",
        "images": [
            "assets/img/shop/18.jpg",
            "assets/img/shop/18.2.jpg"
        ]
    },
    {
        "id": "19",
        "name": "Silk Charmeuse Relaxed Button-Down Shirt",
        "description": "Treat yourself to the luxury of a staple button-down shirt in lustrous silk charmeuse. Tailored with a clean point collar and a high-low shirttail hem for polished ease.",
        "price": "$237,400",
        "images": [
            "assets/img/shop/19.jpg"
        ]
    },
    {
        "id": "20",
        "name": "Sleeveless Boatneck Top",
        "description": "The perfect top for all-day comfort and versatility. Whether worn on its own or under your best blazer, it keeps your look simple, clean, and sophisticated with its sleeveless silhouette and bateau neckline.",
        "price": "$70,800",
        "images": [
            "assets/img/shop/20.jpg"
        ]
    }
];

function getProductIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

function loadProductData(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert("Producto no encontrado");
        return;
    }
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("MainImg").src = product.images[0];
    const smallImgGroup = document.querySelector(".small-img-group");
    smallImgGroup.innerHTML = "";
    product.images.forEach(imgSrc => {
        const imgCol = document.createElement("div");
        imgCol.classList.add("small-img-col");
        imgCol.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="">`;
        smallImgGroup.appendChild(imgCol);
        imgCol.querySelector("img").addEventListener("click", () => {
            document.getElementById("MainImg").src = imgSrc;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const productId = getProductIdFromURL();
    if (productId) {
        loadProductData(productId);
    } else {
        alert("No se encontró un ID válido en la URL");
    }
});
