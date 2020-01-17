import "../assets/css/style.css";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResponse } from "../interfaces/github-users.interface";

const bodyRef = document.querySelector("body");
const textInput = document.createElement("input");
const orderListElement = document.createElement("ol");

bodyRef.append(textInput, orderListElement);

//Helpers
const showUsers = (users: GithubUser[]) => {
    console.log(users);
    
    orderListElement.innerHTML = "";

    for (const user of users) {
        const liElement = document.createElement('li');
        const imgElement = document.createElement('img');
        const anchorElement = document.createElement('a');

        imgElement.src = user.avatar_url;

        anchorElement.href = user.html_url;
        anchorElement.text = 'View profile';
        anchorElement.target = '_blank';

        liElement.append(imgElement);
        liElement.append(user.login + " ");
        liElement.append(anchorElement);

        orderListElement.append(liElement);
    }
};

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResponse>>(text =>  ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUser[]>('items')
).subscribe(showUsers);