import "./CSS/style.css";       // 直接接受热更新

import _ from "lodash";

import { name as o } from "./index2.js";
import printMe from "./print";

document.writeln(o);
document.writeln("<br>");
document.writeln(_.max(["1", "2", "3", "11", "22"]));
setInterval(() => {
    console.log("注意，这里的printMe是会直接更新的，但是，下面定时器的printMe就不会了，因为下面的函数已经被绑定到定时器上了。");
    printMe();
}, 10000);
setInterval(printMe, 10000);

if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log("Accepting the updated printMe module!");
        printMe();
    });
}