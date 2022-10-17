import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  // Unsplash API
  const count = 30;
  const apiKey = "Jq_6eVktAwO3_Ly_PSEcliWT4uM95lELdLJ18GC5AqY";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  const unsplashData = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    unsplashData();
  }, []);

  return (
    <>
      {!data ? (
        <h1>Loading....</h1>
      ) : (
        <div className="image-container">
          <h1>UNSPLASH INFINITE SCROLL</h1>
          {data.map((data) => {
            return <img src={data.urls.regular} alt="" />;
          })}
        </div>
      )}
    </>
  );
};

export default App;
