import { Link, Outlet } from "react-router-dom"

const LinkLayout = () =>{
    return (
        <div className="box">
            
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </nav>
         
              
            
           <Outlet></Outlet>


        </div>
    )
}

export default LinkLayout