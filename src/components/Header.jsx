import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="header-left">
                <NavLink to='/' title="Carsales" aria-label="Icon link to homepage">
                    <img src='../public/icons/icon-car.svg' alt="Logo"></img>
                    <span>Carsales</span>
                </NavLink>
            </div>
            <div className="header-right">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" title="Home" className={ ( { isActive } )  => isActive ? 'active-link' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" title="Products" className={ ( { isActive } )  => isActive ? 'active-link' : '' }>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" title="About" className={ ( { isActive } )  => isActive ? 'active-link' : '' }>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}