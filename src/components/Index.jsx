import { useState } from "react";

export default function Index({ bookmark, createBookmark }) {
  const [newForm, setNewForm] = useState(null);

  const handleChange = (evt) => {
    setNewForm(...newForm, ([evt.target.name] = [evt.taget.value]));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBookmark(newForm);
    setNewForm({
      title: "",
      url: "",
    });
  };

  return (
    <div className="display">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          value={bookmark.title}
          onChange={handleChange}
          placeholder="website"
        />
        <input
          type="text"
          name="url"
          value={bookmark.url}
          placeholder="http://"
        />
        <button type="submit">ADD BOOKMARK</button>
      </form>
    </div>
  );
}
