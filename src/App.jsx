import { useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=27896371-144bb8da6ad9a7d45c0287e02&q=${ref.current.value}&image_type=photo`;
    //APIを叩く（データフェッチング）
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
