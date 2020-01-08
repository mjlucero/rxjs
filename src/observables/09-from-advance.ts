import { of,from } from "rxjs";
import "../assets/css/style.css";


const observer = {
    next: value => console.log("Next: ", value),
    complete: () => console.log("Complete")
}

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterable = myGenerator();

const numbers = [0,1,2,3,4,5];

//const source$ = from(numbers);
//const source$ = of(...numbers);
//const source$ = from("Mauricio");
//const source$ = from(fetch("https://api.github.com/users/klerith"));
const source$ = from(myIterable);

/*source$.subscribe(async(res) => {
    const resJson = await res.json();
    console.log(resJson);
});*/

source$.subscribe(observer);