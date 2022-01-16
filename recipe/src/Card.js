import React from 'react';
import './style.css'
function Card(props){
    
     
    return(<div className='Card'>
          <h1>{props.title}</h1>
          <p>{props.calorie}</p>
          <img src={props.image} alt=''/>
          <ul>{props.ingredients.map(ing=>(<li>{ing.text}</li>))}
          </ul>
          </div>
    )

}
export default Card