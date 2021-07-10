import { Input } from "@material-ui/core";
import React, { useState } from "react";
import PokemonsCard from "../common/PokemonsCard";

const SearchPokemonsUnoptimized = () => {
	const [text, setText] = useState("");
	const [searchQuery, setSearchQuery] = useState('');

	const onChange = e => {
		setText(e.target.value);
		setSearchQuery(e.target.value);
	};

	return (
		<>
			<Input onChange={onChange} value={text}/>
			<PokemonsCard searchQuery={searchQuery}/>
		</>
	);
};

export default SearchPokemonsUnoptimized;
