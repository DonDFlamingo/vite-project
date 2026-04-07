import { useState } from "react";

function MyTitleForm() {
    const [title, setTitle] = useState("");
    const handleChange = (event) => {
        const value = event.target.value.replace(/[*#@!]/g, "");
        setTitle(value);
    };

  return (
    <header>
      <h1>Bad Title {title}</h1>

      <label htmlFor="title">Title :</label>

      <input
        id="title"
        type="text"
        value={title}
        onChange={handleChange}
      />
    </header>
  );
}

export default MyTitleForm;