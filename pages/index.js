import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React from "react";

import Nav from "../components/nav";
import Intro from "../components/intro";
import BoxOffice from "../components/boxoffice";
import Footer from "../components/footer";
import Trends from "../components/trends";

export async function getStaticProps() {
  //MostPopularMovies
  let data = await axios.get(
    "https://imdb-api.com/en/API/MostPopularMovies/k_s7yib37b"
  );
  //BoxOffice
  let data1 = await axios.get(
    "https://imdb-api.com/en/API/BoxOffice/k_s7yib37b"
  );

  return {
    props: {
      data: data.data,
      data1: data1.data,
    },
    revalidate: 120,
  };
}

export default function Home({ data, data1 }) {
  let info = {
    items: [
      {
        id: "tt1877830",
        rank: "1",
        rankUpDown: "0",
        title: "The Batman",
        fullTitle: "The Batman (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Matt Reeves (dir.), Robert Pattinson, Zoë Kravitz",
        imDbRating: "8.4",
        imDbRatingCount: "247929",
      },
      {
        id: "tt2463208",
        rank: "2",
        rankUpDown: "+33",
        title: "The Adam Project",
        fullTitle: "The Adam Project (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Shawn Levy (dir.), Ryan Reynolds, Walker Scobell",
        imDbRating: "6.8",
        imDbRatingCount: "67942",
      },
      {
        id: "tt13403046",
        rank: "3",
        rankUpDown: "+9",
        title: "Fresh",
        fullTitle: "Fresh (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTgxMGQ2ZDctYWY4Yy00YTI4LWIxMmYtOWViMGI5ZDIwMmFiXkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Mimi Cave (dir.), Daisy Edgar-Jones, Sebastian Stan",
        imDbRating: "6.7",
        imDbRatingCount: "14596",
      },
      {
        id: "tt3581652",
        rank: "4",
        rankUpDown: "0",
        title: "West Side Story",
        fullTitle: "West Side Story (2021)",
        year: "2021",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Steven Spielberg (dir.), Ansel Elgort, Rachel Zegler",
        imDbRating: "7.4",
        imDbRatingCount: "52264",
      },
      {
        id: "tt8097030",
        rank: "5",
        rankUpDown: "+59",
        title: "Turning Red",
        fullTitle: "Turning Red (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjY0MGEzZmQtZWMxNi00MWVhLWI4NWEtYjQ0MDkyYTJhMDU0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Domee Shi (dir.), Rosalie Chiang, Sandra Oh",
        imDbRating: "7.1",
        imDbRatingCount: "35914",
      },
      {
        id: "tt10872600",
        rank: "6",
        rankUpDown: "+1",
        title: "Spider-Man: No Way Home",
        fullTitle: "Spider-Man: No Way Home (2021)",
        year: "2021",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Jon Watts (dir.), Tom Holland, Zendaya",
        imDbRating: "8.6",
        imDbRatingCount: "529044",
      },
      {
        id: "tt2180339",
        rank: "7",
        rankUpDown: "+116",
        title: "Deep Water",
        fullTitle: "Deep Water (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTE1M2NjNDgtYjQ2Ny00YTMzLWJiYWQtMTdmM2Q2YjA1MDg1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Adrian Lyne (dir.), Ben Affleck, Ana de Armas",
        imDbRating: "5.5",
        imDbRatingCount: "2452",
      },
      {
        id: "tt14817272",
        rank: "8",
        rankUpDown: "+9",
        title: "The Weekend Away",
        fullTitle: "The Weekend Away (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmYzNTBiZTAtNmJjNi00MTcyLThlZGMtNDA5Y2RkNjM3ODAzXkEyXkFqcGdeQXVyMzg3OTQ5MjU@._V1_UY176_CR6,0,128,176_AL_.jpg",
        crew: "Kim Farrant (dir.), Leighton Meester, Christina Wolfe",
        imDbRating: "5.6",
        imDbRatingCount: "13443",
      },
      {
        id: "tt6856242",
        rank: "9",
        rankUpDown: "-7",
        title: "The King's Man",
        fullTitle: "The King's Man (2021)",
        year: "2021",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Matthew Vaughn (dir.), Ralph Fiennes, Gemma Arterton",
        imDbRating: "6.3",
        imDbRatingCount: "96358",
      },
      {
        id: "tt12593682",
        rank: "10",
        rankUpDown: "-7",
        title: "Bullet Train",
        fullTitle: "Bullet Train (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmZkMGJlODktNzMzMC00MmY2LTkzNDgtMjUwOWFiNjFjZGIwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "David Leitch (dir.), Zazie Beetz, Brad Pitt",
        imDbRating: "",
        imDbRatingCount: "0",
      },
      {
        id: "tt0468569",
        rank: "11",
        rankUpDown: "+13",
        title: "The Dark Knight",
        fullTitle: "The Dark Knight (2008)",
        year: "2008",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        imDbRating: "9.1",
        imDbRatingCount: "2521950",
      },
      {
        id: "tt11245972",
        rank: "12",
        rankUpDown: "+4",
        title: "Scream",
        fullTitle: "Scream (2022)",
        year: "2022",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjExYTcwYmYtMWY2Zi00MGJlLTk3YjUtZTU1Zjg4MDc0Y2FjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Matt Bettinelli-Olpin (dir.), Neve Campbell, Courteney Cox",
        imDbRating: "6.5",
        imDbRatingCount: "70622",
      },
    ],
  };
  return (
    <div>
      <Nav />
      <Intro />

      <div className="title1">
        <h2>trending movies</h2>
        <div></div>
      </div>
      <Trends data={data} />
      <div className="title1">
        <h2>box office</h2>
        <div></div>
      </div>
      <BoxOffice data={data1} />
      <Footer />
    </div>
  );
}
