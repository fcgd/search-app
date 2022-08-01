import Error404 from '../../public/images/404.webp';

export const NotFound = () => {
	return (
		<div className='container h-[50vh] w-full flex flex-col items-center justify-center m-auto'>
			<h1 className='text-white text-5xl '>Page Not Found</h1>
			<img
				src={Error404}
				alt='Page not Found'
				className='absolute bottom-0 right-0'
			/>
		</div>
	);
};
