import React from 'react';

import ProfileImg from '@assets/profile-1.avif';
import ProfileCard from '@components/profile-card';
import Footer from '@components/footer';

import SuggestedProfiles from '../suggested-profiles/suggested-profile-list';

import styles from './styles.module.css';

function Feed() {
	return (
		<section className={styles.feedSidebarContainer}>
			<ProfileCard
				sub='Axl Cuyugan'
				username='haluaxl'
				img={ProfileImg}
				buttonName='Switch'
			/>

			<SuggestedProfiles />

			<Footer />
		</section>
	);
}

export default Feed;
