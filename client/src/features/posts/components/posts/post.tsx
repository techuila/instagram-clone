import React, { useRef, useEffect } from 'react';
import moment from 'moment';

import ProfileRing, { Size } from '@components/profile-ring';
import Button, { Color, Variant } from '@components/button';
import { PostCarousel } from './post-carousel';

import LikeImg from '@assets/like.png';
import CommentImg from '@assets/comment.png';
import ShareImg from '@assets/share.png';
import SaveImg from '@assets/save.png';

import styles from './styles.module.css';

type PostProps = {
	data: {
		likes: number;
		username: string;
		caption: string;
		profileImg: string;
		imgs: Array<string>;
		dateCreated: Date;
	};
};

export function Post({
	data: { username, profileImg, dateCreated, imgs, likes, caption }
}: PostProps) {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'inherit';
			const scrollHeight = textareaRef.current.scrollHeight;
			textareaRef.current.style.height = `${scrollHeight}px`;
		}
	};

	const dateFromNow = (date: Date) => {
		var m = moment(date);

		moment.relativeTimeThreshold('d', 30 * 12);
		moment.updateLocale('en', {
			relativeTime: {
				dd: '%dd'
			}
		});

		return m.fromNow(true);
	};
	return (
		<article className={styles.postContainer}>
			<div className={styles.header}>
				<div className={styles.left}>
					<ProfileRing img={profileImg} size={Size.SMALL} />
					<h4 className={styles.username}>{username}</h4>
					<span className={styles.timeFromNow}>{dateFromNow(dateCreated)}</span>
				</div>

				<Button variant={Variant.GHOST} color={Color.SECONDARY}>
					•••
				</Button>
			</div>

			<PostCarousel imgs={imgs} />

			<section>
				<div className={styles.actionButtons}>
					<div className={styles.commonButtons}>
						<Button variant={Variant.GHOST} icon={LikeImg} />
						<Button variant={Variant.GHOST} icon={CommentImg} />
						<Button variant={Variant.GHOST} icon={ShareImg} />
					</div>

					<Button variant={Variant.GHOST} icon={SaveImg} />
				</div>

				<span className={styles.noLikes}>
					{likes.toLocaleString('en')} likes
					<h1>
						<b>{username}</b>{' '}
						<span dangerouslySetInnerHTML={{ __html: caption }}></span>
					</h1>
				</span>

				<textarea
					ref={textareaRef}
					rows={1}
					className={styles.commentBox}
					placeholder='Add a comment...'
					onChange={handleChange}
				/>
			</section>
		</article>
	);
}
