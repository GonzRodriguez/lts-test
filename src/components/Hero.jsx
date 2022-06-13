import "../styles/Hero.css";

export const Hero = () => {

  return (
    <section className="hero">
      <figure className="hero_banner"></figure>
      <form className="hero_form">
        <input name="location" placeholder="location" type="text" />
        <input name="departure" placeholder="departure airport" type="text" />
        <input name="arrival" placeholder="arrival airport " type="text" />
        <input name="Outbound" placeholder="departure date" type="date" />
        <input
          name="return"
          placeholder="departure date"
          type="date"
        />
        <input
          name="adult"
          placeholder="adult passenger"
          min="17"
          type="number"
        />
        <input
          name="child"
          placeholder="child passenger (0-16)"
          min="0"
          max="16"
          type="number"
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

