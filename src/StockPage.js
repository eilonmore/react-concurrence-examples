import React from 'react';
import { useContainerStyles } from "./common/styles";
import StockOptimized from "./stock/StockOptimized";
import StockUnoptimized from "./stock/StockUnoptimized";

const StockPage = ({ optimized = true }) => {
	return (
		<div className={useContainerStyles().container}>
			{optimized ? <StockOptimized/> : <StockUnoptimized/>}
		</div>
	);
};

export default StockPage;