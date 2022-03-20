import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <div className="left">
            <h1>movie-</h1>{" "}
          </div>
          <div className="center">
            <div>
              <button>
                {" "}
                <SearchIcon />{" "}
              </button>
              <input type="text" />
            </div>
          </div>
          <div className="right">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Link href="/">
              <a>
                <HomeIcon />
              </a>
            </Link>
            <Link href="/">
              <a>movies</a>
            </Link>
            <Link href="/">
              <a>shows</a>
            </Link>
            <Link href="/">
              <a>about us</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
