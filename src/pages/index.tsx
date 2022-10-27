import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getVideosApi, getRelatedVideosApi } from './api/youtube/videos';
import { IVideoThumbnails } from '@interfaces/common';
import Thumbnail from '@components/Videos/Thumbnail';
import { useSession } from "next-auth/react";

const Home: NextPage = () => {

	const { status } = useSession();

	const [videoList, setVideoList] = useState<Array<IVideoThumbnails>>([])

	const getVideos = async() => {
		const datas = await getVideosApi(8)
		const listData = await datas.data.items.map((item: any) => {
			const initialValue = {
				id: item.id,
				title: item.snippet.title,
				thumbnails: item.snippet.thumbnails.medium.url
			}
			return initialValue
		})
		setVideoList(listData)
	}

	const getMyplayList = async() => {
		const datas = await getRelatedVideosApi(8)
		const listData = await datas.data.items.map((item: any) => {
			const initialValue = {
				id: item.id,
				title: item.snippet.title,
				thumbnails: item.snippet.thumbnails.medium.url
			}
			return initialValue
		})
		setVideoList(listData)
	}

	useEffect(() => {
		if ( status === 'unauthenticated' ) getVideos()
		if ( status === 'authenticated') getMyplayList()
	}, [status])


	return (
		<>
			<div className="section-video-list">
				{
					videoList.map((video) => (
						<Thumbnail key={video.id} video={video} />
					))
				}
			</div>
		</>
	);
};


export default Home;
