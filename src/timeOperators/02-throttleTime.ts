import "../assets/css/style.css";
import { fromEvent, asyncScheduler } from "rxjs";
import { pluck, distinctUntilChanged, throttleTime,  } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  throttleTime(3000)
).subscribe(console.log);

const inputElement =  document.createElement('input');
document.querySelector('body').append(inputElement);

const input$ = fromEvent<KeyboardEvent>(inputElement, "keyup");
input$.pipe(
  throttleTime(400, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);
