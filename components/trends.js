import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useRouter from "next/router";
export default function Trends({ data }) {
  let ViewMovie = (e) => {
    let route =
      e.target.id.length > 1 ? `/view-movie/${e.target.id}` : "/#trends";
    route == "/"
      ? (e.target.value = "try again")
      : (e.target.value = "loading..");
    useRouter.push(route);
  };
  return (
    <>
      <div className="trends" id="trends">
        {data.items.map((data, index) => (
          <div key={index}>
            <div>
              <Image alt={data.title} src={data.image} layout="fill" />
            </div>
            <section>
              <h3>{data.title}</h3>
              <div>
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                <StarIcon />
              </div>
              <p>{data.year}</p>
              <button id={data.id} onClick={ViewMovie}>
                <VisibilityIcon />
                <p>view</p>
              </button>
            </section>
          </div>
        ))}
      </div>
      ;
    </>
  );
}
