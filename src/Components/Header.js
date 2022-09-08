import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info fs-5">
                <div className="container-fluid  d-flex justify-content-center">
                    <Link className="navbar-brand fs-3 text-white fw-bolder" to="./">D Printers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="./">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="./Printers">Printers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="./AddNew">Add New Printers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="./About">About Us</Link>
                            </li><li className="nav-item text-white fw-bold">
                                <Link className="nav-link text-white fw-bold" to="./Contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;