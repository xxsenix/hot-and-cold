import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul className="clearfix">
          <li>
            <a
              href="#newgame"
              className="newgame"
              onClick={() => props.onRestartGame()}
            >
              + New Game
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="title">HOT or COLD</h1>
    </header>
  );
}
