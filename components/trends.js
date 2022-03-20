import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function Trends({ data }) {
  return (
    <>
      <div className="trends">
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
              <button>
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
