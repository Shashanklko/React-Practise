import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', perception: "Service is seen as supporting people, solving problems, and making life easier for others." },
    { id: 2, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' , perception:"Some view service as a duty performed with honesty, discipline, and commitment, whether in work, community, or public roles."},
    { id: 3, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' , perception: "Service can also be perceived as giving time, effort, or skills without expecting personal gain, for the betterment of society."},
    { id: 3, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' , perception: "Service can also be perceived as giving time, effort, or skills without expecting personal gain, for the betterment of society."}
];

const App =() =>{
  return(
    <div>
    <Section1 images={images} />
    <Section2/>
    </div>
  )
}

export default App;