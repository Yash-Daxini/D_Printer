import './Style.css'
import { Link } from 'react-router-dom'
const Footer = ()=>{
    return(
        <>
        
        <div className="container-fluid text-white bg-info d-flex justify-content-center" id='Footer'>
            <ul className='d-flex justify-content-center align-items-center'>
                <li><h2 className='fs-3 fw-bolder'>D Printer&ensp;</h2></li>
                <Link to={"./"} style={{textDecoration:"none",color:"white"}}><h5><li className='fs-4'>Home&ensp;</li></h5></Link>
                <Link to={"./Printers"} style={{textDecoration:"none",color:"white"}}><h5><li className='fs-4'>Printers&ensp;</li></h5></Link>
                <Link to={"./About"} style={{textDecoration:"none",color:"white"}}><h5><li className='fs-4'>About Us&ensp;</li></h5></Link>
                <Link to={"./Contact"} style={{textDecoration:"none",color:"white"}}><h5><li className='fs-4'>Contact Us&ensp;</li></h5></Link>
            </ul>
        </div>
        </>
    )
}

export default Footer;