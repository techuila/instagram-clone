import React from 'react';
import cx from 'classnames';

import Button, { Variant } from '@components/Button';
import styles from './styles.module.css';

export enum Size {
	LARGE = 'large',
	SMALL = 'small'
}

type ProfileCardProps = {
	sub: string;
	username: string;
	img: string;
	size?: Size;
	buttonName: string;
};

function ProfileCard({
	sub,
	username,
	img,
	buttonName,
	size = Size.LARGE
}: ProfileCardProps) {
	const isSizeSmall = size === Size.SMALL;

	return (
		<div className={styles.profileCardContainer}>
			<div className={cx(styles.left, { [styles.smallGap]: isSizeSmall })}>
				<img
					className={cx(styles.profilePicture, {
						[styles.smallImg]: isSizeSmall
					})}
					src={img}
					alt='Profile Picutre'
				/>

				<div className={styles.description}>
					<h4 className={styles.username}>{username}</h4>
					<span
						className={cx(styles.sub, {
							[styles.smallText]: isSizeSmall
						})}
					>
						{sub}
					</span>
				</div>
			</div>

			<Button variant={Variant.GHOST}>{buttonName}</Button>
		</div>
	);
}

export default ProfileCard;
