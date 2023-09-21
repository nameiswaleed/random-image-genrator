import { useEffect, useState } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState(undefined);
  const [name, setName] = useState("");
  const [orientation, setOrientation] = useState("500x500");
  const genrateImage = async () => {
    const res = await axios.get(
      `https://source.unsplash.com/${orientation}?${name}`
    );

    setImage(res.request.responseURL);
  };

  useEffect(() => {
    genrateImage();
  }, [orientation]);
  return (
    <>
      <div>
        {image && <img src={image} className="image" alt="React logo" />}
      </div>
      <h1>Random Image Generator</h1>
      <p>Enter the name</p>
      <div className="card">
        <button onClick={() => setOrientation("300x500")}>Vertical</button>
        <button onClick={() => setOrientation("500x500")}>Square</button>
        <button onClick={() => setOrientation("500x300")}>Horizontal</button>
      </div>
      <div className="card">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button onClick={genrateImage}>Generate</button>
      </div>
    </>
  );
}

export default App;
