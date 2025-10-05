const movies = [
  {
    title: "Sanam Teri Kasam",
    year: 2016,
    genre: "Romance",
    image:
      "https://a10.gaanacdn.com/gn_img/albums/qa4WEqWP1p/4WEk6zAMKP/size_l.jpg",
    desc: "A tragic love story of two individuals from different backgrounds.",
    trailer: "https://www.youtube.com/watch?v=R5u7KZUkxJQ",
  },
  {
    title: "Shiddat",
    year: 2021,
    genre: "Romance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQd7AhLzfTxOGlI7XGmUtc2-HMGaxwOgseQ&s",
    desc: "A passionate love story showing intensity and determination.",
    trailer: "https://www.youtube.com/watch?v=TWip2i8jRZo",
  },
  {
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy/Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4fmSgQAGxs3bO2CmioXuvzzs3WyamfuvhQ&s",
    desc: "Three friends journey through college life, comedy, and challenges.",
    trailer: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
  },
  {
    title: "12th Fail",
    year: 2023,
    genre: "Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMxf_SsfLRqnKwc2ubQlH8Ii6Ede0cvhBTw&s",
    desc: "Story about overcoming failures and achieving dreams.",
    trailer: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Bhaag Milkha Bhaag",
    year: 2013,
    genre: "Biographical/Sports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgiHie1s0QzwS8ZjLn4icxLtee594xS_Aog&s",
    desc: "Biography of Indian athlete Milkha Singh.",
    trailer: "https://www.youtube.com/watch?v=2rQPzA3rR8o",
  },
  {
    title: "Super 30",
    year: 2019,
    genre: "Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
    desc: "A teacher trains underprivileged students for IIT exams.",
    trailer: "https://www.youtube.com/watch?v=1vNshKqTR1Y",
  },
  {
    title: "Jo Jeeta Wohi Sikandar",
    year: 1992,
    genre: "Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW7R9tm7tzsM6JfeT0j5IGEZKt2briLhFrg&s",
    desc: "Teenage rivalry, love, and college life.",
    trailer: "https://www.youtube.com/watch?v=fnlG1xL7q6E",
  },
  {
    title: "Chak De! India",
    year: 2007,
    genre: "Sports/Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk8-HMDNDVut6VeyTKatYufQR3CBqhrDX0Q&s",
    desc: "Indian women's hockey team fights for victory.",
    trailer: "https://www.youtube.com/watch?v=2E6eKFT2fvw",
  },
  {
    title: "Hamari Adhuri Kahani",
    year: 2015,
    genre: "Romance/Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Hamari_Adhuri_Kahani_official_poster.jpg",
    desc: "A love story of separation and longing.",
    trailer: "https://www.youtube.com/watch?v=fYCGgFzNke4",
  },
  {
    title: "Aashiqui 2",
    year: 2013,
    genre: "Romance/Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsYA2ekLdC74mnwOMOjWgsoXxaJus66W3Pg&s",
    desc: "A tragic romance between two musicians.",
    trailer: "https://www.youtube.com/watch?v=NUo45IY1wkw",
  },
  {
    title: "Raanjhanaa",
    year: 2013,
    genre: "Romance/Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqeg86Ywcl0Kp3RGFwLWy3_oSeMNdLcYbLg&s",
    desc: "Unrequited love story set in India.",
    trailer: "https://www.youtube.com/watch?v=WEmHstfNP5A",
  },
  {
    title: "Devdas",
    year: 2002,
    genre: "Romance/Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIigZU0VAn2DXoGV1cTKKnGo_OIbBDM4rFQ&s",
    desc: "Classic love story with heartbreak.",
    trailer: "https://www.youtube.com/watch?v=lVnZBtyGdZg",
  },
  {
    title: "Sholay",
    year: 1975,
    genre: "Action/Drama",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:AN…CZFYycCyBNQNHrhbAa0cSXDPP22Kqea3aAOjBqSIchQR8iP_0",
  },
  {
    title: "Andaz Apna Apna",
    year: 1994,
    genre: "Comedy",
    image:
      "	https://encrypted-tbn2.gstatic.com/images?q=tbn:AN…fPcY_aXH0TCe1amNPSTSfXvCdrXZJvGtP7gvFBgucNF5SDvLA",
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…VdR8jH7P1ojzhwEwPGuNEnX138VEW_rR-v1lc10wVzajodbEM",
  },
  {
    title: "Dil Chahta Hai",
    year: 2001,
    genre: "Drama",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Dil_Chahta_Hai.jpg",
  },
  {
    title: "Lagaan",
    year: 2001,
    genre: "Sports/Drama",
    image: "https://m.media-amazon.com/images/I/51HkzG3kQ-L._AC_.jpg",
  },
  {
    title: "Munna Bhai M.B.B.S.",
    year: 2003,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51s3fJw6UHL._AC_.jpg",
  },
  {
    title: "Black",
    year: 2005,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51f1ny3DSJL._AC_.jpg",
  },
  {
    title: "Rang De Basanti",
    year: 2006,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51WIBdZnN3L._AC_.jpg",
  },
  {
    title: "Chak De! India",
    year: 2007,
    genre: "Sports/Drama",
    image: "https://m.media-amazon.com/images/I/51vO9LOPpYL._AC_.jpg",
  },
  {
    title: "Jab We Met",
    year: 2007,
    genre: "Romance/Comedy",
    image: "https://m.media-amazon.com/images/I/51fIQGEpWQL._AC_.jpg",
  },
  {
    title: "Taare Zameen Par",
    year: 2007,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51XGFZjGh0L._AC_.jpg",
  },
  {
    title: "A Wednesday!",
    year: 2008,
    genre: "Thriller",
    image: "https://m.media-amazon.com/images/I/51qk4d2FuFL._AC_.jpg",
  },
  {
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51IEd3u5CJL._AC_.jpg",
  },
  {
    title: "Udaan",
    year: 2010,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51q6C6lL5yL._AC_.jpg",
  },
  {
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51o21cBlzkL._AC_.jpg",
  },
  {
    title: "Gangs of Wasseypur",
    year: 2012,
    genre: "Crime/Drama",
    image: "https://m.media-amazon.com/images/I/51ni0MTMLWL._AC_.jpg",
  },
  {
    title: "Barfi!",
    year: 2012,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51pKgmHg8QL._AC_.jpg",
  },
  {
    title: "Paan Singh Tomar",
    year: 2012,
    genre: "Biography/Drama",
    image: "https://m.media-amazon.com/images/I/51X0lEwL8ML._AC_.jpg",
  },
  {
    title: "Queen",
    year: 2013,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51GkT93xK2L._AC_.jpg",
  },
  {
    title: "PK",
    year: 2014,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51E7iF7ENtL._AC_.jpg",
  },
  {
    title: "Piku",
    year: 2015,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51ZMxvOmHUL._AC_.jpg",
  },
  {
    title: "Bajrangi Bhaijaan",
    year: 2015,
    genre: "Action/Drama",
    image: "https://m.media-amazon.com/images/I/51pi4k7VZTL._AC_.jpg",
  },
  {
    title: "Dangal",
    year: 2016,
    genre: "Sports/Drama",
    image: "https://m.media-amazon.com/images/I/51T9SKfCrPL._AC_.jpg",
  },
  {
    title: "Airlift",
    year: 2016,
    genre: "Thriller/Drama",
    image: "https://m.media-amazon.com/images/I/51S3Gyh5lfL._AC_.jpg",
  },
  {
    title: "Newton",
    year: 2017,
    genre: "Comedy/Drama",
    image: "https://m.media-amazon.com/images/I/51hMRA1Ki1L._AC_.jpg",
  },
  {
    title: "Tumbbad",
    year: 2018,
    genre: "Horror/Drama",
    image: "https://m.media-amazon.com/images/I/51c+UlhK3QL._AC_.jpg",
  },
  {
    title: "Andhadhun",
    year: 2018,
    genre: "Thriller",
    image: "https://m.media-amazon.com/images/I/51eBNPSahbL._AC_.jpg",
  },
  {
    title: "Uri: The Surgical Strike",
    year: 2019,
    genre: "Action/Drama",
    image: "https://m.media-amazon.com/images/I/51M1fH5X+5L._AC_.jpg",
  },
  {
    title: "Gully Boy",
    year: 2019,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51HTq8tfr2L._AC_.jpg",
  },
  {
    title: "Thappad",
    year: 2020,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51X0q5C2VHL._AC_.jpg",
  },
  {
    title: "Sardar Udham",
    year: 2021,
    genre: "Biography/Drama",
    image: "https://m.media-amazon.com/images/I/51+8E0ZtDCL._AC_.jpg",
  },
  {
    title: "Shershaah",
    year: 2021,
    genre: "Action/Drama",
    image: "https://m.media-amazon.com/images/I/51kAq+guIOL._AC_.jpg",
  },
  {
    title: "Jai Bhim",
    year: 2021,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51c7suwCyJL._AC_.jpg",
  },
  {
    title: "12th Fail",
    year: 2023,
    genre: "Drama",
    image: "https://m.media-amazon.com/images/I/51qbOJGZJML._AC_.jpg",
  },
  {
    title: "Rocky Aur Rani Kii Prem Kahaani",
    year: 2023,
    genre: "Romance/Drama",
    image: "https://m.media-amazon.com/images/I/51yKbkfH+nL._AC_.jpg",
  },
  {
    title: "Satyaprem Ki Katha",
    year: 2023,
    genre: "Romance/Drama",
    image: "https://m.media-amazon.com/images/I/51tsR29R8UL._AC_.jpg",
  },
  {
    title: "Jawan",
    year: 2023,
    genre: "Action/Drama",
    image: "https://m.media-amazon.com/images/I/51z5bPjYgCL._AC_.jpg",
  },
  {
    title: "Animal",
    year: 2023,
    genre: "Action/Drama",
    image: "https://m.media-amazon.com/images/I/51tMRh5tXxL._AC_.jpg",
  },
  {
    title: "Pathaan",
    year: 2023,
    genre: "Action/Thriller",
    image: "https://m.media-amazon.com/images/I/51+Vd0qXuwL._AC_.jpg",
  },
  {
    title: "Laapataa Ladies",
    year: 2023,
    genre: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGI5NzVmND…NjXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg",
  },
];

const list = document.getElementById("movieList");

function displayMovies(movieArray) {
  list.innerHTML = "";
  movieArray.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("movie-card");
    li.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <span>📅 Year: ${movie.year}</span>
      <span>🎭 Genre: ${movie.genre}</span>
    `;
    li.addEventListener("click", () => openModal(movie));
    list.appendChild(li);
  });
}

// Modal
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalDesc = document.getElementById("modalDesc");
const modalTrailer = document.getElementById("modalTrailer");

function openModal(movie) {
  modalImage.src = movie.image;
  modalTitle.textContent = movie.title;
  modalYear.textContent = "📅 Year: " + movie.year;
  modalGenre.textContent = "🎭 Genre: " + movie.genre;
  modalDesc.textContent = movie.desc;
  modalTrailer.href = movie.trailer;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Live search
document.getElementById("searchInput").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(input)
  );
  displayMovies(filtered);
});

function resetSearch() {
  document.getElementById("searchInput").value = "";
  displayMovies(movies);
}

// Show all initially
displayMovies(movies);
