import './Style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <div className="container-fluid bg-dark text-center text-white" id='Footer'>
                <div className='footer1outer text-center' >
                    <div className='footer1'></div>
                    <h3 className='my-3'>Connect With Us</h3>
                    <ul>
                        <Link to={"./D_Printer/About"} className="footerlink"><li className='my-1'>About Us</li></Link>

                        <Link to={"./D_Printer/Contact"} className="footerlink"><li className='my-1'>Contact Us</li></Link>
                    </ul>
                </div>
                <div id='footer2outer' className='text-center'>
                    <h3 className='my-3'>D_Printer</h3>
                    <div id='footer2'></div>

                    <ul className='footerUl text-white my-2'>

                        <Link to={"./D_Printer"} className="footerlink"><li className='my-1'>Home</li></Link>

                        <Link to={"./D_Printer/Printers"} className="footerlink"><li className='my-1'>Printers</li></Link>

                        <Link to={"./D_Printer/Laptops"} className="footerlink"><li className='my-1'>Laptops</li></Link>
                    </ul>
                </div>
                <div id='footer3' className='text-center fs-3'>
                    <h3 className='my-3'>Connect With Us</h3>
                    <ul className='my-3'>
                        <li className='my-3'><h6>&copy; Copyright 2022 D_Printer. All rights reserved</h6></li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
                        <li><i className="fa fa-whatsapp" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                        <li><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
            <div className='bg-dark text-center text-light' >
            <span>Designed By &nbsp;</span><span style={{ color: 'red', fontSize: '25px'}}>&infin;</span></div>
        </>
    )
}

export default Footer;