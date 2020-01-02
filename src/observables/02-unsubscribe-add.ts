import { Observable, Observer } from "rxjs";
import "../assets/css/style.css";

const observer: Observer<number> = {
  next: value => console.log("next: ", value),
  error: err => console.warn("error: ", err),
  complete: () => console.info("Complete")
};

const interval$ = new Observable<number>(subs => {
  let counter = 0;

  const interval = setInterval(() => {
    counter++;
    subs.next(counter);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Interval destroyed");
  };
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();

  console.log("Timeout complete");
}, 6000);
