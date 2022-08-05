import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FuturamaCharacters } from './FuturamaCharacters';
import { NotFound } from './NotFound';
import { RnMCharacters } from './RnMCharacters';

export const SearchScreen = () => {
	const { show } = useParams();
	const [validPath, setValidPath] = useState(false);

	useEffect(() => {
		setValidPath(false);
		const Paths = ['rickandmorty', 'simpsons', 'futurama', 'cartoons'];
		const valid = Paths.includes(show);
		setValidPath(valid);
	}, [show]);

	const [characters, setCharacters] = useState([] as any[]);
	const [search, setSearch] = useState('');

	const API_SAMPLE_URL = 'https://api.sampleapis.com/';

	const showData = async (): Promise<any> => {
		const response = await fetch(`${API_SAMPLE_URL + show}/characters`);
		const data = await response.json();
		setCharacters(data);
	};
	useEffect(() => {
		showData();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value);
	};

	let results: any = [];

	if (!search) {
		results = characters;
	} else {
		if (show === 'rickandmorty') {
			results = characters.filter(character => {
				return character.name.toLowerCase().includes(search.toLowerCase());
			});
		} else if (show === 'futurama') {
			results = characters.filter(character => {
				const fullName = `${character.name.first} ${character.name.middle} ${character.name.last}`;
				return fullName.toLowerCase().includes(search.toLowerCase());
			});
		} else if (show === 'simpsons') {
			results = characters.filter(character => {
				return character.name.toLowerCase().includes(search.toLowerCase());
			});
		} else if (show === 'cartoons') {
			results = characters.filter(character => {
				return character.name.toLowerCase().includes(search.toLowerCase());
			});
		}
	}

	const CharacterListFC = {
		rickandmorty: <RnMCharacters characters={results} />,
		futurama: <FuturamaCharacters characters={results} />,

		// TODO crear lista de personajes para el resto de apis

		// simpsons: <SimpsonsCharacters characters={results} />,
		// cartoons: <CartoonsCharacters characters={results} />,
	};
	return validPath ? (
		<div className='flex flex-col items-center w-full gap-3 my-10'>
			<form className='w-[400px]'>
				<label
					htmlFor='default-search'
					className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
				>
					Search
				</label>
				<div className='relative w-full'>
					<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-gray-500 dark:text-gray-400'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							></path>
						</svg>
					</div>
					<input
						value={search}
						onChange={handleSearch}
						type='search'
						id='default-search'
						className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Character...'
						required
					/>
					<button
						type='submit'
						className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Search
					</button>
				</div>
			</form>
			{CharacterListFC[show]}
		</div>
	) : (
		<NotFound />
	);
};
