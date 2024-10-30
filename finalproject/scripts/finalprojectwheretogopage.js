// Where to Go page
const destinations = [
    {
        destinationType: "Coastal Town",
        destinationName: "BUDVA",
        descriptiveParagraph: "Situated on the Adriatic coast, Budva is one of the most popular tourist \
        destinations in Montenegro, attracting tourists from all over the world with its famous beaches of Jaz \
        and Mogren. This charming town is known for its beautiful historic Old Town and vibrant nightlife. \
        Surrounded by ancient walls, Budva's Old Town is a maze of narrow streets filled with cafes, \
        restaurants and boutiques. It is also home to museums and churches that offer a glimpse into the \
        region's rich history. Budva is ideal for those looking to combine a beach holiday with cultural \
        experiences.",
        imageUrl: "./images/budva.webp"
    },
    {
        destinationType: "Coastal Town",
        destinationName: "KOTOR",
        descriptiveParagraph: "Kotor is a true pearl of Montenegro, located in the Bay of Kotor. Surrounded by \
        majestic mountains and ancient fortress walls, this city immerses tourists in the atmosphere of the \
        Middle Ages. The Old Town of Kotor, listed as a UNESCO World Heritage Site, is a labyrinth of narrow \
        streets where you can find many historical monuments, churches and palaces. One of the main attractions \
        is the Cathedral of St. Tryphon, built in the 12th century. Walking around Kotor, you can enjoy the \
        unique architecture and feel the spirit of the past.",
        imageUrl: "./images/kotor.webp"
    },
    {
        destinationType: "Coastal Town",
        destinationName: "TIVAT",
        descriptiveParagraph: "Situated on the Adriatic coast, Tivat is one of the sunniest towns in Montenegro. \
        This small but vibrant town attracts tourists with its luxurious marinas, elegant promenades and modern \
        amenities. Tivat is home to the famous Porto Montenegro complex, where you can see superyachts and enjoy \
        the atmosphere of luxury. The town also offers many cozy cafes, restaurants and shops where you can taste \
        local delicacies and buy souvenirs. Tivat is a perfect combination of Mediterranean tranquility and modern \
        amenities.",
        imageUrl: "./images/tivat.webp"
    },
    {
        destinationType: "Coastal Town",
        destinationName: "HERCEG-NOVI",
        descriptiveParagraph: "Situated at the entrance to the Bay of Kotor, Herceg Novi is one of the most \
        picturesque towns in Montenegro. This town is famous for its many sunny days and abundance of mimosa \
        trees. The Old Town of Herceg Novi, surrounded by ancient fortress walls, is a labyrinth of narrow \
        streets where you can find many historical monuments, such as the Saat Kula Tower and the Kanli Kula \
        Fortress. In addition, Herceg Novi offers many opportunities for active recreation and relaxation. \
        The city is known for its healing mud and spa centers, making it an ideal place for a wellness holiday.",
        imageUrl: "./images/herceg-novi.webp"
    },
    {
        destinationType: "Coastal Town",
        destinationName: "ULCINJ",
        descriptiveParagraph: "Ulcinj, located on the southern coast of Montenegro, is one of the oldest cities \
        on the Adriatic coast. Founded over 2,000 years ago, this city is famous for its rich history and \
        cultural heritage. In the Old Town of Ulcinj, surrounded by fortified walls, you can find many \
        historical monuments, such as the Balsica Fortress and the Pasha Mosque. Walking along these \
        streets, you can enjoy the unique architecture. Ulcinj is also known for its famous beaches, \
        including the famous Velika Plaža, which stretches for 13 kilometers and is one of the longest \
        beaches on the Adriatic.",
        imageUrl: "./images/ulcinj.webp"
    },
    {
        destinationType: "National Park",
        destinationName: "LOVĆEN",
        descriptiveParagraph: "Situated in the heart of Montenegro, Lovćen National Park is a symbol of the \
        country's national identity. Covering the central and highest part of the Lovćen mountain range, the \
        park offers visitors unique natural and cultural attractions. Here, you can enjoy breathtaking views \
        from the top of the mountain, visit the Mausoleum of Petar II Petrović-Njegoš, and explore numerous \
        hiking and cycling trails. Lovcen is also known for its rich biodiversity and historical heritage, \
        making it an ideal destination for those who want to explore both nature and history.",
        imageUrl: "./images/lovcen.webp"
    },
    {
        destinationType: "National Park",
        destinationName: "LAKE SKADAR",
        descriptiveParagraph: "Situated on the border between Montenegro and Albania, Lake Skadar National Park \
        is the largest freshwater lake in the Balkans and one of the most important nature reserves in Europe. \
        The park is famous for its rich biodiversity, including over 280 species of birds. Picturesque fishing \
        villages, island monasteries and clean beaches can be found along the lake's shores. The park offers a \
        variety of outdoor activities, including kayaking, hiking and bird watching. Lake Skadar is an ideal \
        place for those who want to enjoy the beauty of nature.",
        imageUrl: "./images/skadar-lake.webp"
    },
    {
        destinationType: "National Park",
        destinationName: "DURMITOR",
        descriptiveParagraph: "Situated in north-west Montenegro, Durmitor National Park is one of the most \
        impressive nature reserves in Europe. This UNESCO World Heritage Site is famous for its majestic mountain \
        peaks, deep canyons and crystal clear glacial lakes. One of the main attractions is the Tara River Canyon, \
        which is the deepest in Europe. The park offers a variety of outdoor activities, including hiking, \
        mountaineering, rafting and skiing. Durmitor is also known for its rich biodiversity, including \
        rare and endemic plant and animal species, luring nature lovers and adventurers.",
        imageUrl: "./images/durmitor.webp"
    },
    {
        destinationType: "National Park",
        destinationName: "BIOGRADSKA GORA",
        descriptiveParagraph: "Biogradska Gora National Park, located in central Montenegro, is one of the last \
        three remaining primeval forests in Europe. This park, covering an area of about 5,650 hectares, is famous \
        for its dense forests, and glacial lakes. Biogradsko Lake, located in the center of the park, is its \
        main attraction and attracts tourists with its crystal clear water and picturesque surroundings. For \
        lovers of nature and active recreation, it offers many rare species of plants and animals. A visit \
        to the Biogradska Gora National Park will take you to a beautiful place of peace and quiet.",
        imageUrl: "./images/biogradska-gora.webp"
    },
    {
        destinationType: "National Park",
        destinationName: "PROKLETIJE",
        descriptiveParagraph: "Situated in the south-east of Montenegro, Prokletije National Park is one of the \
        wildest and most picturesque corners of Europe. Known for its jagged peaks, deep valleys and glacial \
        lakes, the park offers unique opportunities for outdoor enthusiasts, including hiking, mountaineering \
        and wildlife watching. The park attracts tourists with its rich biodiversity, untouched nature and \
        breathtaking views, making it an ideal destination for those seeking adventure and wanting to immerse \
        themselves in an atmosphere of tranquility and solitude.",
        imageUrl: "./images/prokletije.webp"
    }
];

function createDestinationCard(destinations) {
	document.querySelector("#destinationsContainer").innerHTML = "";
	destinations.forEach(destination => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
        let img = document.createElement("img");
		let description = document.createElement("p");

		name.textContent = destination.destinationName;
        img.setAttribute("src", destination.imageUrl);
		img.setAttribute("alt", destination.destinationName);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", 767);
		description.textContent = destination.descriptiveParagraph;

		card.appendChild(name);
        card.appendChild(img);
		card.appendChild(description);

		document.querySelector("#destinationsContainer").appendChild(card);
	});
}

const townsbtn = document.querySelector("#destinationBtnTowns");
townsbtn.addEventListener("click", () => {
	document.querySelector("#destinationsHeading2").innerHTML = "Coastal Towns";
	createDestinationCard(destinations.filter(destination => destination.destinationType.includes("Coastal Town")));
});

const parksbtn = document.querySelector("#destinationBtnParks");
parksbtn.addEventListener("click", () => {
	document.querySelector("#destinationsHeading2").innerHTML = "National Parks";
	createDestinationCard(destinations.filter(destination => destination.destinationType.includes("National Park")));
});
    




