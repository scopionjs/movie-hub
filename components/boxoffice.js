import Image from "next/image";
export default function BoxOffice({ data }) {
  return (
    <>
      <div className="box-office">
        <div>
          {data.items.map((movie, index) => (
            <div key={index}>
              <div>
                <Image alt={movie.title} src={movie.image} layout="fill" />
              </div>
              <section>
                <h4>{movie.title}</h4>
                <p>
                  gross: <span>{movie.gross}</span>
                </p>
                <small>{movie.weeks} weeks</small>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
