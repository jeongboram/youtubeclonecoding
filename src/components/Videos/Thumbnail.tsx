import { IVideoThumbnails } from '@interfaces/common';
import React from 'react';

type ThumbProps = {
	video: IVideoThumbnails
}

const Thumbnail = ({ video }: ThumbProps) => {

	const { id, title, thumbnails } = video

	return (
		<div className='box-thumbnail' data-video-id={id}>
            <img src={thumbnails} alt={title} />
			<h4>{title}</h4>
        </div>
	);
};

export default Thumbnail;
