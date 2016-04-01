import 'es6-promise';
import 'whatwg-fetch';

import Character from "./modules/Character";
import Event from "./modules/Event";

let placeholder = document.querySelector("#placeholder");
let input = document.querySelector("#input");
let search = document.querySelector("#search");
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  console.log(input.value);
  placeholder.innerHTML = "";
  page(`/characters/${input.value}`);
});

function index(ctx) {
  let placeholder = document.querySelector("#placeholder");

  placeholder.innerHTML = "";
  placeholder.innerHTML = "Get started by typing the name of the hero you would like to search above.";
}

function character(ctx) {
  let placeholder = document.querySelector("#placeholder");
  placeholder.innerHTML = "";

  let character = new Character (ctx.params.name);

}

function event(ctx) {
  let placeholder = document.querySelector("#placeholder");
  placeholder.innerHTML = "";

  let event = new Event(ctx.params.id);
}

function error(ctx) {
  let placeholder = document.querySelector("#placeholder");

  placeholder.innerHTML = "";
  placeholder.innerHTML = "We couldn't find that hero.  Please search again.";
}

page('/', index);
page('/characters/:name', character);
page('/events/:id', event);
page('*', error);
page();
