import { Route, Routes } from 'react-router-dom';
import { CharacterDetails } from '../components/CharacterDetails';
import { Home } from '../components/Home';
import { NotFound } from '../components/NotFound';
import { SearchScreen } from '../components/SearchScreen';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/:show' element={<SearchScreen />} />
			<Route path='/:show/:characterID' element={<CharacterDetails />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
	);
};
