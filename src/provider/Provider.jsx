import { BrowserRouter as Router } from 'react-router-dom'

function Provider({children}) {
	return (
		<>
		 <Router>
			{children}
		 </Router>
		</>
	)
}

export default Provider