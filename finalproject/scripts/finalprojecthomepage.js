// Home page
const events = [
    {
      eventType: "Music",
      eventName: "Beluga Halloween Party at BIRO",
      date: "31.10.24",
      location: "Podgorica",
      shortDescription: "Trick or treat?! The night we've all been waiting for! On two stages...",
      eventUrl: "https://ra.co/events/2028031"
    },
    {
      eventType: "Culture",
      eventName: "Wild Pomegranate Days in Danilovgrad",
      date: "02.11.24",
      location: "Danilovgrad",
      shortDescription: "Enjoy a rich cultural and artistic program and discover a wide...",
      eventUrl: "https://www.montenegro.travel/en/explore-montenegro/events-in-montenegro/665-wild-pomegranate-days-in-danilovgrad"
    },
    {
      eventType: "Culture",
      eventName: "4th Kotor International Maritime Conference",
      date: "27.11.24 - 29.11.24",
      location: "Kotor",
      shortDescription: "The 4th Kotor International Maritime Conference (KIMC...",
      eventUrl: "https://www.ucg.ac.me/objava/blog/1271/objava/183037-medunarodna-konferencija-pomorskih-nauka-u-kotoru-kimc-2024#lat"
    },
    {
      eventType: "Music",
      eventName: "New Year's Eve in Tivat",
      date: "30.12.24 - 01.01.25",
      location: "Tivat",
      shortDescription: "Tivat is the ultimate destination this December-the perfect...",
      eventUrl: "https://www.montenegro.travel/en/explore-montenegro/events-in-montenegro/479-new-year-s-eve-in-tivat"
    },
    {
      eventType: "Music",
      eventName: "Mimosa Festival",
      date: "14.02.25 - 01.03.25",
      location: "Herceg Novi",
      shortDescription: "The festival is something between a carnival and a fun folk festival...",
      eventUrl: "https://www.montenegro.travel/en/explore-montenegro/events-in-montenegro/44-mimosa-festival"
    },
    {
      eventType: "Culture",
      eventName: "Kotor Winter Carnival 2025",
      date: "23.02.25 - 03.03.25",
      location: "Kotor",
      shortDescription: "Koto Winter carnival is a unique event that usually takes place...",
      eventUrl: "https://www.gowherewhen.com/event/kotor-winter-carnival"
    },
    {
      eventType: "Culture",
      eventName: "Camellia Days",
      date: "20.03.25 - 30.04.25",
      location: "Stoliv",
      shortDescription: "Spring blooming camellias festivity...",
      eventUrl: "https://kotor.travel/cammelia-days/"
    },
    {
      eventType: "Sports",
      eventName: "Boka Bay Trail 2025",
      date: "26.04.25 - 27.04.25",
      location: "Boka bay",
      shortDescription: "Boka Bay Trail supported by Salomon: Trail Run Race...",
      eventUrl: "https://www.bokabaytrail.com/"
    },
    {
      eventType: "Sports",
      eventName: "Ocean Lava Montenegro",
      date: "18.05.25",
      location: "Kotor",
      shortDescription: "In Montenegro we don't say triathlon, we say Ocean Lava...",
      eventUrl: "https://www.oceanlava.me/#intro"
    },
    {
      eventType: "Sports",
      eventName: "Prokletije Sky Ultra",
      date: "Mid-August 2025",
      location: "Gusinje",
      shortDescription: "A challenging trail running event...",
      eventUrl: "https://www.finishers.com/en/event/prokletije-sky-ultra"
    },
    {
      eventType: "Music",
      eventName: "Petrovac Jazz Festival",
      date: "Late-August 2025",
      location: "Petrovac",
      shortDescription: "The Petrovac Jazz Festival is an annual music festival held in...",
      eventUrl: "https://www.gowherewhen.com/event/petrovac-jazz-fest"
    },
    {
      eventType: "Sports",
      eventName: "Blacklake - Montenegro Xtreme Triathlon",
      date: "13.09.25",
      location: "Black Lake",
      shortDescription: "The swim in Black Lake will be a unique experience...",
      eventUrl: "https://blackxtri.com/"
    }  
];

function createEventCard(filteredEvents) {
    document.querySelector("#eventContainer").innerHTML = "";
    filteredEvents.forEach(event => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let type = document.createElement("p");
        let date = document.createElement("p");
        let location = document.createElement("p");
        let description = document.createElement("p");
        let link = document.createElement("a");
        let text = document.createTextNode("Read more ↗");

        name.textContent = event.eventName;
        type.innerHTML = `<span class="label">Event type:</span><span> ${event.eventType}</span>`;
        date.innerHTML = `<span class="label">Date:</span><span> ${event.date}</span>`;
        location.innerHTML = `<span class="label">Location:</span><span> ${event.location}</span>`;
        description.textContent = event.shortDescription;
        link.setAttribute("href", event.eventUrl);
        link.setAttribute("target", "_blank");
        link.appendChild(text);

        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(date);
        card.appendChild(location);
        card.appendChild(description);
        card.appendChild(link);

        document.querySelector("#eventContainer").appendChild(card);
    });
}

createEventCard(events);

document.addEventListener("DOMContentLoaded", function () {
  const eventList = document.querySelector("#eventSelection");
  eventList.addEventListener("change", () => {
    if (eventList.value == "All") {
      document.querySelector("#eventHeading").innerHTML = "Upcoming Events";
      createEventCard(events);
    } else if (eventList.value == "Culture") {
      document.querySelector("#eventHeading").innerHTML = "Upcoming Cultural Events";
      createEventCard(events.filter(event => event.eventType.includes("Culture")));
    } else if (eventList.value == "Music") {
      document.querySelector("#eventHeading").innerHTML = "Upcoming Music Events";
      createEventCard(events.filter(event => event.eventType.includes("Music")));
    } else if (eventList.value == "Sports") {
      document.querySelector("#eventHeading").innerHTML = "Upcoming Sporting Events";
      createEventCard(events.filter(event => event.eventType.includes("Sports")));
    } else {
      document.querySelector("#eventContainer").innerHTML = "<p>No events found.</p>";
    }
  });

});