import React, { useContext, useState, useEffect } from "react";
import GoogleAuth from "../GoogleAuth";
import { BookContext } from "../context/BookContext";
import {UserBooksContext} from '../context/UserBooksContext'
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";


export default function NavigationBar(props) {
  const context = props.location.pathname === '/books/list' ? BookContext : UserBooksContext 
  
  const { setTerm, onSearchSubmit, searchTerm } = useContext(context);
  const [path,setPath] = useState('')

  useEffect(()=>{
    props.location.pathname === '/books/list' ? setPath('/books/userbooks') : setPath('/books/list')
  }, [props.location.pathname])

  return (
    <div className="navigation-bar-container">
      <ul>
        { props.location.pathname === '/books/list' ?
        <Link to={path} >
          <li >My book list</li>
        </Link>
        :       
        <Link to={path} >
          <li >Book search</li>
        </Link>  }     
        <li>Monthly ranking</li>
      </ul>
      <SearchInput
        onSearchSubmit={onSearchSubmit}
        setTerm={setTerm}
        searchTerm={searchTerm}
      />
      <GoogleAuth />
    </div>
  );
}
