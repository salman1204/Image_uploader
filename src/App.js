import React, { useState } from "react";
import './App.css'

const App = () => {
  let [file, setFile] = useState([]);
  let [imgUrl, setImgUrl] = useState([]);

  const uploadMultipleFiles = (e) => {
    file = [];
    file = [...file,e.target.files];
    setFile (file);
    for (let i = 0; i < file[0].length; i++) {
      imgUrl = [...imgUrl,(URL.createObjectURL(file[0][i]))];
    }
    setImgUrl(imgUrl);

  };

  const deleteFiles = (e) => {
    e.preventDefault();
    imgUrl =[];
    setImgUrl(imgUrl)
  };


  return (
    <form>
      <div>
        <input type="file" onChange={uploadMultipleFiles} multiple />
      </div>
      <button type="button" onClick={deleteFiles}>Remove Image Preview</button>
      <div className="img-container">
        {(imgUrl || []).map((url) => (
          <img src={url} alt="..." />
        ))}  
      </div>
    </form>
  );
};

export default App;
