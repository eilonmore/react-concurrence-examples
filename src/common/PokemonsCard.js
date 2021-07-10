import React, { useEffect, useState } from "react";
import faker from 'faker';

import { ReactComponent as PokeIcon } from "./catching_pokemon_black_24dp.svg";
import ListCard from '../common/ListCard';
import pokemonsJson from './pokemons.json';

const pokemonsArr = pokemonsJson.map(p => ({
	...p,
	description: faker.lorem.word(),
	fullDescription: faker.lorem.paragraph()
}));

const fetchPokemons = name => {
	return new Promise(res => {
		setTimeout(() => {
			if (!name) {
				return res(pokemonsArr);
			}

			return res(pokemonsArr.filter(p => p.name.includes(name)));
		}, 1000);
	});
};

const PokemonsCard = React.memo(
	({ searchQuery }) => {
		const [pokemons, setPokemons] = useState();

		useEffect(() => {
			fetchPokemons(searchQuery).then((res) => {
				setPokemons(res);
			});
		}, [searchQuery]);

		const data = pokemons?.map(p => ({
			key: p.name,
			name: p.name,
			description: p.description,
			fullDescription: p.fullDescription
		}));

		return (
			<ListCard data={data} icon={<PokeIcon fill="#4a36d6"/>}/>
		);
	});

export default PokemonsCard;
