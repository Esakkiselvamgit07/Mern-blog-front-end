import './App.css';
// import Header from './Components/Header/Navbar';
import Layout from './Components/body/Layout';
// import Post from './Components/body/Post';
import {Route,Routes} from 'react-router-dom'
import IndexPage from './Components/pages/IndexPage';
import LoginPage from './Components/pages/LoginPage';
import RegisterPage from './Components/pages/RegisterPage';
// import  UserContextProvider  from './UserContext';
import { UserContextProvider } from './UserContext';
import CreatePost from './Components/pages/CreatePost';
import PostPage from './Components/pages/PostPage';
import EditPost from './Components/pages/EditPost';
import About from './Components/body/About';
import Sidebar from './Components/body/Sidebar';
function App() {
  return (
    <UserContextProvider>
    <Routes>  
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      <Route path='/regsiterpage' element={<RegisterPage/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path='/edit/:id' element={<EditPost/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App;
