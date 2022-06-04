
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

export default function Edit ({updateBookmark, bookmark}){
    const {id} = useParams()
    const site = bookmark.find((s)=> s._id === id)
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState(site);
    
      const handleChange = (evt) => {
        setEditForm((prevState)=>({ ...prevState, [evt.target.name]: evt.target.value }));
      };
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        updateBookmark(editForm, id);

        navigate("/")

      };
    return(
        <form className="form" onSubmit={handleSubmit}>
      <h1>Bookmarks</h1>
        <input className="title"
          type="text"
          name="title"
          value={editForm.title}
          onChange={handleChange}
          placeholder="title"
          />
        <input className="url"
          type="text"
          name="url"
          value={editForm.url}
          placeholder="http://"
          onChange={handleChange}
        />
        <button className="button" type="submit">EDIT BOOKMARK</button>
      </form>
    )
}