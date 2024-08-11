///   object literels

const mysym = Symbol('key1')

const jsUser = { 
    name: 'harsh',
    "full": "harsh shukla",
    location: 'hisar',
    [mysym]: 'mykey1',
    isLoggin: false,
    age: 22,
    Email: 'harsh@google.com',
    lastLoggin: ['Monday', 'Tuesday']

}
// console.log(jsUser.Email);
// console.log(jsUser['Email']);
// console.log(jsUser['full'])
// console.log(jsUser.full);
// console.log(typeof jsUser[ mysym]);

jsUser.Email= 'harsh@hatgpt.com'

// Object .freeze(jsUser)

jsUser.name = 'mohit',
jsUser.Email= 'mohit@gmail.com'
// console.log(jsUser)

jsUser.greeting= function(){
    console.log('hlo js user')
}
console.log(jsUser.greeting())

jsUser.greetingTwo= function(){
    console.log(`hlo js user, ${this.name} `)
}
console.log(jsUser.greetingTwo())



