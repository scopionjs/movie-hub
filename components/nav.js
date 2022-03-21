import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
export default function Nav() {
  let bar = React.useRef();
  let sideBar = () => {
    // bar.current.style = " color:red;";
    // bar.current.classList.toggle("see");
    if (bar.current.classList.value == "see") {
      bar.current.style = " display:none;";
      bar.current.classList.toggle("see");
    } else {
      bar.current.style = "";
      bar.current.classList.toggle("see");
    }
    console.log(bar.current.classList);
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
      <div className="" style={{ display: "none" }} ref={bar}>
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
