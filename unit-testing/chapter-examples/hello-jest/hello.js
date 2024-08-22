function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!";
}

// console.log(hello());
module.exports = hello;