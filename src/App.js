import React from 'react';
import Header from './components/Header';
import MidComponent from './components/MidComponent';
import BrowseIconCategory from './components/BrowseIconCategory';
import Footer from './components/Footer';
import Comments from './components/Coments';
import ContactUs from './components/contactus'

function App() {
  return (
	<>
    	<Header />
		<MidComponent/>
		<BrowseIconCategory/>
		<Comments/>
		<ContactUs />
		<Footer/>
		<div class="mini-footer">
			<div class="container">
				<p>Copyright © 2019 iconTailor all rights reseved.Powererd by  <a href="https://www.startdesigns.com">Start Designs</a></p>
			</div>
		</div>
	</>
  );
}

export default App;
