const obj1 = {
    name: 'seizures',
    surname: 'convulsive',
    age: 52,
    addres: 'Japan'
}

const product1 = {
    img: 'https://i.scdn.co/image/ab67616d0000b2736741ef69663889b98514bcb4',
    title: 'irreversible consequences',
    rate: 4.9,
    reviews: 150 + ' заказов',
    oldPrice: 120000,
    newPrice: 14000,
    description: 'rampage is not difficult'
}

const product2 = {
    img: 'https://i.scdn.co/image/ab67616d0000b2736741ef69663889b98514bcb4',
    title: 'shadow fiend',
    rate: 5.2,
    reviews: 12 + ' заказов',
    oldPrice: 22000,
    newPrice: 5000,
    description: 'rampage is not difficult'
}

const product3 = {
    img: 'https://i.scdn.co/image/ab67616d0000b2736741ef69663889b98514bcb4',
    title: 'seizures convulsive',
    rate: 5 + ' заказов',
    reviews: 2050,
    oldPrice: 1200000,
    newPrice: 1000,
    description: 'rampage is not difficult'
}

product3.rate = 4.8
product3.newPrice = 2000
product3.oldPrice = 1000

product3.stock = 69 + ' товаров'

delete product3.oldPrice

console.log(product1 ['title'], product1['newPrice']);
console.log(product2 ['title'], product2['newPrice']);
console.log(product3 ['title'], product3['newPrice'], product3['rate'], product3['stock']);



const cardImg = document.querySelector('.card img')
const cardTitle = document.querySelector('.card h3')
const cardRating = document.querySelector('#rating')
const cardReviews = document.querySelector('#reviews')
const cardOldPrice = document.querySelector('.card s')
const cardNewPrice = document.querySelector('.card b')

cardImg.src = product1.img
cardImg.style.width = '200px'
cardTitle.innerText = product1.title
cardReviews.innerText = product1.reviews
cardRating.innerText = product1.rate
cardOldPrice.innerText = product1.oldPrice
cardNewPrice.innerText = product1.newPrice