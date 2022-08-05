import React from 'react';
import { Link } from 'react-router-dom';

interface Character {
	id: number;
	name: {
		first: string;
		middle: string;
		last: string;
	};
	images: {
		main: string;
	};
	age: number;
	gender: string;
	species: string;
	homePlanet?: string;
	occupation: string;
	sayings: [string];
}

export const FuturamaCharacters = ({ characters }) => {
	return (
		<ul className='flex flex-col divide divide-y'>
			{characters.slice(0, 15).map((character: Character) => {
				const { id, name, images, occupation, species, ...props } = character;

				return (
					<li key={id} className='flex flex-row hover:bg-cyan-900'>
						<Link
							to={`/futurama/${name.first + name.middle + name.last}`}
							state={character}
							className='select-none flex flex-1 items-center p-4'
						>
							<div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
								<img
									alt={`${name.first} ${name.middle} ${name.last}`}
									src={images.main}
									className='mx-auto object-cover rounded-full h-10 w-10 '
								/>
							</div>
							<div className='flex-1 pl-1 mr-16'>
								<div className='font-medium dark:text-white'>
									{name.first} {name.middle} {name.last}
								</div>
								<div className='text-gray-600 dark:text-gray-200 text-sm'>
									{occupation}
								</div>
							</div>
							<div className='text-gray-600 dark:text-gray-200 text-xs'>
								{species}
							</div>
							<div className='w-24 text-right flex justify-end'>
								<svg
									width='20'
									fill='currentColor'
									height='20'
									className='hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'></path>
								</svg>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
