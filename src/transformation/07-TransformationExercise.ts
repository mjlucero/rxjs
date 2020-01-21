import "../assets/css/style.css";
import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

//Helper
const login = user => ajax.post('https://reqres.in/api/login?delay=1',user).pipe(
    pluck('response','token'),
    catchError(err => of('xxxxx')
));

//Html form
const formElement = document.createElement('form');
const inputEmailElement = document.createElement('input');
const inputPassElement = document.createElement('input');
const submitButtonElement = document.createElement('button');

inputEmailElement.type = "email";
inputEmailElement.placeholder = "Email";
inputEmailElement.value = "eve.holt@reqres.in";


inputPassElement.type = "password";
inputPassElement.placeholder = "Password";
inputPassElement.value = "cityslicka";

submitButtonElement.innerHTML = "Login";

formElement.append(inputEmailElement, inputPassElement, submitButtonElement);

document.body.append(formElement);

const submitForm$ = fromEvent<Event>(formElement, "submit").pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    mergeMap(login)
);

submitForm$.subscribe(token => console.log(token));