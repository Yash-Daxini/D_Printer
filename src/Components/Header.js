import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info header">
                <div className='m-3'>
                    <Link id='heading' className="fs-2 mx-5 fw-bold" to="./D_Printer">D Printers</Link>
                    <button class="mx-4 navbar-toggler bg-info border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse header-content" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link className=" lilink " aria-current="page" to="./D_Printer">Home</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel" >
                                <li><Link className="dropdown-item" to="./D_Printer/Printers">Printers</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="./D_Printer/AddNew">Add New Printers</Link></li>
                            </ul>
                        </li> */}
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/Printers">Printers</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/Laptops">Laptops</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/AddNew">Add Printers</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/AddNewLaptop">Add Laptops</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/About">About Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="lilink" to="./D_Printer/Contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;