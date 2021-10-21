import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import Header from './components/common/header'
import  Home  from './components/common/pages/home'
import  Acompanhamento  from './components/common/pages/acompanhamento'
import  Evolucao  from './components/common/pages/evolucao'
import  VendasAno  from './components/common/pages/vendasano'
import  VendasDia  from './components/common/pages/vendasdia'
import  VendasMes  from './components/common/pages/vendasmes'
import Footer from './components/common/footer'

import './index.css';

function App() {
    
  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <Fragment>

      <div className="antialiased flex flex-col h-screen bg-gray-100"
        style={{
          backgroundImage: `url('images/wallpaper.jpg')`,
          backgroundPosition: 'center',
          backgroundColor: '#F59E0B',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Router>
          <Header />
          <div className="flex-grow">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/acompanhamento" component={Acompanhamento} />
              <Route path="/vendasdia" component={VendasDia} />
              <Route path="/vendasmes" component={VendasMes} />
              <Route path="/vendasano" component={VendasAno} />
              <Route path="/evolucao" component={Evolucao} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
