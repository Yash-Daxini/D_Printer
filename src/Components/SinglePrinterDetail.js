import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SinglePrinterDetail = () => {

    const [ans, setans] = useState([]);
    const params = useParams();
    const navigate = useNavigate();


    const fetchall = () => {
        fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/printer")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setans(data);
            });
    };

    useEffect(() => {
        fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/" + params.id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setans(data);
                console.log('data :>> ', data);
            });
    }, [params.id]);


    const Delete = () => {
        fetch(`https://62da16fd5d893b27b2f0ebab.mockapi.io/printer/${params.id}`, {
            method: "DELETE"
        }).then((resp) => {
            resp.json().then((result) => {
                fetchall();
            });
        });
    };

    return (
        <>
            <div className="container d-flex justify-content-left my-3">
                <div className="col-md-3">
                    <div className="card my-3 mx-3 singlehoverclass text-center border-0">
                        <img
                            src={ans.PrinterImage}
                            className="card-img-top"
                            alt="Can't Load"
                        />
                        <div className="card-body text-black">
                            <h5 className="card-title text-black">
                                <b>{ans.PrinterName}</b>
                            </h5>
                            <h5 className="card-title text-black">{ans.PrinterModel}</h5>
                            <hr />
                            {ans.PrinterMaker}
                            <hr />
                            <h6>₹ {ans.PrinterPrice}</h6>
                            <hr />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="my-2">Detail Of Printer</h2>
                    <p className="text-black">{ans.PrinterDescription}</p>
                    <br />
                    <br />


                    <h5 className="btn btn-outline-primary text-black mx-5 my-5 opBtn" onClick={() => {
                        navigate("./../../")
                    }}>
                        Back
                    </h5>
                    <Link to="../">
                        <button
                            className="btn btn-outline-danger mx-5 my-5 opBtn"
                            onClick={() => {
                                Delete();
                                navigate("./../")
                            }}
                        >
                            Delete
                        </button>
                    </Link>

                    <button className="btn btn-outline-secondary mx-5 my-5 opBtn" onClick={() => {
                        navigate("./Edit");
                    }}>
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}

export default SinglePrinterDetail;