import { Observable, Observer, Subject } from "rxjs";
import "../assets/css/style.css";

const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: err => console.warn("error: ", err),
  complete: () => console.info("Complete")
};

const interval$ = new Observable<number>(subs => {
  const interval = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval destroyed");
  };
});

/**
 * 1- Multiple cast
 * 2- Is an Observer
 * 3- Has next, err and complete
 */
const subject$ = new Subject();

const intervalSubscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubscription.unsubscribe();
}, 3500);
