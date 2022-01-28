import { Route, Routes } from 'react-router-dom';
import './app.sass';

import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import News from './pages/News/News';

function App() {
  return (
    <main className='main'>
      <div className='main-container'>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/news' element={<News />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
