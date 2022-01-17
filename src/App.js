import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Home from './pages/Home';
import Category from './pages/Category.jsx';
import NavBar from './components/shared/NavBar/NavBar';
import Basket from './pages/Basket';
import { BasketProvider } from './context/BasketContext';
import ThankYou from './pages/ThankYou.jsx';

function App() {
	const engine = new Styletron();

	return (
		<StyletronProvider value={engine}>
			<Router>
				<BasketProvider>
					<BaseProvider theme={LightTheme}>
						<NavBar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/category/:id' element={<Category />} />
							<Route path='basket' element={<Basket />} />
							<Route path='/thank-you' element={<ThankYou />} />
						</Routes>
					</BaseProvider>
				</BasketProvider>
			</Router>
		</StyletronProvider>
	);
}

export default App;
