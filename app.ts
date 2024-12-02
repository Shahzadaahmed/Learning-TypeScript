// Note: Welcome to TS...!

// Note: TypeScript is JavaScript with syntax for types.

// Note: Most useful data types.
// Data Types: Number, String, Boolean, Array, Object.

// Example:

/*
const userName: string = "Muhammad Ahmed";
const userAge: number = 28;
const updatedName: string = "Shahzada Ahmed";
const fruits: string[] = ['Apple', 'Banana', "Mango"]; // Array of strings.
let isUserMarried: boolean = false;
isUserMarried = true;

console.log("User name: ", userName);
console.log("User age: ", userAge);
console.log("Updated name: ", updatedName);
console.log("Fruits: ", fruits);
console.log("Is user married: ", isUserMarried);
*/

// Note: Objects...!
// Note: If we want to create an object then first we will have to define the types of object's properties.

// Note: TypeScript mein interface ek tarah ka structure hota hai jo define karta hai ke ek object ya class ka shape
// kaisa hona chahiye. Ye ek contract ki tarah kaam karta hai jo ensure karta hai ke kisi variable ya class ke andar
// kuch specific properties ya methods zaroor honi chahiye.

// Example:
/*
interface User {
    firstName: string,
    lastName: string,
    age: number,
    isMarried: boolean,
    childrens?: String[] // Note: ? means it's optional.
}

const user: User = {
    firstName: "Muhammad",
    lastName: "Ahmed",
    age: 28,
    isMarried: false,
};

console.log('User data: ', user);
*/

// Note: Functions...!

// Example # 01:
// const greetUser = (name: string) => {
//     console.log("Name: ", name);
// };

// greetUser('Prince');

// Example # 02:

// const renderUserData = (name: string, title: string, skills: string[]) => {
//     console.log("Hi, My name is ", name, "and I am currently working as a ", title, "in QBS Co Pvt Ltd with skills of ", skills);
// };

// renderUserData("Shahzada Ahmed", "Software Engineer", ["Html", "Css", "JS"]);

// Example # 03:

// const addNumbers = (a: number, b: number): number => {
//     return a + b;
// };

// const output: number = addNumbers(8, 4);
// console.log(output);



// Note: Dynamic types in TypeScript...!

// Note: TypeScript mein any ek special type hai jo kisi bhi tarah ke value ko accept kar sakta hai.

/*
let value: any;

value = "Hello"; // string
value = 42;      // number
value = true;    // boolean
value = { key: "value" }; // object
*/

// Example:
/*
let value: any = "Hello World"; // string.
console.log(value.toUpperCase());

value = 40; // Converted to number.

console.log(value.toLowerCase()); // Runtime Error (TypeScript nahi check karega)
*/

// NOTE: Generic Types:

// Example: 01

// interface User<Type> { // Note: Type generic hai 
//     name: string,
//     email: string,
//     data: Type
// };

// const user: User<number> = {
//     name: "Shahzada Ahmed",
//     email: "ahmed@gmail.com",
//     data: 12
// };

// // console.log("User: ", user);

// const user2: User<string[]> = {
//     name: "Syed Shahzaib",
//     email: "shahzaib@gmail.com",
//     data: ["Good", "Better", "Best"]
// };

// console.log("User 2: ", user2);


// Example: 01

/*
interface Company<Type extends object> {
    comName: string,
    address: string,
    services: Type
};

const company_1: Company<{ WebAndApp: boolean, SAP: boolean }> = {
    comName: "QBS Co Pvt Ltd",
    address: "DHA Phase # 02",
    services: {
        WebAndApp: true,
        SAP: false,
    }
};

console.log('Com: ', company_1.services.SAP);
*/

/*
interface Company<Type extends { msOfficeSpecialist: boolean }> {
    comName: string,
    address: string,
    services: Type
};

const company_2: Company<{ msOfficeSpecialist: boolean, WebAndApp: boolean, SAP: boolean }> = {
    comName: "QBS Co Pvt Ltd",
    address: "DHA Phase # 02",
    services: {
        msOfficeSpecialist: true,
        WebAndApp: true,
        SAP: false,
    }
};

console.log('Company 1: ', company_2);
*/


// Note: Enums:

enum orderStatus {
    pending = "pending",
    inProcess = "inProcess",
    onTheWay = "onTheWay",
    ready = "ready",
    delivered = "delivered"
};

const orders: { orderId: string, status: string }[] = [
    {
        orderId: "AB-12",
        status: orderStatus.pending
    },

    {
        orderId: "AB-13",
        status: orderStatus.inProcess
    },

    {
        orderId: "AB-14",
        status: orderStatus.onTheWay
    },

    {
        orderId: "AB-15",
        status: orderStatus.ready
    },

    {
        orderId: "AB-16",
        status: orderStatus.delivered
    },

    {
        orderId: "AB-17",
        status: orderStatus.pending
    },

    {
        orderId: "AB-18",
        status: orderStatus.ready
    },
];

console.log('Orders: ', orders);