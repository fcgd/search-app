import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CharacterDetails = () => {
	const location: any = useLocation();
	const { state } = location;

	console.log(state);
	// const {
	// 	id,
	// 	name,
	// 	images,
	// 	occupation,
	// 	species,
	// 	age,
	// 	gender,
	// 	homePlanet,
	// 	sayings,
	// } = state;
	const [quote, setQuote] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(
			() => setIndex(i => (i + 1) % state.sayings.length),
			10000
		);
		return () => clearInterval(timer);
	}, []);
	useEffect(() => {
		setQuote(state.sayings[index]);
	}, [index]);

	return (
		<div className='flex flex-col justify-center gap-10 mx-[10%] my-10'>
			<cite
				className='w-3/4 pb-20 pt-10 px-8 bg-no-repeat text-center box-content leading-none  '
				style={{
					background:
						'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/speech-bubble.svg)',
				}}
			>
				{quote}
			</cite>
			<div className='flex text-white'>
				<img
					src={state.images.main}
					alt={`${state.name.first} ${state.name.middle} ${state.name.last}`}
				/>
				<div className='flex flex-col mx-auto gap-5'>
					<h1 className='text-5xl my-7 '>
						{state.name.first} {state.name.middle} {state.name.last}
					</h1>
					<p>
						<u>Occupation:</u> {state.occupation}
					</p>
					<p>
						<u>Species:</u> {state.species}
					</p>
					<p>
						<u>Age:</u> {state.age}
					</p>
					<p>
						<u>Gender:</u> {state.gender}
					</p>
					<p>
						<u>Home Planet:</u> {state.homePlanet}
					</p>
				</div>
			</div>
		</div>
	);
};
