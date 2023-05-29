import React from 'react';

import ProfileRing from '@components/profile-ring';
import styles from './styles.module.css';

type StoryCoinProps = {
	name: string;
	img: string;
};

export function StoryCoin({ name, img }: StoryCoinProps) {
	return (
		<div className={styles.storyCoinContainer}>
			<ProfileRing img={img} />

			<span className={styles.profileName}>{name}</span>
		</div>
	);
}
