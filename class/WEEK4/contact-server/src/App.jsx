import { useState, useEffect } from "react";

export default function FetchDemo() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 text-center bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold">Fetch Demo</h1>

        <h2 className="mt-4">Fetched Data:</h2>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}

        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 m-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 m-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 m-2">Submit</button>
        </form>
      </div>
    </div>
  );
}


/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server - GET", data: [] });
});

app.post("/form", (req, res) => {
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
  res.send("Welcome to the server - POST LOGIN");
});
*/
