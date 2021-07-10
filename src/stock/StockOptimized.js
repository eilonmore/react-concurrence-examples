import React, { useEffect, useState, useTransition } from "react";
import appleStock from '@visx/mock-data/lib/mocks/appleStock';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { ParentSize } from '@visx/responsive';

import BrushChart from '../common/BrushChart';
import ListCard from "../common/ListCard";

const StockOptimized = () => {
	const [stock, setStock] = useState();
	const [, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			setStock(appleStock);
		});
	}, []);

	const onChange = filteredStock => {
		startTransition(() => {
			setStock(filteredStock);
		});
	};

	const data = stock?.map(s => ({
		key: s.date,
		name: s.date,
	}));

	return (
		<>
			<ParentSize>
				{
					({ width }) => (<BrushChart width={width} height={500} initialData={appleStock} onChange={onChange}/>)
				}
			</ParentSize>
			<ListCard data={data} icon={<ShowChartIcon color="primary"/>}/>
		</>
	);
};

export default StockOptimized;
