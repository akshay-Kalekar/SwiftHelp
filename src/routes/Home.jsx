import SearchBar from '../component/Home/SearchBar'
import Navbar from '../component/Home/Navbar'
import Middle from '../component/Home/Middle'
import Endpart from '../component/Home/Endpart'
import Contact from '../component/Home/Contact'
import Volunteer from '../component/Home/Volunteer'

const root = () => {
    return (
      <div className="app-container">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Middle />
      <Endpart />
      <Volunteer/>
      <Contact/>
    </div>
    )
  }
  
  export default root
  