import React from 'react';

import ProfileImg from '@assets/profile-1.avif';
import ProfileCard from '@components/ProfileCard';
import SuggestedProfiles from '@components/SuggestedProfiles';

import Footer from '@components/Footer';
import styles from './styles.module.css';

function FeedSidebar() {
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

export default FeedSidebar;
