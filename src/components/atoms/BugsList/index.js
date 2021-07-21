import React from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../../store/store";

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

export default BugsList;
