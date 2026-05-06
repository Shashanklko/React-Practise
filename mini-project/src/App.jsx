import Card from "./component/Card.jsx";
import { useEffect, useState } from "react";

function App(){
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('/job.json'); 
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchdata(); 
  }, []);

  return (
    <div className='parent'>
      {jobs.map((job, index) => (
        <Card key={index} data={job} />
      ))}
    </div>
  );
}

export default App;