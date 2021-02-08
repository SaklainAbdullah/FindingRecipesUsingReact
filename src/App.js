import React,{useEffect,useState} from "react"
import Recipe from "./Recipe";
import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = 'ab19e1fe';
  const APP_KEY = "b17a4d7b3cd9fa445c93ef8c38a11a8a";



  const[recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setQuery] = useState('chicken')



  useEffect(()=>{
        getRecipes();
  },[query]);

 const getRecipes = async()=>{
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
 }

 const updateSearch = (e)=>{
   setSearch(e.target.value);
 }

 const getSearch = (e)=>{
   e.preventDefault();
   setQuery(search);
   setSearch('');
 }

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
               <input type="text" className="search-bar" value={search} onChange={updateSearch}  />
               <button  className="search-button" type="submit">submit</button>
        </form>
        <div className="recipes">
        {
          recipes.map(recipe=>(
            <Recipe
             title={recipe.recipe.label}
             calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        }
        </div>
    </div>
  );
}

export default App;
