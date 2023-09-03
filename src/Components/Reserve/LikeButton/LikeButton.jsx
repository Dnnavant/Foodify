import React, { useState } from "react";
import "./LikeButton.css";

export default function LikeButton() {
	const [isLiked, setIsLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(0);

	const handleLikeClick = () => {
		if (isLiked) {
			setLikeCount(likeCount - 1);
		} else {
			setLikeCount(likeCount + 1);
		}
		setIsLiked(!isLiked);
	};

	return (
		<div>
			<span
				className={`heart-icon ${isLiked ? "liked" : ""}`}
				onClick={handleLikeClick}
			>
				<i className="fa-solid fa-heart"></i>
			</span>
			<span className="like-count">{likeCount}</span>
		</div>
	);
}
