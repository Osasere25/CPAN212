import { useState } from "react";

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [displayImage, setDisplayImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [message, setMessage] = useState("");

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  const handleMultipleFileChange = (e) => {
    if (e.target.files.length > 0) {
    setMultipleFiles([...e.target.files]);
    } 
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // fetch functions -> save multiple [TODO]
  const handleSubmitMultipleFiles = async (e) => {
    e.preventDefault();
    if (multipleFiles.length === 0) {
      setMessage("Please select files before uploading.");
      return;
    }
  
    try {
      const formData = new FormData();
      multipleFiles.forEach((file) => formData.append("files", file)); 
  
      const response = await fetch(`http://localhost:8000/save/multiple`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
  
      setMessage("Files uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const filenames = await response.json();

      if (!response.ok) {
        throw new Error(filenames.message || "Failed to fetch images");
      }

      setMultipleFiles(
        filenames.map((name) => `http://localhost:8000/fetch/file/${name}`)
      );
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };
  // fetch functions -> fetch dog image [TODO]
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };
  // fetch functions -> save dog image [TODO]
  const uploadDogImage = async () => {
    if (!dogImage) return;
    try {
      const response = await fetch(dogImage);
      const blob = await response.blob();
      const file = new File([blob], "dog.jpg", { type: "image/jpeg" });
      const formData = new FormData();
      formData.append("file", file);
      await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });
      setMessage("Dog image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading dog image:", error);
    }
  };

  return (
    <div>
      <p>{message}</p>
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img
            src={displayImage}
            alt="Display Image"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit">Upload Single File</button>
      </form>

      <form onSubmit={handleSubmitMultipleFiles}>
        <h2>Upload Multiple Files</h2>
        <input type="file" multiple onChange={handleMultipleFileChange} />
        <button type="submit">Upload Multiple Files</button>
      </form>

      <h2>Fetch Multiple Images</h2>
      <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
      <div>
        {multipleFiles.length > 0 &&
          multipleFiles.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Random ${index}`}
              style={{ width: "200px", margin: "10px" }}
            />
          ))}
      </div>

      <h2>Fetch and Upload Dog Image</h2>
      <button onClick={fetchDogImage}>Get Random Dog Image</button>
      {dogImage && <img src={dogImage} alt="Dog" style={{ width: "200px" }} />}
      <button onClick={uploadDogImage}>Upload Dog Image</button>

     
    </div>
  );
};

export default App;
