import "./CSS/style.css";
import img1 from "./IMG/img1.jpg";
import data1 from "./DATA/data.xml";

import _ from "lodash";

import { name as o } from "./index2.js";

document.writeln(o);
document.writeln("<br>");
document.writeln(_.max(["1", "2", "3", "11", "22"]));
document.writeln(`<br>${img1}`);
document.writeln(`<br><img src=dist/${img1}`);
console.log(data1);
