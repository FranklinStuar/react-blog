import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components';
import AcercaDe from './components/AcercaDe';
import Blog from './components/Blog';
import Header from './components/Header'
import Home from './components/Home'
import Post from './components/Post'
const App = () => {
  return ( 
    <Router>
      <ContenedorPrincipal>
        <Header/>
        <Main>
          <Route path="/" exact={true} component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/post/:id" component={Post} />
          <Route path="/acerca-de" component={AcercaDe} />
        </Main>
      </ContenedorPrincipal>
    </Router>
   );
}
 
const ContenedorPrincipal = styled.div`
  padding:40px;
  width: 90%;
  max-width:700px;
  `;
const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default App;