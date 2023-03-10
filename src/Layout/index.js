import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./Header";
import CreateDeck from "../CreateDeck/CreateDeck"
import Decks from "../DeckPage/Decks";
import DeckList from "../Home/DeckList";
import EditCard from "../EditCard/EditCard";
import AddCard from "../AddCard/AddCard";
import EditDeck from "../EditDeck/EditDeck";
import Study from "../Study/Study";
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
          <Route exact path = '/decks/new'>
            <CreateDeck/>
          </Route>
          <Route exact path = '/decks/:deckId'>
            <Decks />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard /> 
          </Route>
          <Route exact path='/decks/:deckId/study'>
            <Study />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
