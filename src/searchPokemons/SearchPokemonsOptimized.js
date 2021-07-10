import { Input } from "@material-ui/core";
import React, { useState, useTransition } from "react";
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import PokemonsCard from "../common/PokemonsCard";

const useStyles = makeStyles({
	spinner: {
		height: '15px !important',
		width: '15px !important',
		position: 'relative',
		top: 10,
		left: 10
	}
});

const SearchPokemonsOptimized = () => {
	const [text, setText] = useState("");
	const [searchQuery, setSearchQuery] = useState('');
	const [isPending, startTransition] = useTransition();
	const classes = useStyles();

	const onChange = e => {
		setText(e.target.value);
		startTransition(() => {
			setSearchQuery(e.target.value);
		});
	};

	return (
		<>
			<Input onChange={onChange} value={text}/>
			{isPending && <CircularProgress className={classes.spinner}/>}
			<PokemonsCard searchQuery={searchQuery}/>
		</>
	);
};

export default SearchPokemonsOptimized;
