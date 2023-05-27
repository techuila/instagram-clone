import React from 'react';

import styles from './styles.module.css';
import StoryCoin from '@components/StoryCoin';

import { stories } from '@data/Stories';

function Stories() {
	return (
		<div className={styles.storiesContainer}>
			{stories &&
				stories.map((story) => (
					<StoryCoin key={story.name} name={story.name} img={story.img} />
				))}
		</div>
	);
}

export default Stories;
