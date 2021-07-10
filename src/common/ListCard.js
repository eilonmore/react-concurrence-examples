import React from "react";
import {
	ListItemSecondaryAction,
	ListItem,
	ListItemAvatar,
	ListItemText,
	IconButton,
	Typography,
	List,
	SvgIcon,
	Box, CircularProgress
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchAgainIcon from '@material-ui/icons/YoutubeSearchedFor';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import { isEmpty, isNil } from 'lodash';

const useStyles = makeStyles({
	card: {
		marginTop: 20,
		padding: 10,
		minHeight: 200,
		position: 'relative'
	},
	text: {
		maxWidth: '70%'
	},
	centered: {
		display: 'flex',
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	searchAgainIcon: {
		width: 25,
		height: 25,
		marginBottom: 2,
		marginRight: 10
	}
});

const ListRow = ({ name, description, fullDescription, icon }) => {
	const classes = useStyles();

	return (
		<ListItem>
			<ListItemAvatar>
				<SvgIcon>
					{icon}
				</SvgIcon>
			</ListItemAvatar>
			<ListItemText
				className={classes.text}
				primary={name}
				secondary={
					<React.Fragment>
						<Typography
							component="span"
							variant="body2"
							color="textPrimary"
						>
							{description}
						</Typography>
						<br/>
						{fullDescription && fullDescription}
					</React.Fragment>
				}
			/>
			<ListItemSecondaryAction>
				<IconButton>
					<EditIcon color="primary"/>
				</IconButton>
				<IconButton>
					<DeleteIcon color="primary"/>
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

const Centered = ({ children }) => {
	return (
		<Box display="flex" justifyContent="center" alignItems="center" className={useStyles().centered}>
			{children}
		</Box>
	);
};
const EmptyState = () => {
	const classes = useStyles();

	return (
		<Centered>
			<SearchAgainIcon className={classes.searchAgainIcon}/>
			<Typography variant="h6">
				No Matches found
			</Typography>
		</Centered>
	);
};

const LoadingState = () => {
	return (
		<Centered>
			<CircularProgress/>
		</Centered>
	);
};

const ListCard = ({ data, icon }) => {
	const classes = useStyles();
	let component;

	if (isNil(data)) {
		component = <LoadingState/>;
	} else if (isEmpty(data)) {
		component = <EmptyState/>;
	} else {
		component = (
			<List>
				{
					data.map(d => (
						<ListRow key={d.key}
										 name={d.name}
										 description={d.description}
										 fullDescription={d.fullDescription}
										 icon={icon}/>
					))
				}
			</List>
		);
	}

	return (
		<Card raised className={classes.card}>
			{
				component
			}
		</Card>
	);
};

export default ListCard;
