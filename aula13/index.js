const user = {
    name: "John Doe",
    email:"doejohn@email.com",
    friends: [{
        name: "Mary",
        adress: {
            street:"Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

// console.log(user.friends[0].phone.ddd)  // não tem a propriedade "phone" dentro do array "frieds", por isso deu erro.
console.log(user?.friends[0]?.phone?.ddd)  // resultado underfined, pois foi utilizado ?.
console.log(user.brothers?.[5].name)  
