import React from "react";
// var title = "title";
// var content = "content";

function Note() {
  return (
    // when we are trying to add html attributes it can't  be applied to cutom html attributes
    // class note can't be applied to <Note>
    <div className="note">
      <h1>title</h1>
      <p>content</p>
    </div>
  );
}

export default Note;
