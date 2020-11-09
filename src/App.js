import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [file, setFile] = useState([]);
  let [imgUrl, setImgUrl] = useState([]);

  const uploadMultipleFiles = (e) => {
    file = [];
    file = [...file, e.target.files];
    setFile(file);
    for (let i = 0; i < file[0].length; i++) {
      imgUrl = [...imgUrl, URL.createObjectURL(file[0][i])];
    }
    setImgUrl(imgUrl);
  };

  const deleteFiles = (e) => {
    e.preventDefault();
    imgUrl = [];
    setImgUrl(imgUrl);
  };

  const deleteSingleImg = (e) => {
    e.preventDefault();
    imgUrl = imgUrl.filter((item) => item !== e.target.id);
    setImgUrl(imgUrl);
  };

  let length = imgUrl.length;

  return (
    <form>

      <div >
        <h1>Upload Some Images From Your Local Drive</h1>
        <input style={{display:"block", margin:"auto",textAlign:"center"}} type="file" onChange={uploadMultipleFiles} multiple /> <br/>
        {length > 0 && <button style={{ position: "fixed"}} type="button" onClick={deleteFiles}>Remove All Image </button> } <br/> <br/> 
      </div>

      <div className="img-container">
        {(imgUrl || []).map((url) => (
          <div className="single-img">
            <img src={url} alt="..." /> <br />
            <button id={url} onClick={deleteSingleImg}>Delete</button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default App;
