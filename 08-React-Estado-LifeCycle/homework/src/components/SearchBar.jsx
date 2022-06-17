import React, { useState } from "react";

import bar from "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [state, setState] = useState("");

  return (<div className={bar}>
    <form 
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(state);
      setState("");
    }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
    </div>
  );
}
