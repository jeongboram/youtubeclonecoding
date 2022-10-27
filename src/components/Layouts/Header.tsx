import React, { useEffect, useState } from 'react';
import { signIn, useSession, signOut } from "next-auth/react";
import { IProfile } from '@interfaces/common';

const Header = () => {

	const [isLogin, setIsLogin] = useState(false)
	const { data, status } = useSession();

	const profileData: IProfile = {
		profileImg: data?.user?.image,
		username: data?.user?.name,
		useremail: data?.user?.email
	}

	useEffect(() => {
		if ( status === 'unauthenticated' ) {
			setIsLogin(false)
		} else {
			setIsLogin(true)
		}
	}, [status])

	return (
		<header className='header'>
			<h1>Youtube</h1>
			<div className='box-left'>
				{
					!isLogin ? <button className='btn-login' onClick={() => signIn('google')}>Social Login</button> : 
					<>
						<div className='my-info'>
							<img src={profileData.profileImg} alt={`${profileData.username} 프로필 이미지`} />
							<div>
								<strong>{profileData.username}</strong>
								<em>{profileData.useremail}</em>
							</div>
						</div>
						<button className='btn-login' onClick={() => signOut()}>Logout</button>
					</>
				}
			</div>
		</header>
	);
};

export default Header;
