import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
export default function Nav() {
  let bar = React.useRef();
  let sideBar = () => {
    // bar.current.style = " color:red;";

    if (bar.current.classList.value == "see") {
      bar.current.classList.toggle("see");
      bar.current.style =
        "display:none;transition-property: all;transition-duration: 3s";
    } else {
      bar.current.style = "transition-property: all;transition-duration: 3s";
      bar.current.classList.toggle("see");
    }
  };
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
          <div onClick={sideBar} className="right">
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
      <div
        className="side-bar"
        style={{ backgroundColor: "#1c374a" }}
        ref={bar}
      >
        <div>
          <Link href="/">
            <a>
              <HomeIcon /> Home
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
    </>
  );
}
