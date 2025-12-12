import React from 'react'
import hero  from "../assets/hero.png"

const Hero = () => {
  return (
     <section className="hero">
        <div>
           <h3>you can find </h3>
           <h2>all the delicious recipes</h2>
           <h3>from here.</h3>
        </div>
        <img src={hero} alt="" />
     </section>
  );
}

export default Hero