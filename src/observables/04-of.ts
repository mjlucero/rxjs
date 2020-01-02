import { of } from "rxjs";
import "../assets/css/style.css";

//const observer$ = of(1, 2, 3, 4, 5, 6);
//const observer$ = of<number>(...[1, 2, 3, 4, 5, 6]);
const observer$ = of([1, 2], { a: 1, b: 2 }, function() {}, true, Promise.resolve(true));

console.log("Start of observable");

observer$.subscribe(
  next => console.log("next: ", next),
  null,
  () => console.log("Sequence finish")
);

console.log("Finish of observable");
