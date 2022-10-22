import {useEffect , useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'

const Laptops = () => {

    const [laptopObj , setLaptopObj] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://62da16fd5d893b27b2f0ebab.mockapi.io/laptop')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setLaptopObj(data);
                console.log(data);
            })
    },[])

    const laptopDetails = laptopObj.map((Obj) => {
        return (
            <div className="col-3">
                <Link to={"./SingleLaptopDetail/" + Obj.id} style={{ textDecoration: "none" }}>
                    <div className="col">
                        <div className="card my-3 hoverclass .laptopImg text-center">
                            <div className="ba"></div>
                            <img
                                src={Obj.LaptopImage}
                                className="card-img-top py-2"
                                alt="Can't Load"
                            />
                            <div className="cardTitle">
                                <h6 className="py-3 card-title text-black">
                                    <b>{Obj.LaptopName}</b>
                                </h6>
                                <h6 className="card-title text-black">
                                    {Obj.LaptopModel}
                                </h6>
                            </div>
                            <div className="my-4 card-body text-black content">
                                <h5>{Obj.LaptopMaker}</h5>
                                <hr />
                                <h5>₹ {Obj.LaptopPrice}</h5>
                                <button className="btn btn-outline-info" onClick={() => {
                                    navigate('./D_Printer/SingleLaptopDetail/');
                                }}><span>View</span></button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <h1 className="my-3">Laptops</h1>
            <div className="row">{laptopDetails}</div>
        </div>
    )
}

export default Laptops;