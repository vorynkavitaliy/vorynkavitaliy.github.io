import {BrowserRouter} from 'react-router-dom'
import DatabaseState from './context/database/databaseState';
import Main from './Components/modules/Main/Main';


const App = () => {
  return (
    <DatabaseState>
      <BrowserRouter>
        <div className="app container">
          <Main/>
        </div>
      </BrowserRouter>
    </DatabaseState>
    
  );
}

export default App;
