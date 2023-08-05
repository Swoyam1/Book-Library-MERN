import React from "react";
import "../css/style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              marginBottom: 50,
              color: "#333",
              textAlign: "center",
              fontFamily: "Scheherazade New",
              textShadow: "2px 2px 3px #b0b0b0",
            }}
          >
            A Book Library
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
