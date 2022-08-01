import { Link } from 'react-router-dom';

const rickandmorty = '/images/rickandmorty.jpg';
const simpsons = '/images/simpsons.jpg';
const futurama = '/images/futurama.jpg';
const cartoons = '/images/cartoons.jpg';

export const Home = () => {
	return (
		<div className='container flex flex-col m-auto my-20 px-10'>
			<h1 className='text-5xl text-white text-center'>SEARCH APP</h1>
			<h2 className='text-white text-center'>
				Busca a los personajes de tus series favoritas!
			</h2>
			<div className='grid grid-cols-1 lg:grid-cols-2 my-20 gap-10 '>
				<div className='w-11/12 aspect-[9/12] md:w-4/5 lg:w-full lg:h-full md:aspect-video object-fit m-auto'>
					<Link to='rickandmorty'>
						<div
							style={{
								backgroundImage: `url(${rickandmorty})`,
							}}
							className='w-full h-full bg-cover bg-center bg-no-repeat'
						></div>
					</Link>
				</div>
				<div className='w-11/12 aspect-[9/12] md:w-4/5 lg:w-full lg:h-full md:aspect-video object-fit m-auto'>
					<Link to='simpsons'>
						<div
							style={{
								backgroundImage: `url(${simpsons})`,
							}}
							className='w-full h-full bg-cover bg-center bg-no-repeat'
						></div>
					</Link>
				</div>
				<div className='w-11/12 aspect-[9/12] md:w-4/5 lg:w-full lg:h-full md:aspect-video object-fit m-auto'>
					<Link to='futurama'>
						<div
							style={{
								backgroundImage: `url(${futurama})`,
							}}
							className='w-full h-full bg-cover bg-center bg-no-repeat'
						></div>
					</Link>
				</div>
				<div className='w-11/12 aspect-[9/12] md:w-4/5 lg:w-full lg:h-full md:aspect-video object-fit m-auto'>
					<Link to='cartoons'>
						<div
							style={{
								backgroundImage: `url(${cartoons})`,
							}}
							className='w-full h-full bg-cover bg-center bg-no-repeat'
						></div>
					</Link>
				</div>
			</div>
		</div>
	);
};
