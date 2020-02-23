import React, {useState} from "react";
import "./App.css";
import Home from "./home.js";
import { BrowserRouter,Route } from "react-router-dom";
import Add from "./add";
import Edit from "./edit";

import Contactlist from "./contactlist"

function App() {
  const [contactId, setContactId]= useState("")

  const updateContact = (id) => {
    setContactId(id)
  }

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Switch> */}
        <Route exact path="/" component={Home}>
          <Home />
          <Contactlist editContact={updateContact}/>
        </Route>
        <Route path="/Add">
          <Home />
          <Add />
        </Route>
        <Route path="/Edit">
          <Home />
          <Edit contactId={contactId} />
        </Route>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
