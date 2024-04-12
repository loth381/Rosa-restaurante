//Menu

let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Lomo Saltado",
        foodimg: 'images/menu1.jpg',
        price: "S/7",
        type: "Menu",
        des: "",
    },
    {
        FoodName: "Papa ala Huacaina",
        foodimg: 'images/menu2.png',
        price: "S/7",
        type: "Menu",
        des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        FoodName: "Jugo de Papaya",
        foodimg: 'images/jugopapaya.png',
        price: "S/5",
        type: "Jugos",
        des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        FoodName: "Jugo de Fresa",
        foodimg: 'images/jugofresa.png',
        price: "S/5",
        type: "Jugos",
        des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
    },
    {
        FoodName: "Jugo Especial",
        foodimg: 'images/jugoespecial.png',
        price: "S/5",
        type: "Jugos",
        des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
    },
    {
        FoodName: "Jugo de Platano",
        foodimg: 'images/jugoplatano.png',
        price: "S/4",
        type: "Jugos",
        des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
    },
    {
        FoodName: "Jugo Verde",
        foodimg: 'images/jugoverde.png',
        price: "S/3",
        type: "Jugos",
        des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew."
    },

    {
        FoodName: "Jugo DXN",
        foodimg: 'images/jugodxn.png',
        price: "S/2",
        type: "Jugos",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies."
    },
  
    {
        FoodName: "DXN",
        foodimg: 'images/dxn.png',
        price: "",
        type: "Productos",
        des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe."
    }
]


const food = fooditem.map(item => {
    const listitem = ` <ul class=" foodbox ${item.type}">

    <li>
    <div class="food-menu-card ">

        <div class="card-banner">
          
            <img src="${item.foodimg}" width="300" height="300" loading="lazy"
            alt="" class="w-100">
            <div class="badge">-15%</div>
            <button class="btn food-menu-btn" onclick="orderNow('${item.FoodName}', '${item.foodimg}')" >Ordenar</button>
        </div>
        <div class="wrapper">
                
                <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                </div>
                </div>
                <h3 class="h3 card-title">${item.FoodName}</h3>

               
                <div class="price-wrapper">
                      
                  <p class="price-text">Precio:</p>

                  <data class="price">${item.price}</data>
                   
                <div class="des my-3 ">
                  <!-- <p>${item.des}</p>-->
            </div>
                </li> 
    `;
foodContainer.innerHTML += listitem;
return listitem;
})
const foodCards = document.querySelectorAll('.food-menu-card');
foodCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar la propagación del evento
    });
});

const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'Todo')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Menu'){
                if(box.classList.contains('Menu'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Jugos'){
                if(box.classList.contains('Jugos'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Bebidas'){
                if(box.classList.contains('Bebidas'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Productos'){
                if(box.classList.contains('Productos'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})



 //Wsp
function orderNow(productName, productImage) {
    const waNumber = '51930134408'; // Número de WhatsApp de la empresa
    const waMessage = `Hola, me gustaría ordenar: *${productName}*`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
  
    // Enviar imagen dentro del mismo mensaje
    const waImageUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}&attach=${encodeURIComponent(productImage)}`;
    window.open(waImageUrl, '_blank');
  }





  //mapa
  function openMap() {
    var mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'block';
    window.open('https://www.google.com/maps/embed?pb=!4v1712906948468!6m8!1m7!1sg3BMEpYk4UPVOJm2g6U-LQ!2m2!1d-13.15225165518377!2d-74.20667832713457!3f330.78978726375647!4f-41.437135972356806!5f0.7820865974627469', '_blank');
  }