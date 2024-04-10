import './App.css';
import routes from './Routes';
import {useRoutes} from 'react-router-dom'
import TopBar from './Components/TopBar/TopBar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <TopBar />
      <div className='container'>
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
