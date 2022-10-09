import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className="bg-info header">
                <div className='m-3'>
                    <Link id='heading' className="fs-2 fw-bolder" to="./D_Printer">D Printers</Link>
                </div>
                    <div className="header-content">
                        <ul className="m-4">
                            <li>
                                <Link className="fw-bold lilink " aria-current="page" to="./D_Printer">Home</Link>
                            </li>
                            <li>
                                <Link className="fw-bold lilink" to="./Printers">Printers</Link>
                            </li>
                            <li>
                                <Link className="fw-bold lilink" to="./AddNew">Add New Printers</Link>
                            </li>
                            <li>
                                <Link className="fw-bold lilink" to="./About">About Us</Link>
                            </li>
                            <li className="fw-bold">
                                <Link className="fw-bold lilink" to="./Contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </nav>
        </div>
    )
}

export default Header;