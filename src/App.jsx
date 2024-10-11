import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {Header, Footer, Spotlight} from './components';
import {About, Projects} from './pages';

function App() {
  return (
    <>
      <Router>
        <div className="w-full h-screen lg:max-w-7xl md:max-w-3xl relative flex flex-col lg:flex-row gap-y-0 items-center text-base p-5 lg:py-12">
          <div className="min-h-[30vh] w-full h-full lg:min-w-[30vw] lg:max-h-[70vh] gap-5 flex flex-col lg:justify-between p-5">
            <Header />
            <Footer />
          </div>


          <div className='w-full h-full min-h-[70vh] lg:max-h-[70vh] overflow-y-auto no-scrollbar'>
            <Routes>
              <Route path="/" exact element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<h1>404: page not found</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
      <Spotlight />
    </>
  );
}

export default App;
