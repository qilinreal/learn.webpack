import * as obj1 from "http://localhost:8013/module2.js";

export default function hello() {
    confirm(obj1.a);
    console.log(obj1.a);
    // import("http://localhost:8013/module2.js").then(module => console.log(module.a+":name"));
}