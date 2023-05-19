import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar">
            <h2>TodoApp  <br/> <h5>Keep Track of your day✨</h5> </h2>
           
            <div className="links">
            
                <Link to="/">Home</Link>
                <Link to="/TodoForm">Add Item</Link>
            </div>
        </nav>
    )
}

export default Navbar;