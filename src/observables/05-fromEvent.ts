import { fromEvent } from "rxjs";
import "../assets/css/style.css";

/**
 * DOM events
 */
const srcOne$ = fromEvent<MouseEvent>(document, "click");
const srcTwo$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: value => console.log("next: ", value)
};

srcOne$.subscribe(({ x, y }) => console.log(x, y));
srcTwo$.subscribe(({ key }) => console.log(key));
