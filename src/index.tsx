import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PokemonDetails from './details';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import PokemonListControler from './pokemon-list/controller/pokemon-list-controle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<PokemonListControler />}/>
    <Route path="/pokemon-details/" element={<PokemonDetails />}/>
  </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();