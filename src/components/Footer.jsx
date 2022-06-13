import React from 'react'
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <p>Technical test for Liberty Travel System Limited</p>
      <p>
        Copyright {new Date().getFullYear()} - All rights reserved. &#169; {/* HTML tag for copyright symbol */}
      </p>
    </section>
  );
}
