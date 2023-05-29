import React from 'react';

import Button, { Color, Variant } from '@components/button';
import ProfileCard, { Size } from '@components/profile-card';

import styles from './styles.module.css';

import { suggestedProfiles } from '@data/suggested-profiles';

function SuggestedProfiles() {
	return (
		<div className={styles.suggestedProfilesContainer}>
			<div className={styles.header}>
				<h4>Suggested for you</h4>
				<Button variant={Variant.GHOST} color={Color.SECONDARY}>
					See All
				</Button>
			</div>

			<div className={styles.profiles}>
				{suggestedProfiles &&
					suggestedProfiles.map((profile) => (
						<ProfileCard
							key={profile.username}
							size={Size.SMALL}
							sub={profile.sub}
							username={profile.username}
							img={profile.img}
							buttonName='Follow'
						/>
					))}
			</div>
		</div>
	);
}

export default SuggestedProfiles;
