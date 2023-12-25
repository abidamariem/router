import ListMovie from './component/ListMovie'
import './App.css'
import moviesData from "./movies.json";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logoNetflix.png'
import AddMovie from './component/AddMovie';
import Search from './component/Search';
import {Routes, Route} from "react-router-dom";
import Trailer from './component/Trailer';
function App() {
  const [searchMovie,setSearchMovie]=useState("");
  const [searchRating,setSearchRating]=useState("");

  const [movies,setMovies]=useState(moviesData);
  const handleAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  console.log(movies)
  const search =(name)=>{
    setSearchMovie(name);
  }
  const searchRatingg =(name)=>{
    setSearchRating(name);
  }
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{backgroundColor:"black"}}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Netflix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Liste</Nav.Link>
            <Nav.Link href="/addMovie">Ajouter</Nav.Link>
          </Nav>
          <Search search={search} searchRating={searchRatingg}/>

        </Container>
      </Navbar>
  <Routes>
         <Route path="/" element={<ListMovie movies={movies.filter((movie)=> movie.Title.toLocaleUpperCase().includes(searchMovie.toLocaleUpperCase().trim()) && movie.imdbRating>=searchRating)} />} />
         <Route path="/addMovie" element={ <AddMovie handleAdd={handleAdd}/>} />
         <Route path="/trailer/:id" element={<Trailer movies={movies}/>}/>


          </Routes>
    </>
  );
}

export default App;
