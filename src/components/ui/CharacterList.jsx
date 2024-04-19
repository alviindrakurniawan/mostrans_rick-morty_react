import React, { useContext } from 'react';
import { APIContext } from '../../context/Character';
import { Link } from 'react-router-dom';


function CharacterList() {
	const { characters } = useContext(APIContext);
 
	return (
	    <div className="container mx-auto px-4 mt-5">
		   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			  {characters.map(character => (
				 <div key={character.id} className="max-w-sm rounded overflow-hidden shadow-lg">
					<img className="w-full" src={character.image} alt={character.name} />
					<div className="px-6 py-4">
					    <div className="font-bold text-xl mb-2">{character.name}</div>
					    <Link to={`/character/${character.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						   View Details
					    </Link>
					</div>
				 </div>
			  ))}
		   </div>
	    </div>
	);
 }
 
export default CharacterList;