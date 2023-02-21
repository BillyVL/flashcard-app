import React from "react";
import {Switch, Route} from 'react-router-dom'
import Header from "./Header";
import Decks from "../DeckPage/Decks";
import DeckList from "../Home/DeckList";
//import EditCard from "../Edit"
import NotFound from "./NotFound";

//routes for everything

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path = '/'>
            <DeckList />
          </Route>
          <Route exact path = '/decks/:deckId'>
              <Decks />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
              {/* <EditCard /> */}
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
