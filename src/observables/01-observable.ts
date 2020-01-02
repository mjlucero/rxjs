import { Observable, Observer } from "rxjs";
import "../assets/css/style.css";

const observer: Observer<string> = {
  next: value => console.log("next: ", value),
  error: err => console.warn("error: ", err),
  complete: () => console.info("Complete")
};

//Alternative way to create observable
//const observable$ = Observable.create();

const observable$ = new Observable<string>(subs => {
  subs.next("Hello");

  /*const a = undefined;
  a.name = "Mauricio";*/

  subs.next("World");

  subs.complete();

  subs.next("test");
});

/*observable$.subscribe(
  value => console.log("next: ", value),
  error => console.warn("error: ", error),
  () => console.info("Complete")
);*/

observable$.subscribe(observer);
