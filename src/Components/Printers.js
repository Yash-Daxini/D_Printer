import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Printers = () => {
    const [printerObj, setPrinterObj] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/printer")
            .then((res) => {
                return res.json();
            }).then((data) => {
                setPrinterObj(data);
            })
    }, []);

    const printerDetails = printerObj.map((Obj) => {
        return (
            <div className="col-3">
                <Link to={"./SinglePrinterDetail/" + Obj.id} style={{ textDecoration: "none" }}>
                    <div className="col">
                        <div className="card my-3 hoverclass text-center">
                            <img
                                src={Obj.PrinterImage}
                                className="card-img-top py-2"
                                alt="Can't Load"
                            />
                            <h5 className="py-3 card-title text-black">
                                <b>{Obj.PrinterName}</b>
                            </h5>
                            <h5 className="card-title text-black">
                                {Obj.PrinterModel}
                            </h5>
                            <div className="my-4 card-body text-black content">
                                <h5>{Obj.PrinterMaker}</h5>
                                <hr />
                                <h5>₹ {Obj.PrinterPrice}</h5>
                                <button className="btn btn-outline-info" onClick={()=>{
                                    navigate('./SinglePrinterDetail/');
                                }}>View</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1 className="my-3">Printers</h1>
            <div className="row">{printerDetails}</div>
        </div>
    )
}

export default Printers;