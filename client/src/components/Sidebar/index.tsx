import React from 'react';
import instagramIcon from '@assets/instagram.svg';
import homeIcon from '@assets/home.png';
import searchIcon from '@assets/search.png';
import exploreIcon from '@assets/explore.png';
import reelsIcon from '@assets/reels.png';
import messagesIcon from '@assets/messages.png';
import notificationIcon from '@assets/notification.png';
import createIcon from '@assets/create.png';
import burgirIcon from '@assets/burgir.png';

import styles from './styles.module.css';

interface LinkProps {
	icon: string;
	label: string;
}

const Link = ({ icon, label }: LinkProps) => (
	<a href='#' className={styles.link}>
		<img src={icon} alt={label} /> <span>{label}</span>
		<div className={styles.linkBg}></div>
	</a>
);

function Sidebar() {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<div className={styles.logo} />
			</div>

			<div className={styles.navLinks}>
				<Link icon={homeIcon} label='Home' />
				<Link icon={searchIcon} label='Search' />
				<Link icon={exploreIcon} label='Explore' />
				<Link icon={reelsIcon} label='Reels' />
				<Link icon={messagesIcon} label='Messages' />
				<Link icon={notificationIcon} label='Notification' />
				<Link icon={createIcon} label='Create' />
			</div>

			<div>
				<Link icon={burgirIcon} label='More' />
			</div>
		</div>
	);
}

export default Sidebar;
