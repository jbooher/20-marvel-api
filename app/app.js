import 'es6-promise';
import 'whatwg-fetch';

import Character from "./modules/Character";
import Event from "./modules/Event"

function character(ctx) {
  let placeholder = document.querySelector("#placeholder");

  if(ctx.params.name !== undefined) {
    placeholder.innerHTML = "";

    let character = new Character (ctx.params.name);
  }
  else {
    let character = new Character ("Captain America");
  }
}

function event(ctx) {
  let placeholder = document.querySelector("#placeholder");
  placeholder.innerHTML = "";

  let event = new Event(ctx.params.id);
}

page('/', character);
page('/characters/:name', character);
page('/events/:id', event);
page();
