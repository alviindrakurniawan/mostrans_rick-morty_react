import React, { useContext, useState } from 'react';
import { APIContext } from '../../context/Character';
import { useNavigate, useParams, Link } from 'react-router-dom';

function CharacterDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { characters, assignLocation } = useContext(APIContext);
	const character = characters.find(char => char.id.toString() === id);
	const [location, setLocation] = useState('');

	const handleLocationSubmit = (event) => {
		event.preventDefault();
		assignLocation(character.id, location);
		setLocation('');
		navigate('/location');


	};

	if (!character) {
		return <div className="container mx-auto mt-5">Character not found.</div>;
	}

	return (
		<div className="container mx-auto mt-5">
			<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img className="h-48 w-full object-cover md:w-48" src={character.image} alt={character.name} />
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{character.name}</div>
						<p className="block mt-1 text-lg leading-tight  text-gray-900">Status: {character.status}</p>
						<p className="mt-2 text-gray-900">Species: {character.species}</p>
						<form onSubmit={handleLocationSubmit} className="mt-4 md:mt-8">
							<input
								type="text"
								className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full md:w-1/2"
								placeholder="Enter location"
								value={location}
								onChange={e => setLocation(e.target.value)}
								required />
							<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full md:w-auto md:ml-5">
								Assign Location
							</button>
						</form>
						<Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded block text-center mt-4 w-full md:w-auto">
							Back to List
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CharacterDetail;