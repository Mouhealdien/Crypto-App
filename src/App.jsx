import { Route,Link, Routes } from "react-router-dom";
import {Typography,Layout,Space} from "antd"
import {Navbar ,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News} from "./components";
import './App.css'
function App() {
  return (
    <div className="app">
     <div className="navbar">
       <Navbar/>
     </div>

     <div className="main">
        <Layout>
          <div className="routes">
              <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                      
                      
                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                    
                    <Route exact path="/crypto/:coidId" element={<CryptoDetails/>}/>
                      
                    <Route exact path="/news" element={ <News/>}>
                     
                    </Route>
              </Routes>
          </div>
        </Layout>
    

     <div className="footer">
      <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
        Cryptoverse <br/>
        All rights reserverd
      </Typography.Title>
      <Space>
          <Link to="/">Homepage</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
       
      </Space>
     </div>
    </div>
    </div>
  );
}

export default App;
