import React from 'react';
import SearchPokemonsOptimized from "./searchPokemons/SearchOptimized";
import SearchPokemonsUnoptimized from "./searchPokemons/SearchUnoptimized";
import { useContainerStyles } from "./common/styles";

const SearchPokemonsPage = ({ optimized = true }) => {
	return (
		<div className={useContainerStyles().container}>
			{optimized ? <SearchPokemonsOptimized/> : <SearchPokemonsUnoptimized/>}
		</div>
	);
};

export default SearchPokemonsPage;