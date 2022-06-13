import React from 'react'
import "../styles/Cards.css";
import packageImage from "../assets/LTS Technical Test Search Results Image.png";
export const Card = ({pckg}) => {
  return (
    <div className="card">
      <p className="name"> {pckg.name} </p>
      <figure className="card_image">
        <img src={packageImage} alt="package description" loading="lazy"/>
      </figure>
      <div className="description">
        <p> <b> Only {pckg.price.value} {pckg.price.unit} </b> </p>
        <p> {pckg.description} </p>
      </div>
    </div>
  );
}
