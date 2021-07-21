import React, { useState } from "react";
import { StoreContext } from "../../../store/store";

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = useState("");

  return (
    <form
      onSubmit={(e) => {
        store.addBug(bug);
        setBug("");
        e.preventDefault();
      }}>
      <input
        type="text"
        value={bug}
        onChange={(e) => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BugsForm;
