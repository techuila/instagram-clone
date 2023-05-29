import React from 'react';

import { Stories } from '@features/stories';
import { Posts } from '@features/posts';
import FeedSidebar from '@features/feed/components/feed/feed';

import styles from './styles.module.css';

function MainContent() {
	return (
		<main>
			<div className={styles.mainContainer}>
				<div className={styles.mainContent}>
					<Stories />
					<Posts />
				</div>
				<FeedSidebar />
			</div>
		</main>
	);
}

export default MainContent;
