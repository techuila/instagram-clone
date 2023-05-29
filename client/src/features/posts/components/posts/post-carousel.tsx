import React, { useState } from 'react';
import { Grid, AutoSizer, GridCellProps } from 'react-virtualized';

import styles from './styles.module.css';

type PostCarouselProps = {
	imgs: Array<string>;
};

export function PostCarousel({ imgs }: PostCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const cellRenderer = ({ columnIndex, key, style }: GridCellProps) => {
		const img = imgs[columnIndex];

		return (
			<div key={key} style={style}>
				<img src={img} alt='Post Photo' />
			</div>
		);
	};

	const nextItem = () => {
		setCurrentIndex((oldIndex) =>
			oldIndex < imgs.length - 1 ? oldIndex + 1 : imgs.length - 1
		);
	};

	const prevItem = () => {
		setCurrentIndex((oldIndex) => (oldIndex > 0 ? oldIndex - 1 : 0));
	};

	return (
		<div className={styles.postCarouselContainer}>
			<AutoSizer>
				{({ height, width }) => (
					<Grid
						cellRenderer={cellRenderer}
						columnCount={imgs.length}
						columnWidth={width}
						height={height}
						rowCount={1}
						rowHeight={height}
						width={width}
						scrollToColumn={currentIndex}
					/>
				)}
			</AutoSizer>

			{currentIndex > 0 && (
				<button className={styles.prevImg} onClick={prevItem}></button>
			)}

			{currentIndex < imgs.length - 1 && (
				<button className={styles.nextImg} onClick={nextItem}></button>
			)}
		</div>
	);
}
