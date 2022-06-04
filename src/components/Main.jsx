import { useState, useEffect } from "react";
import Index from "./Index";
import Edit from "./Edit"
import { Routes, Route } from "react-router-dom";

export default function DisplayBookmarks() {
  const [bookmark, setBookmark] = useState([]);
  const URL = "https://sei-bookmarks-lab.herokuapp.com/bookmarks";

  const getBookmark = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmark(data);
  };

  const createBookmark = async (bookmark) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmark();
  };

  const updateBookmark = async (bookmark, id) => {
    await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(bookmark),
    });
    getBookmark();
  };

  const deleteBookmark = async (id) => {
    await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    getBookmark();
  };

  useEffect(() => {
    getBookmark();
  }, []);

 return (
   <main>
     <Routes>
       <Route path="/" element={<Index bookmark={bookmark} createBookmark={createBookmark} deleteBookmark={deleteBookmark} />}/>
       <Route path="/bookmark/:id" element={<Edit bookmark={bookmark} updateBookmark={updateBookmark}/>}/>
     </Routes>
   </main>
 )
}
