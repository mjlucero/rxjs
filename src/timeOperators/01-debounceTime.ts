import "../assets/css/style.css";
import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged,  } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(
  debounceTime(3000)
).subscribe(console.log);

const inputElement =  document.createElement('input');
document.querySelector('body').append(inputElement);

const input$ = fromEvent<KeyboardEvent>(inputElement, "keyup");
input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);
