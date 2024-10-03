import React, { useEffect, useState } from "react";
import Images from "../components/Images";

function Albom() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        setData(data); 
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl w-full mx-auto flex flex-wrap justify-center">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.length > 0 && data.map((value, index) => (
          <Images key={index} title={value.title} url={value.url} thumbnailUrl={value.thumbnailUrl}
          />
        ))
      )}
    </div>
  );
}

export default Albom;
