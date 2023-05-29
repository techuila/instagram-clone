import React from 'react';

import { posts } from '@data/posts';

import { Post } from './post';
import styles from './styles.module.css';

export function Posts() {
	return (
		<div className={styles.postsContainer}>
			{posts && posts.map((post) => <Post data={post} />)}
		</div>
	);
}
