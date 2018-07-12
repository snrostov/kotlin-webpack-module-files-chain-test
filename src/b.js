import moduleExports from "./a.js";

console.log("b.js start");
moduleExports.y = moduleExports.x + 1;
console.log("moduleExports.y: " + moduleExports.y);
console.log("b.js end");



export default moduleExports;
