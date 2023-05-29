import React from 'react';
import cx from 'classnames';

import styles from './styles.module.css';

export enum Size {
	MEDIUM = 'medium',
	SMALL = 'small'
}

type ProfileRingProps = {
	img: string;
	size?: Size;
};

function ProfileRing({ img, size = Size.MEDIUM }: ProfileRingProps) {
	const isSmall = size === Size.SMALL;

	return (
		<div className={styles.ringContainer}>
			<div className={cx(styles.ring, { [styles.ringSmall]: isSmall })}>
				<img src={img} alt='Profile Image' />
			</div>
		</div>
	);
}

export default ProfileRing;
