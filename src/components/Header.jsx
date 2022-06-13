import React, { useState} from "react";
import '../styles/Header.css'
import Logo from "../assets/LTS technical Test Logo.png";
import Magnifier from "../assets/LTS Technical Test Search Icon.png";

const links = [
  { href: './home', title: 'Home'},
  { href: './about', title: 'About'},
  { href: './contact', title: 'Contact'},
]

export const Header = ({ inputHandler, isTop}) => {
  const [inputState, setInputState] = useState("");

  const onChangeHandler = (value) => {
    setInputState(value);
    inputHandler(value.toLowerCase());
  };

  return (
    <header
      className="header"
      style={isTop ? styles.fixedHeader : styles.relativeHeader}
    >
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      <div className="header_actions">
        {/* I decided to create simple h6 element instead of routing elements as it wasn't the propose if this assessment */}
        {links.map((link, index) => (
          <h6 key={index}>{link.title}</h6>
        ))}
        <div className="header_input">
          <input
            type="text"
            value={inputState}
            onChange={(e) => onChangeHandler(e.target.value)}
            placeholder="search..."
          />
          <img src={Magnifier} alt="magnifier" />
        </div>
      </div>
    </header>
  );
};

const styles = {
  fixedHeader: {
    position: "sticky",
    top: 0,
  },
  relativeHeader: {
    position: "relative",
  }
};