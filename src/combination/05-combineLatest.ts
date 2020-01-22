import "../assets/css/style.css";
import { fromEvent, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

/*const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

combineLatest(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(console.log);*/

const inputOneElement = document.createElement("input");
const inputTwoElement = document.createElement("input");

inputOneElement.placeholder = "email@gmail.com";
inputTwoElement.placeholder = "***********";
inputTwoElement.type = "password";

document.body.append(inputOneElement, inputTwoElement);

const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, "keyup").pipe(pluck<KeyboardEvent, string>("target", "value"));

combineLatest(getInputStream(inputOneElement), getInputStream(inputTwoElement)).subscribe(console.log);
