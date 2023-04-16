let xAxisData = [
    {"name":'Jan',"sales":10},
    {"name":'Feb',"sales":90},
    {"name":'Mar',"sales":100},
    {"name":'Apr',"sales":120},
    {"name":'May',"sales":50},
    {"name":'Jun',"sales":200},
    {"name":'Jul',"sales":250},
    {"name":'Agu',"sales":120},
    {"name":'Sep',"sales":90},
    {"name":'Oct',"sales":140},
    {"name":'Nov',"sales":134},
    {"name":'Des',"sales":400},
]

let newUsers = [
    {id:1,username:'Amir Keramat',Job:"Web developer"},
    {id:2,username:'Yasamin Keramat',Job:"Ui-Ux"},
    {id:3,username:'Farhad keramat',Job:"Seo"},
    {id:4,username:'Shirin Keramat',Job:"Hacker"},
]

const transactions = [
    {id:1,costumer:'Amir Keramat',date:'12 jun 2023',amount:199.99,status:'Approved',img:'images/about-me.jpg'},
    {id:2,costumer:'Yasamin Keramat',date:'20 May 2023',amount:230.99,status:'Pending',img:'images/about-me.jpg'},
    {id:3,costumer:'Farhad Keramat',date:'10 Apr 2023',amount:400.99,status:'Approved',img:'images/about-me.jpg'},
    {id:4,costumer:'Shirin Keramat',date:'13 Des 2023',amount:19.99,status:'Declined',img:'images/about-me.jpg'},
]
let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'images/about-me.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/about-me.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/about-me.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/about-me.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/about-me.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]
export {xAxisData,newUsers,transactions,userRows,products} 

