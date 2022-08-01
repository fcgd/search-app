export const RnMCharacters = ({ characters }) => {
	interface Character {
		id: number;
		name: string;
		status: string;
		species: string;
		type: string;
		gender: string;
		origin: string;
		image: string;
	}

	const statusColor = {
		Alive: 'green',
		Dead: 'red',
		unknown: 'grey',
	};

	return (
		<div className=' p-8 rounded-md w-full'>
			<div className=' flex items-center justify-between pb-6'>
				<div className='w-full md:w-4/5 lg:w-3/4 m-auto'>
					<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto m-auto'>
						<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
							<table className='min-w-full leading-normal'>
								<thead>
									<tr>
										<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-black text-gray-600 uppercase tracking-wider'>
											Name
										</th>
										<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-black text-gray-600 uppercase tracking-wider'>
											Gender type
										</th>
										<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-black text-gray-600 uppercase tracking-wider'>
											Origin
										</th>
										<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-black text-gray-600 uppercase tracking-wider'>
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									{characters.map((character: Character) => {
										const { id, name, status, type, gender, origin, image } =
											character;
										return (
											<tr key={id}>
												<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
													<div className='flex items-center'>
														<div className='flex-shrink-0 w-10 h-10'>
															<img src={image} alt={name} />
														</div>
														<div className='ml-3'>
															<p className=' text-gray-900 font-semibold whitespace-no-wrap'>
																{name}
															</p>
														</div>
													</div>
												</td>
												<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
													<p className='text-gray-900 whitespace-no-wrap'>{`${gender} ${type}`}</p>
												</td>
												<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
													<p className='text-gray-900 whitespace-no-wrap'>
														{origin}
													</p>
												</td>

												<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
													<span className='relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight'>
														<span
															aria-hidden
															style={{
																backgroundColor: statusColor[status],
															}}
															className='absolute inset-0 opacity-50 rounded-full'
														></span>
														<span className='relative'>{status}</span>
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
