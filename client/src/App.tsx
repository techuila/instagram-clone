import { useState } from 'react';

import Sidebar from '@components/Sidebar';
import MainContent from '@components/MainContent';

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
