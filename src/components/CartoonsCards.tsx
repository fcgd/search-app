import React from 'react';

export const CartoonsCards = ({ characters }) => {
	const forDeletion = [3, 6, 14, 22];
	return (
		<section className=' flex flex-wrap justify-center items-center gap-16 text-white my-8'>
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
							<article
								className='w-[300px] h-[420px] bg-transparent cursor-pointer group'
								id={id}
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
										className='absolute my-rotate-y-180 w-full h-full bg-gray-100 overflow-hidden p-4'
										style={{
											backfaceVisibility: 'hidden',
											WebkitBackfaceVisibility: 'hidden',
										}}
									>
										<div className='text-center flex flex-col space-be justify-around h-full text-gray-800 '>
											<div className='flex flex-col m-auto gap-1'>
												<h1 className='text-3xl font-semibold'>{title}</h1>
												<ul className=''>
													{genre.map(name => {
														return (
															<li className='inline mx-4'>
																<i>{name}</i>
															</li>
														);
													})}
												</ul>
												<p className=''>{year}</p>
											</div>

											<div className='flex flex-col text-left m-auto gap-3'>
												<p>
													<b>Rating:</b> {rating}
												</p>
												<p>
													<b>Episodes:</b> {episodes}
												</p>
												<p>
													<b>Duration:</b> {runtime_in_minutes} minutes
												</p>
												<ul>
													<b>Creator:</b>
													{creator.map(name => {
														return <li>{name}</li>;
													})}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</article>
						);
					}
				)}
		</section>
	);
};
