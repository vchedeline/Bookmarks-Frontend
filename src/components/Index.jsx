import { useState } from "react";
import "./index.sass"
import { useNavigate } from "react-router";

export default function Index({ bookmark, createBookmark,deleteBookmark }) {

  //const {id}=useParams()
  const navigate= useNavigate()
  const [newForm, setNewForm] = useState({
    title: "",
    url: "",
  });

  const handleChange = (evt) => {
    setNewForm({ ...newForm, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBookmark(newForm);
    setNewForm({
      title: "",
      url: "",
    });
  };
  
  const removeBookmark =(id)=>{
    deleteBookmark(id)
    navigate("/")
  }
  const editBookmark =(id)=>{
    navigate("/bookmark/" + id)
  
  }

  const loaded = () =>
    bookmark.map((site) => (
      <div key={site._id}>
        <a href={site.url} target="_blank" rel="noreferrer">
          <h1>{site.title}</h1>
        </a>
        <button className="button" onClick={()=>removeBookmark(site._id)}>REMOVE BOOKMARK</button>
        <button className="button" onClick={()=>editBookmark(site._id)}>EDIT BOOKMARK</button>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

    
    
  return (
    <div className="display">
      <h2>Bookmark your favorite sites</h2>
      <form className="form" onSubmit={handleSubmit}>
      <h1>Bookmarks</h1>
        <input className="title"
          type="text"
          name="title"
          value={newForm.title}
          onChange={handleChange}
          placeholder="title"
          />
        <input className="url"
          type="text"
          name="url"
          value={newForm.url}
          placeholder="http://"
          onChange={handleChange}
        />
        <button className="button" type="submit">ADD BOOKMARK</button>
      </form>
      {bookmark ? loaded() : loading()}
    </div>
  );
}
