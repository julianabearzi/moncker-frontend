import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes/Routing';

function App() {
  return (
    <div>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
