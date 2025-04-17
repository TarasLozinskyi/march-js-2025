//
// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://freepngimg.com/save/webp/16020-milk-png-clipart'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/35fdd0544eca5bccc5ee3d629a6371f0'
//     }
// ];
//
// ШАБЛОН
//
// <div class=”product-card”>
//
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
//
// <img src=”IMAGE” alt=”” class=”product-image”>
//
// </div>
//
// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://freepngimg.com/save/webp/16020-milk-png-clipart'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/35fdd0544eca5bccc5ee3d629a6371f0'
    }
];


for (const product of products) {
    document.write(` <div class='product-card' >
                        <h3 class='product-title'>${product.title}. Price – ${product.price}</h3>
                        <img style="width: 200px; height: 200px; object-fit: cover " src='${product.image}' alt='img' class=”product-image”>
                      </div>`)
}
