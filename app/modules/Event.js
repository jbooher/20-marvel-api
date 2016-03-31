class Event {
  constructor(id) {
    this.id = id;
    this.getData();
  }

  getData() {
    const token = `6e7bd33438a14b84d91097cd3cfc46b5`;

    fetch(`http://gateway.marvel.com:80/v1/public/events/${this.id}?apikey=${token}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.title = response.data.results[0].title;
        this.description = response.data.results[0].description;
        this.image = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`;
        this.characters = response.data.results[0].characters.items;
        console.log(this.characters);

        this.render();
        this.renderCharacters();
      })
  }

  render() {
    document.querySelector(".content--profile-pic").src = this.image;
    document.querySelector(".content--profile-title").innerHTML = this.title;
    document.querySelector(".content--profile-description").innerHTML = this.description;
  }

  renderCharacters() {
    let placeholder = document.querySelector("#placeholder");

    let h2 = document.querySelector(".content--title");
    h2.innerHTML = "Characters";

    this.characters.forEach((character) => {
      let div = document.createElement("div");
      div.classList.add("content--character");

      // let img = document.createElement("img");
      // img.src = `${event.thumbnail.path}.${event.thumbnail.extension}`;
      // div.appendChild(img);

      let a = document.createElement("a");
      a.href = `/characters/${character.name}`;
      a.innerHTML = character.name;
      div.appendChild(a);

    placeholder.appendChild(div);
    });
  }
}

export default Event;
