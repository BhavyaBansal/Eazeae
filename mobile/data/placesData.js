import Category from "../models/category";
import Place from "../models/place";

export const CATEGORIES = [
  new Category(
    "c5",
    "All",
    "https://cdn-icons-png.flaticon.com/128/4784/4784185.png"
  ),
  new Category(
    "c1",
    "Natural",
    "https://cdn-icons-png.flaticon.com/128/2795/2795585.png"
  ),
  new Category(
    "c2",
    "Cultural",
    "https://cdn-icons-png.flaticon.com/128/82/82241.png"
  ),
  new Category(
    "c3",
    "Adventure",
    "https://cdn-icons-png.flaticon.com/128/1706/1706709.png"
  ),
  new Category(
    "c4",
    "Events",
    "https://cdn-icons-png.flaticon.com/128/2680/2680341.png"
  ),
];

export const PLACES = [
  // Natural
  new Place(
    "p1",
    "Okhla Bird Sanctuary",
    ["c1", "c5"],
    "07:00 am",
    "07:30 pm",
    "India",
    "Uttar Pradesh",
    "Noida",
    [
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/12/17/Pictures/especially-government-sanctuary-floodplain-sanctuary-considered-migratory_3ee2da62-01e2-11e9-b709-b8f5f1e83cec.jpg",
      "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11658832683534.jpg",
      "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-66135902/66135902.jpg",
    ],
    {
      Adult: "INR 30",
      Child: "INR 30",
      Foreigner: "INR 350",
    },
    "28035'56.3",
    "77018'56.6",
    "The Okhla Bird Sanctuary, officially known as the Shaheed Chander Azad Sanctuary, is a popular destination for bird lovers in Delhi. The sanctuary is home to around 300 different species of birds, including those found in thorny scrub, grassland, and wetland habitats",
    [
      "Two critically endangered (CR) species (white-rumped vulture and Indian vulture)",
      "Nine vulnerable (VU) species(Baikal teal, Baer’s pochard, sarus crane, sociable lapwing, Indian skimmer, Pallas’s fish eagle, lesser adjutant, bristled grassbird and Finn’s weaver)",
      "Seven near threatened (NT) species (ferruginous pochard, black-bellied tern, grey-headed fish eagle, erratically east to West Bengal and south to Kerala and Sri Lanka.",
    ],
    [
      {
        name: "Simran Hooda",
        image:
          "https://res.cloudinary.com/purnesh/image/upload/w_240,f_auto,q_auto:eco,c_limit/simranhooda2_profile_1612438846721.jpg",
        review:
          "It is a very calm place where you can listen to birds sound, see nature, do long walks and enjoy your day away from the city life",
      },
      {
        name: "Sakshi Garg",
        image:
          "https://res.cloudinary.com/purnesh/image/upload/w_240,f_auto,q_auto:eco,c_limit/67sakshigarg_profile_1614190826498.jpg",
        review: "It’s a calm and a pretty place to visit",
      },
    ],
    []
  ),
  new Place(
    "p2",
    "Periyar National Park",
    ["c1", "c5"],
    "06:00 am",
    "07:30 pm",
    "India",
    "Kerala",
    "Idukki",
    [
      "https://toim.b-cdn.net/pictures/travel_guide/attractions/thmb/periyar-194.jpeg?370x248",
      "https://media.istockphoto.com/id/1219933026/sv/foto/bambuflotte-i-periayar-wildlife-sanctuary-periyar-kerala-indien.jpg?s=612x612&w=0&k=20&c=hEpvvOH_8hYx4p5eJQtCkRnP2pJaCIT62HU6n3SI9yc=",
      "https://www.tripsavvy.com/thmb/ZkH7jhbrliVj7ZsuOMcmOvgs_yY=/2157x1389/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-172881080-241fac55f98040a58a4866b482715169.jpg",
      "https://ihplb.b-cdn.net/wp-content/uploads/2017/04/Boating-in-Periyar-Lake.jpg",
    ],
    {
      Adult: "INR 45",
      Child: "INR 15",
      Foreigner: "INR 500",
    },
    "9.4622°",
    "77.2368",
    "Located high in the south Western Ghats in Pandalam and Cardamom Hills, Periyar National Park is one of the famous national parks of South India. And is spread over an area of about 777 sq km.On the Periyar Wildlife Sanctuary tour, witness Bengal tigers and different species of reptiles, birds, and butterflies. Also, be a part of wildlife adventure activities like rafting and jungle safari, which attract thousands of wildlife lovers worldwide.",
    [
      "There are 45 species of reptiles - 30 snakes, 13 lizards, and two turtles. Snakes include the king cobra, Malabar pit viper, and striped coral snake.",
      "Amphibians in the park include caecilians, frogs, and toads. Species include the Malabar gliding frog, Asian toad, fungoid frog, and bicolored frog.",
      "About 40 species of fish are found in the local lakes and rivers. These include the Periyar trout, Periyar latia, Periyar barb, channa barb, and Travancore loach.",
    ],
    [
      {
        name: "happyson2005",
        image:
          "https://image3.mouthshut.com/images/imagesu/l/happyson2005.png?a=6417",
        review:
          "Had a lovely time hiking and boating.I booked a half day hike and bamboo rafting organized by the Tribal Heritage Office at the Periyar Tiger Reserve. Its a 5 km hike, followed by breakfast break of sandwiches and fruits, bamboo boating for 30 minutes, and a return 5 km walk.",
      },
      {
        name: "ashaj",
        image: "https://image3.mouthshut.com/images/imagesu/m/SRNAIR.jpg",
        review:
          "I read a lovely review about the Periyar Wildlife Sanctuary by one of the mouthshut members  and I was wondering if there was another place called Periyar wild life Sanctuary that I had been  to . Seriously the only wild life I saw there were  2 elephants and I hate to say it but they were both temple elephants, so that doesnt count as wildlife, I guess.",
      },
    ],
    []
  ),
  new Place(
    "p3",
    "Ranthambore National Park",
    ["c1", "c5"],
    "07:00 am",
    "05:30 pm",
    "India",
    "Jaipur",
    "Sawai Madhopur",
    [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/96/0c/1d.jpg",
      "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/t2zfl63gyeb8yrgmqsp1jhysom00_shutterstock_1246346662-min.jpg",
      "https://www.rajasthantourplanner.com/images/Canter-Safari-Ranthambore.jpg",
    ],
    {
      Adult: "INR 1300",
      Child: "INR 1300",
      Foreigner: "INR 2700",
    },
    "26.0173",
    "76.5026",
    "Ranthambore National Park is a vast wildlife reserve near the town of Sawai Madhopur in Rajasthan, northern India. It is a former royal hunting ground and home to tigers, leopards and marsh crocodiles. Its landmarks include the imposing 10th-century Ranthambore Fort, on a hilltop, and the Ganesh Mandir temple. Also in the park, Padam Talao Lake is known for its abundance of water lilies.",
    [
      "Go on a tiger's trail, Hike up to Ranthambore Fort, Jungle Safari in Ranthambore National Park",
      "Breathe Easy In Kachida Valley.",
      "Hot Air Balloonin.",
      "Jeep Safari In The Jungles",
    ],
    [
      {
        name: "colin h",
        image:
          "https://image3.mouthshut.com/images/imagesu/l/happyson2005.png?a=6417",
        review:
          "For anyone who has been on an African safari then Ranthambore is likely to be a disappointment. It is not an extensive reserve and 2 hour early morning drives seem to be the tourist norm (and the best chance of spotting a tiger - which is the main attraction).",
      },
      {
        name: "ashaj",
        image: "https://image3.mouthshut.com/images/imagesu/m/SRNAIR.jpg",
        review:
          "Very GoodOriginal Text It is nearly 2 hours' drive from Jaipur. The area here is vast. The square is nearly 370 kilometers. There are everything in the forest, lakes, grasslands, bushes and marshes. There is no road, drive in a 4-driving off-road vehicle, mainly looking for tigers, slowly watching other animals. Very awkward, be prepared.",
      },
    ],
    []
  ),
  // Culture
  new Place(
    "p4",
    "Red Fort",
    ["c2", "c5"],
    "09:30 am",
    "04:30 pm",
    "India",
    "Delhi",
    "Delhi",
    [
      "https://i.pinimg.com/originals/10/32/71/103271b0baeb51ae662a315d922f6995.png",
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/8/13/w1200X800/Red_fort.jpg",
      "https://www.ephotozine.com/resize/2021/17/xlrg/48183_1619509760.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw==",
      "https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?s=612x612&w=0&k=20&c=2yX0f74BE6rQOFXhinM4fxy7U0J7uL1AeuJgFKwSeMg=",
      "https://assets-news.housing.com/news/wp-content/uploads/2021/07/28115245/Red-Fort-All-you-want-to-know-about-Delhis-iconic-Lal-Kila-shutterstock_534073381.jpg",
    ],
    {
      Adult: "INR 35",
      Child: "INR 35",
      Foreigner: "INR 550",
    },
    "28.656473",
    "77.242943",
    "The Red Fort or Lal Qila is a historic fort in the Old Delhi neighbourhood of Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12ᵗʰ May 1638, when he decided to shift his capital from Agra to Delhi.",
    [
      "Lahori Gate, the main entrance to the fort",
      "Chatta Chowk, a long passageway with a bazaar",
      "Mumtaz Mahal, a palace that houses Red Fort Archaeological Museum.",
      "Rang Mahal, a palace where the emperor`s wives and mistresses were housed",
      "Khas Mahal, the apartment of the emperor",
      "Diwan-i-Aam, the public audience hall",
    ],
    [
      {
        name: "AMER",
        image:
          "https://profile.justdial.com/profileImg?i=AYPyOvtZdGn9Wm6Gq4EOGzPiHp9Ww54G8P0815kXgCU%3D",
        review:
          "The Red Fort is a historical fortification in the old Delhi area. Shah Jahan constructed it in the year 1639 as a result of a capital shift from Agra to Delhi. Used as the main residence of the emperors of the Mughal dynasty, this imposing piece of architecture derives its name from its impregnable red sandstone walls. In addition to accommodating the emperors and their households, it was the ceremonial and political centre of the Mughal state and the setting for events critically impacting the region.",
      },
      {
        name: "Dimple",
        image:
          "https://profile.justdial.com/profileImg?i=%2F9R4ioRjkPqY%2FlhEr7stHffr4HZII%2Fna68%2FOVEjoe0s%3D",
        review:
          "The Red Fort of Delhi is a historic fort in the city of Delhi in India. Red Fort is a very special place for tourists in India. Tourists coming from other countries also like to see this fort of India. Talking about this fort, let us tell you that till 1856, this fort was ruled by the emperors of the Mughal dynasty for almost 200 years. It is located in the center of Delhi along with it there are many museums",
      },
      {
        name: "Shan",
        image:
          "https://profile.justdial.com/profileImg?i=MxV68WHYwmhJ73t2YYevod%2FxHS4Q6MFPe2JadRqYYGI%3D",
        review:
          "The Red Fort or Lal Qila, a UNESCO World Heritage Site, is a historic fort in Old Delhi. We visited Red Fort at around 5.30 pm, when the area The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations in Delhi and attracts thousands of visitors every year. When we visited the fort in June`22 at around 5.30 pm, the area was crowded and best tour in my life ever",
      },
    ],
    []
  ),
  new Place(
    "p5",
    "Taj Mahal",
    ["c2", "c5"],
    "06:00 am",
    "07:00 pm",
    "India",
    "Uttar Pradesh",
    "Agra",
    [
      "https://www.weseektravel.com/wp-content/uploads/2020/07/TAJ-MAHAL-VIEW-POINT-LOCATIONS-2071-e1623488747298.jpg",
      "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg",
      "https://www.wonders-of-the-world.net/Taj-Mahal/images/Vignettes/Decouvrir/Exterieur-du-musee-du-Taj-Mahal-V.jpg",
      "https://assets.telegraphindia.com/telegraph/2022/May/1652356241_taj-mahal.jpg",
    ],
    {
      Adult: "INR 50",
      Child: "INR 50",
      Foreigner: "INR 550",
    },
    "27.1751",
    "78.0421",
    "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    [
      "It's an ivory-white marble mausoleum.",
      "Darwaza (primary entrance)",
      "Bageecha (gardens).",
      "Masjid (mosque)",
      "Rauza (main mausoleum)",
      "Naqqar Khana (rest house)",
    ],
    [
      {
        name: "Anju Maurya",
        image:
          "https://profile.justdial.com/profileImg?i=htvMAqr%2FBBzT0iOnQdtu54Q%2FqZjqEuRUzPZn8TjsGA4%3D",
        review:
          "Tajmahal a super duper place a beautiful monument of love and the atmosphere make this place more beautiful...",
      },
      {
        name: "Akash",
        image:
          "https://profile.justdial.com/profileImg?i=J4v6OLssqGHWqfvIvK87YmwfpYmVCKdlixxdkgV5hIk%3D",
        review:
          "Taj mahal is one of the most famous historical tourist site in India and u must have to visit it.",
      },
      {
        name: "Anisha",
        image:
          "https://profile.justdial.com/profileImg?i=htvMAqr%2FBBzT0iOnQdtu54Q%2FqZjqEuRUzPZn8TjsGA4%3D",
        review:
          "I want to share my wonderful experience about Taj Mahal in Agra.Last month I visited my friend's place in Agra.After reaching Agra, my heart could not wait to see the Palace of Love.It was like a dream come true.I never visited Taj Mahal before.We went to Taj Mahal the next day.It was an amzing experience.When I saw the Taj Mahal, I had to murmur, Oh my God! What a beautiful monument! There are four gates.There were flower gardens and water fountains.We did not hire a guide.My friend guided us.He told me",
      },
    ],
    []
  ),
  new Place(
    "p6",
    "National Gallery of Modern Art",
    ["c2", "c5"],
    "11:00 am",
    "06:30 pm",
    "India",
    "Delhi",
    "Shershah Road",
    [
      "https://colosseumrometickets.com/wp-content/uploads/2019/03/Tickets-for-National-Gallery-of-Modern-and-Contemporary-Art-3.jpg",
      "https://www.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2021/5/19/national-gallery-of-modern-art-1.jpg.transform/576x300/image.jpg",
      "https://images.indulgexpress.com/uploads/user/imagelibrary/2020/4/1/original/NationalGalleryofModernArtPhotoIANS.jpg",
      "https://www.tourmyindia.com/states/delhi/images/sulabh-international-museum-of-toilets1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Steel_tree_-_with_utensils.jpg/300px-Steel_tree_-_with_utensils.jpg",
    ],
    {
      Adult: "INR 20",
      Child: "INR 20",
      Foreigner: "INR 500",
    },
    "28.6102",
    "77.2344",
    "The National Gallery of Modern Art is the premier art gallery under Ministry of Culture, Government of India. The main museum at Jaipur House in New Delhi was established on 29 March 1954 by the Government of India, with subsequent branches at Mumbai and Bangalore. ",
    [],
    [
      {
        name: "Maneesh2700",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/86/8c/00/maneesh2700.jpg?w=100&h=-1&s=1",
        review:
          "The is undoubtedly a place where all art lovers should go. Especially we should our kids there to make them aware of our art heritage. Though I wish the collection was a bit more vast",
      },
      {
        name: "Madhulika L ",
        image: "https://www.tripadvisor.in/Profile/MadhulikaL4",
        review:
          "Hello Friends.At only Rs 20 per Indian adult (children up to 18 years of age can visit free) and Rs 300 per foreigner, this museum is a must-visit if you’re keen on modern art. The museum premises spread over several buildings that are part of Jaipur House, a palace initially built for the Maharaja of Jaipur, back in 1936. Some of the subsidiary buildings house administrative offices and so on, but the art is mainly in the New Wing, inaugurated in 2009. ",
      },
    ],
    []
  ),
  // Adventure park
  new Place(
    "p7",
    "Worlds of Wonder (WOW)",
    ["c3", "c5"],
    "11:30 pm",
    "08:00 pm",
    "India",
    "Uttar Pradesh",
    "Noida",
    [
      "https://www.drsdeals.in/wp-content/uploads/2022/04/banner4.jpg",
      "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/q7uxfqwzw6omq0n2b1i4xonva2um_1-Alabama-via-visitowa.com_.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/08/5a/33/26/worlds-of-wonder-water.jpg",
      "https://i0.wp.com/www.esri.com/about/newsroom/wp-content/uploads/files/2015/08/GettyImages-120229544-1024x677.jpg?resize=1024%2C677&ssl=1",
    ],
    {
      Adult: "INR 1399",
      Child: "INR 999",
      Foreigner: "INR 2000",
    },
    "28.679079",
    "77.069710",
    "Noida’s best fun destination, Worlds of Wonder, packs tons of fun to beat the heat. Experience thrilling rides at the theme park across Big Beat, Mega Disko, Rocking Roller and much more. Want to experience the thrill of water rides under the blistering sun? No sweat. We have you sorted with a splashtacular time, think Boomerango, Turbo Tunnel, RipTide and many more. If you want some racing fun, we have you covered here too.",
    ["Big Beat", "Mega Disko", "Rocking Roller", "Wave Pool"],
    [
      {
        name: "Paradise67598416021 S",
        image: "https://www.tripadvisor.in/Profile/Paradise67598416021",
        review:
          "Quality of services and more activity to be added also very less choices of the food . pathetic experience of my and my family we were visited month of September to enjoy but can't make it perfect.most of the ride was closed and not informed before we book.also them locker is not safe after paying of money for ticket, locker, costume,food . cleaning was zero.water added extra chlorine which is not good for health.",
      },
      {
        name: "Tarit1979 ",
        image: "https://www.tripadvisor.in/Profile/tarit1979",
        review:
          "The WOW is a very large water park. The parking is adequate and you can easily reach the ticket counter with the help of signage. The entry ticket is priced 1450/- for adults and 1000/- for kids. There is a long queue for changerooms and swimsuit rentals. So if you have swimming costume at home carry it along. Also remember to get waterproof covers for your mobiles so that you can pay through cashless at the snacks counters inside. The rides are really good though there is a wait time during weekends. Also the wave pool is excellent.",
      },
    ],
    []
  ),
  new Place(
    "p8",
    "F9-Go-Karting",
    ["c3", "c5"],
    "01:00 pm",
    "07:00 pm",
    "India",
    "Gurgaon",
    "Gurgaon",
    [
      "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/x0ilgv4xssh9o09v187uo1271xvq_Screenshot%202022-11-0ss3%20174802.png",
      "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/03re7698i4c4bwjj51uupi752bw2_Playaa%201t.jpeg",
      "https://yometro.com/images/places/f9-go-karting.jpg",
    ],
    {
      Adult: "INR 250",
      Child: "INR 250",
      Foreigner: "INR 500",
    },
    "28.6102",
    "77.2344",
    "Go Karting is also one of the most popular adventure sports in Delhi. The city has some amazing places to try it, but F-9 Go Karting is the best among the adventurous places in Delhi NCR to try this sport. ",
    [],
    [
      {
        name: "KESHAAV S",
        image: "https://www.tripadvisor.in/Profile/keshaavs",
        review:
          "great place to go and have a fun little time with friends and family and the the food is amazing and the staff is amazing",
      },
      {
        name: "namitajainisme ",
        image: "https://www.tripadvisor.in/Profile/namitajainisme",
        review:
          "Hosted my son's bday party, had a good time, the kids enjoyed the go kart. Would thank Mr Tyagi and the person serving us. A good place with children.",
      },
    ],
    []
  ),
  new Place(
    "p9",
    "Adventure Island",
    ["c3", "c5"],
    "11:00 pm",
    "07:00 pm",
    "India",
    "Delhi",
    "Rohini",
    [
      "https://ticketandtime.com/wp-content/uploads/2023/01/Aerial-panorama-view-of-Waterpark-with-30-exciting-Twisting-water-rides-and-attractions.webp",
      "https://travellerscribe.com/wp-content/uploads/2023/02/Adventure-Island-Rohini-Delhi-1.jpg",
      "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/5uuwhi4p0h95x350zawh58gsypl3_1585080666_WhatsApp_Image_2020-02-18_at_3.44.34_PM_%281%29_2.jpeg",
    ],
    {
      Adult: "INR 449",
      Child: "INR 449",
      Foreigner: "INR 1000",
    },
    "28.723787",
    "77.113548",
    "Adventure Island rohini is an amusement & theme park situated in Delhi. Adventure Island is loaded with multiple entertaining theme based fun rides. ",
    [],
    [
      {
        name: "Tanya_vyas",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-a/02/ef/b6/7d/tanya-vyas.jpg",
        review:
          "Adventure Island is good fun and a nice amusement park.. Rides are too good. But there are not so many rides. One thing is missing 'the water park ' attached with metro mall. U can also go for shopping connected with metro 'Rithala metro station' not so much costly.. What I love the most was the H20 zone, just an area were you get absolutely soaked! Running through tunnels and water sprinklers and loads of different water activities",
      },
      {
        name: "Arunabh ",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-l/02/e7/34/a9/arunabh.jpg",
        review:
          "Well this was 2nd time i was to visit this place. I and 2 of my friends went last Sunday. Its in Rithala a bit far if you live in the city. We went from Kalkaji, so we took Metro from Nehru place to Central Secretariat and then to Kashmiri gate and then all the way to Rithala. It nearly took us 1.15 mins to reach there",
      },
    ],
    []
  ),
  // Events
];
