
import React,{useEffect,useState} from 'react'
import './style.css'
import Card from './Card'




const App=()=>{
    const key='838415327ff2ba249fe6c559ee50c6d0cc6dcb8';
    const [recipes,setRecipes]=useState([]);
    const [search,setSearch]=useState('');
    const [query,setQuery]=useState("banana");
    
   
        useEffect(()=>{
            console.log('i got updated')
            const getRecipes = async () =>{
                const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=415327f&app_key=${key}`)
                  const data = await response.json();
                 setRecipes(data.hits);
                 console.log(data.hits)
                };
            getRecipes();
        },[query]);
    
    
    
        const updateSearch=e=>{
            console.log(search)
            setSearch(e.target.value);
        };
        const getSearch=e=>{
            e.preventDefault();
            setQuery(search);
            setSearch('')
            
        }
        
    return(<div>
         <h1 className='heading'>Recipe App</h1>
         <div className='wrap'>
        
        <form className ='search' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit' onClick={getSearch} >Search</button>
        </form>
    
        </div>
         {recipes.map(recipe=>(<Card 
            key={recipe.recipe.label}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
           ingredients= {recipe.recipe.ingredients} />))}
         </div>
     )

}


export default App