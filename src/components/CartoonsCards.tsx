import React from 'react';

export const CartoonsCards = ({ characters }) => {
	const forDeletion = [3, 6, 14, 22];
	return (
		<section className=' flex flex-wrap justify-center items-center gap-16 text-white'>
			{characters
				.filter(item => !forDeletion.includes(item.id))
				.map(
					({
						title,
						year,
						creator,
						rating,
						genre,
						runtime_in_minutes,
						episodes,
						image,
						id,
					}) => {
						return (
							<div
								className='w-[300px] h-[420px] bg-transparent cursor-pointer group'
								style={{
									WebkitPerspective: '1000px',
									perspective: '1000px',
								}}
							>
								<div
									className='relative group-hover:my-rotate-y-180 w-full h-full duration-1000'
									style={{
										WebkitTransformStyle: 'preserve-3d',
										transformStyle: 'preserve-3d',
									}}
								>
									<div
										className='absolute border-2 w-full h-full'
										style={{
											backfaceVisibility: 'hidden',
											WebkitBackfaceVisibility: 'hidden',
										}}
									>
										<img src={image} className='w-full h-full' />
									</div>
									<div
										className='absolute my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden '
										style={{
											backfaceVisibility: 'hidden',
											WebkitBackfaceVisibility: 'hidden',
										}}
									>
										<div className='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24'>
											<h1 className='text-3xl font-semibold'>{title}</h1>
											<ul>
												{genre.map(name => {
													return <li>{name}</li>;
												})}
											</ul>
											<p className='my-2'>{year}</p>

											<p className='my-2'>Rating: {rating}</p>
											<p className='my-2'>Episodes: {episodes}</p>
											<p className='my-2'>
												Duration: {runtime_in_minutes} minutes
											</p>
											<ul className=''>
												{creator.map(name => {
													return <li className=''>{name}</li>;
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						);
					}
				)}
		</section>
	);
};
