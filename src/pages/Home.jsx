import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-wrap justify-between gap-[20px]">
      {loading ? (<h1 className="text-center">Loading...</h1>) : ( data.length > 0 && data.map((value, index) => (
          <Card key={index} attributes={value.attributes} /> ))
      )}
    </div>
  );
}

export default Home;
