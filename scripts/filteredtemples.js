const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const hamButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, USA",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, USA",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2022, May, 22",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, USA",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Logan Utah",
	  location: "Logan, Utah, USA",
	  dedicated: "1884, May, 17",
	  area: 119619,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/mormon-temple-logan-utah-1237508-wallpaper.jpg"
	},
	{
	  templeName: "Praia Cape Verde",
	  location: "Praia, Cape Verde",
	  dedicated: "2022, June, 19",
	  area: 8759,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/400x250/praia_cape_verde_temple-main.jpeg"
	},
	{
	  templeName: "Rome Italy",
	  location: "Rome, Italy",
	  dedicated: "2019, March, 10",
	  area: 41010,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/7-Rome-Temple-2160340.jpg"
	},
	{
	  templeName: "Salt Lake Utah",
	  location: "Salt Lake City, Utah, USA",
	  dedicated: "1893, April, 6",
	  area: 382207,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
	},
	{
	  templeName: "St. George Utah",
	  location: "St. George, Utah, USA",
	  dedicated: "1877, April, 6",
	  area: 143969,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-947136-wallpaper.jpg"
	},
	{
	  templeName: "Taipei Taiwan",
	  location: "Taipei, Taiwan",
	  dedicated: "1984, November, 17",
	  area: 9945,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1672186-wallpaper.jpg"
	},
	{
	  templeName: "San Juan Puerto Rico",
	  location: "San Juan, Puerto Rico",
	  dedicated: "2023, January, 15",
	  area: 6988,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
	}
];

function createTempleCard(filteredTemples) {
	document.querySelector(".temple-album-container").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span>Location:</span><span class="label"> ${temple.location}</span>`;
		dedication.innerHTML = `<span>Dedicated:</span><span class="label"> ${temple.dedicated}</span>`;
		area.innerHTML = `<span>Size:</span><span class="label"> ${temple.area} sq ft</span>`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", 400);
		img.setAttribute("height", 250);

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple-album-container").appendChild(card);
	});
}

createTempleCard(temples);

const homelink = document.querySelector("#allTemples");
homelink.addEventListener("click", () => {
	document.querySelector("#pageHeading").innerHTML = "Home";
	createTempleCard(temples);
});

const oldtempleslink = document.querySelector("#oldTemples");
oldtempleslink.addEventListener("click", () => {
	document.querySelector("#pageHeading").innerHTML = "Old Temples";
	createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
});

const newtempleslink = document.querySelector("#newTemples");
newtempleslink.addEventListener("click", () => {
	document.querySelector("#pageHeading").innerHTML = "New Temples";
	createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
});

const largetempleslink = document.querySelector("#largeTemples");
largetempleslink.addEventListener("click", () => {
	document.querySelector("#pageHeading").innerHTML = "Large Temples";
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smalltempleslink = document.querySelector("#smallTemples");
smalltempleslink.addEventListener("click", () => {
	document.querySelector("#pageHeading").innerHTML = "Small Temples";
	createTempleCard(temples.filter(temple => temple.area < 10000));
});