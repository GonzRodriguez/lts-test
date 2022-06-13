
import { useEffect, useState, useRef } from "react";
import './App.css';
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'
import { Footer } from "./components/Footer";


function App() {
  const [packages, setPackages] = useState([]);
  const [isSearch , setIsSearch] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const appRef = useRef(null);


  const inputHandler = async (inputText) => {
    const res = await fetchPackages()
    const filteredResult = res.filter((item) => {
      return (
        item.description.toLowerCase().includes(inputText) ||
        item.name.toLowerCase().includes(inputText) ||
        item.price.value.toString().includes(inputText)
      )
    })
    if(!!!inputText.length) return (setPackages(res), setIsSearch(false));
    setIsSearch(true)
    setPackages(filteredResult);
  }

  const fetchPackages = async () => {
    const res = await fetch("../../data.json");
    const data = await res.json();
    return data.data;
  };
  
  const toggleSticky = (location) => {
    if (location.y !== 0) {
      return setIsTop(true);
    }
    return setIsTop(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(appRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", handleScroll);
    const getPackages = async () =>{
      const res = await fetchPackages()
      setPackages(res);
    }
    getPackages();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" ref={appRef}>
      <Header
        inputHandler={inputHandler}
        isTop={isTop}
      />
      <Hero className="hero_margin_top" />
      <Cards isSearch={isSearch} packages={packages} />
      <Footer/>
    </div>
  );
}

export default App;


