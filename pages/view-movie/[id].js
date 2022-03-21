import useRouter from "next/router";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import axios from "axios";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export async function getServerSideProps(ctx) {
  let data = await axios.get(
    `https://imdb-api.com/en/API/YouTubeTrailer/k_s7yib37b/${ctx.params.id}`
  );
  return {
    props: {
      data: data.data,
    },
  };
}
export default function ViewMovie({ data }) {
  let url = `https://www.youtube.com/embed/${data.videoId}`;
  let back = () => {
    useRouter.push("/#");
  };
  return (
    <div>
      <Nav />
      <div style={{ height: "100vh" }} className="view-video">
        <section>
          <button onClick={back}>
            <ArrowBackIosIcon />
          </button>
          <h1>{data.title}</h1>
          <p>
            released in: <span>{data.year}</span>{" "}
          </p>
        </section>
        <iframe src={url} width="98%" height="85%"></iframe>
      </div>
      <Footer />
    </div>
  );
}
