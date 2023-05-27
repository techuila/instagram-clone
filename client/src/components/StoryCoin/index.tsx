import React from 'react';

import styles from './styles.module.css';

type StoryCoinProps = {
	name: string;
	img: string;
};

function StoryCoin({ name, img }: StoryCoinProps) {
	return (
		<div className={styles.storyCoinContainer}>
			<div className={styles.ring}>
				<img src={img} alt='Profile Image' />
			</div>

			<span className={styles.profileName}>{name}</span>
		</div>
	);
}

export default StoryCoin;
