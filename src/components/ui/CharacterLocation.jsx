import React, { useContext, useState } from 'react';
import { APIContext } from '../../context/Character';
import { Link } from 'react-router-dom';

function CharacterLocation() {
	const { locations } = useContext(APIContext);
 
	return (
	    <div className="container mx-auto mt-5">
		   {Object.keys(locations).length === 0 && <div className="text-center">No locations assigned yet.</div>}
		   {Object.entries(locations).map(([location, characters]) => (
			  <div key={location} className="mb-3 p-4 shadow rounded-lg">
				 <h3 className="font-bold text-lg mb-2">{location}</h3>
				 {characters.map(char => (
					<div key={char.id} className="p-2 flex items-center justify-between hover:bg-gray-100 rounded">
					    <span className="font-semibold">{char.name}</span>
					    <Link to={`/character/${char.id}`} className="text-blue-500 hover:text-blue-800">
						   View Details
					    </Link>
					</div>
				 ))}
			  </div>
		   ))}
	    </div>
	);
 }
 
 export default CharacterLocation;