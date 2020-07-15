import _ from "lodash";

import { name as o } from "./index2.js";
import printMe from "./print";

document.writeln(o);
document.writeln("<br>");
document.writeln(_.max(["1", "2", "3", "11", "22"]));
printMe();