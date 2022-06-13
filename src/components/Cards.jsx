import React from 'react'
import "../styles/Cards.css";
import {Card} from "./Card"

export const Cards = ({packages, isSearch}) => {
  return (
      <section id="cards" className="cards">
        <h1>{!isSearch ? "Welcome!" : "Search Results"}</h1>
        <div className="cards_grid">
          {packages?.map((pckg, i) => (
            <Card key={i} pckg={pckg} />
          ))}
        </div>
      </section>
  );
}
