const tinderUser = new Object ()    // singleton object 
// console.log(tinderUser);

const tinderUser2 ={}

tinderUser2.name='ammy'
tinderUser2.email='ammy@gmail.com'
tinderUser2.location='hisar'
tinderUser2.isLoggedin=true
tinderUser2.phone_no = 334567754
// console.log(tinderUser2);



const regularUser = {userName:{
    userFullname:{
    firstName:'harsh',
    lastName:'shukla'
}
}

}
// console.log(regularUser.userName.firstName);


const obj1 ={1:'a',2:'b',3:'c'}
const obj2 ={4:'d',5:'e',6:'f'}
const obj3 ={7:'g',8:'h',9:'i'}
const obj4 ={10:'j',11:'k',13:'l'}

const obj5 = Object.assign({},obj1,obj2,obj3,obj4)

const obj6 ={...obj1,...obj2,...obj3,...obj4}
// console.log(obj5)
// console.log(obj6)

// console.log(tinderUser2)
// console.log(Object.keys(tinderUser2));
// console.log(Object.values(tinderUser2));

// console.log(tinderUser2.hasOwnProperty('name'));


const course= {
    coursename: 'javascript',
    price:599,
    courseInstructor:'Harsh'

}
const {courseInstructor:abc}= course
console.log(abc);
console.log(abc);
// console.log(course.price)