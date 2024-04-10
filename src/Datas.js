const datas = [
    {"name" : "Jan" , "sale" : 65_000},
    {"name" : "Feb" , "sale" : 50_000},
    {"name" : "Mar" , "sale" : 80_000},
    {"name" : "Apr" , "sale" : 48_000},
    {"name" : "May" , "sale" : 38_000},
    {"name" : "Jun" , "sale" : 45_000},
    {"name" : "Jul" , "sale" : 13_000},
    {"name" : "Agu" , "sale" : 43_000},
    {"name" : "Sep" , "sale" : 15_000},
    {"name" : "Oct" , "sale" : 99_000},
    {"name" : "Nov" , "sale" : 55_000},
    {"name" : "Dec" , "sale" : 43_000},
]
const users = [
    {id : 1, username : "Sarah Smith", title : "Web Developer", img : "images/person7.jpg"},
    {id : 2, username : "John Doe", title : "Seo Expert", img : "images/person8.jpg"},
    {id : 3, username : "Tom Johnson", title : "Andriod Developer", img : "images/person9.jpg"},
    {id : 4, username : "Isabell Mark", title : "Content Writer", img : "images/person10.jpg"},
]
const transactions = [
    {
        customer : "Lina Vaughan",
        date : "22 Jun 2023",
        amount : 123,
        status : "Approved",
        img : "images/person5.jpg"
    },
    {
        customer : "Andrew Kirby",
        date : "18 Jun 2023",
        amount : 115,
        status : "Declined",
        img : "images/person2.jpg"
    },
    {
        customer : "Zach Eaton",
        date : "6 May 2023",
        amount : 325,
        status : "Pending",
        img : "images/person3.jpg"
    },
    {
        customer : "Mary Underwood",
        date : "25 Apr 2023",
        amount : 89,
        status : "Approved",
        img : "images/person6.jpg"
    },
]
const userRows = [
    {
        id :1 , 
        username : "Leonardo Pruitt",
        avatar : "images/person1.jpg",
        status : "active",
        transactions : "$129.53",
        email : "Leonardopruitt@gmail.com"
    },
    {
        id :2 , 
        username : "Olivier Mahoney",
        avatar : "images/person2.jpg",
        status : "deactive",
        transactions : "$87.43",
        email : "Oliviermahoney@gmail.com"
    },
    {
        id :3 , 
        username : "Jack Mason",
        avatar : "images/person3.jpg",
        status : "banned",
        transactions : "$332.90",
        email : "Jackmason@gmail.com"
    },
    {
        id :4 , 
        username : "Aleeza Cherry",
        avatar : "images/person4.jpg",
        status : "active",
        transactions : "$119.93",
        email : "Aleezacherry@gmail.com"
    },
    {
        id :5 , 
        username : "Annabelle Branch",
        avatar : "images/person5.jpg",
        status : "banned",
        transactions : "$89.99",
        email : "Annabellebranch@gmail.com"
    },
    {
        id :6 , 
        username : "Brendan Barrett",
        avatar : "images/person6.jpg",
        status : "banned",
        transactions : "$229.83",
        email : "Brendenbarrett@gmail.com"
    },
]
const products = [
    {
        id : 1,
        title : "Asus",
        price : 890,
        avatar : "/images/asus.jpg",
        brand : "Asus",
        totalSale : 12906,
        inventory : 10,
        color : "Gray"
    },
    {
        id : 2,
        title : "Acer",
        price : 490,
        avatar : "/images/acer.jpg",
        brand : "Acer",
        totalSale : 22450,
        inventory : 5,
        color : "LightGray"
    },
    {
        id : 3,
        title : "Hp",
        price : 890,
        avatar : "/images/hp.jpg",
        brand : "Hp",
        totalSale : 99360,
        inventory : 9,
        color : "white"
    },
    {
        id : 4,
        title : "Dell",
        price : 1100,
        avatar : "/images/dell.avif",
        brand : "dell",
        totalSale : 87698,
        inventory : 11,
        color : "black"
    },
    {
        id : 5,
        title : "MacBook",
        price : 1349,
        avatar : "/images/macbook.jpg",
        brand : "Apple",
        totalSale : 76570,
        inventory: 0,
        color : "Gold"
    },
]

const sales = [
    {
        name : "May",
        sale : 3000
    },
    {
        name : "Jun",
        sale : 1500
    },
    {
        name : "Jul",
        sale : 4200
    },
]
export {datas, users,transactions, userRows, products,sales};