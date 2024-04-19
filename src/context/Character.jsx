import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [locations, setLocations] = useState({});

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results)
            })
            .catch(error => console.error('Error get characters:', error));
    }, []);

    useEffect(() => {
        const savedLocations = localStorage.getItem('locations');
        if (savedLocations) {
            setLocations(JSON.parse(savedLocations));
        }
    }, []);


    const isCharacterAlreadyAssigned = (characterId) => {
        return Object.values(locations).some(location => location.some(char => char.id === characterId));
    };

    const assignLocation = (characterId, locationName) => {
        const character = characters.find(char => char.id === characterId);


        if (character) {
            setLocations(prevLocations => {
                if (isCharacterAlreadyAssigned(characterId)) {
                    alert(`This character is already assigned to a another location.`);
                    return prevLocations;
                }

                const newLocations = {
                    ...prevLocations,
                    [locationName]: [...(prevLocations[locationName] || []), character]
                };

                localStorage.setItem('locations', JSON.stringify(newLocations));

                return newLocations;
            });
        } else {
            alert('Character invalid.');
        }
    };

    return (
        <APIContext.Provider value={{ characters, locations, assignLocation }}>
            {children}
        </APIContext.Provider>
    );
};
