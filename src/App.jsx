import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  // Unsplash API
  const count = 30;
  const apiKey = "lKQuiUD_LGJe2qDH7Q43fDokTAM-lNxq6WXzEA_1JzM";
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
            return <img src={data.urls.regular} alt="" key={data.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default App;
