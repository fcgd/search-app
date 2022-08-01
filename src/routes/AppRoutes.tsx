import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { NotFound } from '../components/NotFound';
// import { SearchResult } from '../components/SearchResult';
import { SearchScreen } from '../components/SearchScreen';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/:show' element={<SearchScreen />}>
				{/* <Route path=':character' element={<SearchResult />} /> */}
			</Route>
			<Route path='/*' element={<NotFound />} />
		</Routes>
	);
};
