import { useState } from 'react';

import Sidebar from './components/sidebar';
import MainContent from './pages/home';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Sidebar />
			<MainContent />
		</div>
	);
}

export default App;
