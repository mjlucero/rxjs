import { range, of, asyncScheduler } from "rxjs";
import "../assets/css/style.css";

//const srcOf$ = of<number>(1, 2, 3, 4, 5);
const src$ = range(1, 5, asyncScheduler);

console.log("Start");
src$.subscribe(console.log);
console.log("End");
