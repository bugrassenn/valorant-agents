import React from "react";
import { Link } from "react-router-dom";

function Header({ agentsFilter }) {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-3 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="col-lg-6 search-div text-center">
          <input
            className="agent-search"
            type="text"
            placeholder="Enter Name To Search Agent"
            onChange={(e) => agentsFilter(e.target.value.toLowerCase())}
          ></input>
        </div>
        <div className="col-lg-3">
          <div className="link-div">
            <Link to="/" className="Home-Link">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
