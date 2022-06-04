import { useState } from "react";
import "./index.sass"
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

  return (<>

      <h2>Bookmark your favorite sites</h2>
    <div className="display">
      <form className="form" onSubmit={handleSubmit}>
      <h1>Bookmarks</h1>
        <input className="title"
          type="text"
          name="website"
          value={bookmark.title}
          onChange={handleChange}
          placeholder="website"
        />
        <input className="url"
          type="text"
          name="url"
          value={bookmark.url}
          placeholder="http://"
        />
        <button className="button" type="submit">ADD BOOKMARK</button>
      </form>
    </div>
    </>
  );
}
