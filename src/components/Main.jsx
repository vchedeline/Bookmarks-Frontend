import { useEffect } from "react";
import { useState } from "react";
import Index from "./Index";

export default function DisplayBookmarks() {
  const [bookmark, setBookmark] = useState(null);
  const URL = "https://sei-bookmarks-lab.herokuapp.com/";

  const getBookmark = async () => {
    const response = await fetch(URL + "bookmarks");
    const data = await response.json();
    setBookmark(data);
  };

  useEffect(() => {
    getBookmark();
  }, []);

  const handleChange = (evt) => {
    setBookmark(...bookmark, ([evt.target.name] = [evt.taget.value]));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBookmark(bookmark);
    setBookmark({
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
