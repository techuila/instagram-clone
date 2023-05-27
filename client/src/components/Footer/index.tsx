import React from 'react';

import styles from './styles.module.css';

const links = [
	'About',
	'Help',
	'Press',
	'API',
	'Jobs',
	'Privacy',
	'Terms',
	'Locations',
	'Language',
	'Techuila Verified'
];

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className={styles.footerContainer}>
			<div className={styles.navigation}>
				{links &&
					links.map((link, idx) => (
						<a key={link} href='#' className={styles.link}>
							{link}
						</a>
					))}
			</div>

			<span>© {currentYear} INSTAGRAM FROM TECHUILA</span>
		</div>
	);
}

export default Footer;
