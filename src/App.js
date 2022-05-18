import React from 'react';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Manatee from './pages/Manatee'
import Narwhal from './pages/Narwhal'
import Whale from './pages/Whale'





function Spain(){
  function Chn(){
    document.getElementById("pict").src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Catalinamicaelaspain65.jpg"
  }
  
  return <div><h1>Spanish Princess</h1>
    

  <img onClick={Chn} id="pict" class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Catalina_Micaela_of_Spain_by_Alonso_S%C3%A1nchez_Coello.jpg "/>

 <button class="mt-3" data-bs-toggle="collapse"data-bs-target="#load" id="loadbtn">EXPAND/COLLAPSE</button>
 <div id="load" class="collapse"><h1>Catalina Michaela of Spain</h1>
 <p>Was the second daughter of King Philipp the second of Spain.</p>
  </div>
 </div>
}

function App() {
  return (
    <div className="wrapper">
      <h1 class="marine">Marine Mammals</h1>
      <BrowserRouter>
      <nav class="buttons">
          <div class="mt-5">
         
            <Link to="/manatee"><button class="btn btn-info">Manatee</button></Link>
           <Link to="/narwhal"><button class="btn btn-default">Narwhal</button></Link>
            <Link to="/whale"><button class='btn'>Whale</button></Link>
            <Link to="/"><button class="btn">Home</button></Link>
          
           
          </div>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>

          <Route path="/whale">
            <Whale/>
          </Route>
          <Route path="/">
            <Spain />
          </Route>

        

         

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
