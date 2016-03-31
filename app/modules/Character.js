class Character {
  constructor(name = "Captain America") {
    this.name = name;
    console.log(name);
    this.getData();
  }

  render() {
    document.querySelector(".content--profile-pic").src = this.image;
    document.querySelector(".content--profile-title").innerHTML = this.name;
    document.querySelector(".content--profile-description").innerHTML = this.description;
  }

  getData() {
    const token = `6e7bd33438a14b84d91097cd3cfc46b5`;

    fetch(`http://gateway.marvel.com:80/v1/public/characters?name=${encodeURI(this.name)}&apikey=${token}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.id = response.data.results[0].id;
        this.description = response.data.results[0].description;
        this.image = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`;

        this.render();
        this.getEventData();
      })
  }

  getEventData() {
    const token = `6e7bd33438a14b84d91097cd3cfc46b5`;

    fetch(`http://gateway.marvel.com/v1/public/characters/${this.id}/events?apikey=${token}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.events = response.data.results;
        console.log(this.events);

        this.renderEvents();
      })
  }

  renderEvents() {
    let placeholder = document.querySelector("#placeholder");

    let h2 = document.querySelector(".content--title");
    h2.innerHTML = "Events";

    this.events.forEach((event) => {
      let div = document.createElement("div");
      div.classList.add("content--event");

      let a = document.createElement("a");
      a.href = `/events/${event.id}`;

      let img = document.createElement("img");
      img.src = `${event.thumbnail.path}.${event.thumbnail.extension}`;
      a.appendChild(img);

      let label = document.createElement("label");
      label.innerHTML = event.title;
      a.appendChild(label);

      div.appendChild(a);

    placeholder.appendChild(div);
    });
  }
}

export default Character;
