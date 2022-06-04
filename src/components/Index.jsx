import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index({ bookmark, createBookmark }) {
  const [newForm, setNewForm] = useState(null);

  const handleChange = (evt) => {
    setNewForm(...newForm, ([evt.target.name] = [evt.target.value]));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBookmark(newForm);
    setNewForm({
      title: "",
      url: "",
    });
  };

  const loaded = () =>
    bookmark.map((site) => (
      <div key={site._id}>
        <Link to={`/${site.url}`}>
          <h1>{site.title}</h1>
        </Link>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

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
      {bookmark ? loaded() : loading()}
    </div>
  );
}
