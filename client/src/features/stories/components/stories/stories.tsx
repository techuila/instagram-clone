import React from 'react';

import { StoryCoin } from './story-coin';

import styles from './styles.module.css';

import { stories } from '@data/stories';

export function Stories() {
	return (
		<div className={styles.storiesContainer}>
			{stories &&
				stories.map((story) => (
					<StoryCoin key={story.name} name={story.name} img={story.img} />
				))}
		</div>
	);
}
