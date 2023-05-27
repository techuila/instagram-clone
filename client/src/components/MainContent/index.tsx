import React from 'react';

import Stories from '@components/Stories';
import FeedSidebar from '@components/FeedSidebar';

import styles from './styles.module.css';

function MainContent() {
	return (
		<main className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<Stories />
			</div>
			<FeedSidebar />
		</main>
	);
}

export default MainContent;
