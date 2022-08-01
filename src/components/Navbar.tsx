import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3'>
			<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
					<NavLink
						className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
						to='/'
					>
						Search APP
					</NavLink>
					<button
						className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
					>
						<span className='block relative w-6 h-px rounded-sm bg-white'></span>
						<span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
						<span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
					</button>
				</div>
				<div
					className='lg:flex flex-grow items-center hidden'
					id='example-navbar-warning'
				>
					<ul className='flex flex-col lg:flex-row list-none ml-auto'>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								to='/rickandmorty'
							>
								Rick And Morty
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								to='/simpsons'
							>
								The Simpsons
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								to='/futurama'
							>
								Futurama
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
								to='/cartoons'
							>
								Cartoons
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
