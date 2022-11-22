import React from 'react'

export default function List({results}) {
  return (<ul className="result-container">{results.map(
            result => 
            <li key={result.id}> 
              <h3>{result.name}</h3>
              <p>{result.dsc}</p>
              <img src={result.img} alt="idk"/>
              <p>{result.country}</p>
              <p>${result.price}</p>
              <p className="rating">{result.rate}/5</p>
            </li>
      )}
  </ul>)
}


