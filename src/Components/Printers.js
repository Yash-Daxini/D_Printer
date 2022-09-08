import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Printers = () => {
    const [printerObj, setPrinterObj] = useState([]);
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
            <div className="col-md-3">
                <Link to={"./SinglePrinterDetail/" + Obj.id} style={{ textDecoration: "none" }}>
                    <div className="col-md-3">
                        <div className="card my-3 hoverclass text-center border-0" style={{ width: '15rem' }}>
                            <img
                                src={Obj.PrinterImage}
                                className="card-img-top"
                                alt="Can't Load"
                            />
                            <div className="card-body text-black">
                                <h6 className="card-title text-black">
                                    <b>{Obj.PrinterName}</b>
                                </h6>
                                <h6 className="card-title text-black">
                                    {Obj.PrinterModel}
                                </h6>
                                {/* <hr /> */}
                                {Obj.PrinterMaker}
                                <hr />
                                <h6>₹ {Obj.PrinterPrice}</h6>
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