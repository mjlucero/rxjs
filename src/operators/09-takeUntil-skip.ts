import { interval, fromEvent } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";
import "../assets/css/style.css";

const bodyRef = document.querySelector("body");

const button =  document.createElement("button");
button.innerHTML = "Stop timer";

bodyRef.append(button);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent(button, "click");
const clickBtn$ = fromEvent(button, "click").pipe(skip(1));

counter$.pipe(
  takeUntil(clickBtn$)
)
.subscribe({
  next: value => console.log("Next: ", value),
  complete: () => console.log("Complete")
})
