import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './components/Styles';

const App = () => {
	return (
		<>
			<div class="l-canvas type_wide wpml_lang_en">
				<Header />
				<Main />
			</div>
			<Footer />
			<a class="w-header-show" href="javascript:void(0);"><span>Menu</span></a>
			<div class="w-header-overlay" />
		</>
	);
}

export default App;
