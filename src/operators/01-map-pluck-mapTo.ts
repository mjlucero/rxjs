import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";
import "../assets/css/style.css";

range(1,5).pipe(map<number, string>(value => (value * 10).toString())).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupMap$ = keyup$.pipe(map(event => event.code));
const keyupPluck$ = keyup$.pipe(pluck("key"));
const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));

keyupMap$.subscribe(code => console.log("map", code));
keyupPluck$.subscribe(code => console.log("pluck", code));
keyupMapTo$.subscribe(code => console.log("mapTo", code));