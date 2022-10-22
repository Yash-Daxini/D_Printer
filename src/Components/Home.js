import './Style.css'
const Home = () => {

    return (
        <div>
            <div id="HomeStyle" className='bg-info py-5 px-5 text-center'>
                <h1 data-text="Print That You Imagine">Print That You Imagine</h1>
            </div>
            <div id="imageBox" className="bg-info ontainer-fluid text-center py-5 px-5 d-flex justify-content-center">

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://asia.canon/media/image/2021/02/18/7ee598480e9c47bab6eba33c7df37bfb_Professional+Photo+Printers.png" class="d-block w-100" alt="Can Not Load" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4KrM9-QLP5JQIJbuSJulvQWqV_0c8nOi5w&usqp=CAU" class="d-block w-100" alt="Can Not load" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS4Po6mlQDcqLBB4_x5KnBNKps1mpxBQTIQ&usqp=CAU" class="d-block w-100" alt="Can not load" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className='text-center my-5'><h2>Latest Products</h2></div>
            <div className="LatestProductImg my-2">
                <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666266054/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/pcp_2split_Gaminglaptops_11Oct2022_szvdve.png/mxw_1242,f_auto" alt="can't load" />
                <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666266055/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/pcp_2split_Intel_17Oct2022_nnrsph.png/mxw_1242,f_auto" alt="can't load" />
            </div>

            <div className="homeImgL2 my-4">
                <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865070/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/D_Singlesplit_LaptopPCP_03Oct2022/D_Singlesplit_LaptopPCP_03Oct2022_etpelq.png/mxw_1440,f_auto" alt="Can Not Load" />
            </div>


            <div className='text-center my-5'><h2>Top Products</h2></div>
            <div className="topProducts">
                <div className="card my-3 productImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995689/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%203/top%20accessories/pcp_topaccessories_printers_21sept2022_d3u41l.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="can not load"
                    />
                    <h5>Printers</h5>
                </div>
                <div className="card my-3 productImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995689/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%203/top%20accessories/pcp_topaccessories_monitors_21sept2022_yoz6mq.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="Can Not Load"
                    />
                    <h5>Monitors</h5>
                </div>
                <div className="card my-3 productImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995689/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%203/top%20accessories/pcp_topaccessories_laptop_21sept2022_t0fru5.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="Can Not load"
                    />
                    <h5>Laptop Accessories</h5>
                </div>
                <div className="card my-3 productImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995689/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%203/top%20accessories/pcp_topaccessories_bags_21sept2022_ornhdr.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="Can not load"
                    />
                    <h5>Laptop Bags</h5>
                </div>
            </div>



            <div className='text-center my-5'><h2>OS You Like</h2></div>
            <div className="homeImgL1">
                <div className="card my-3 homeImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_macos_21sept2022_kdib6r.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="Can't Load"
                    />
                </div>
                <div className="card my-3 homeImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_windowsos_21sept2022_hc73th.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="Can't load"
                    />
                </div>
                <div className="card my-3 homeImg text-center">
                    <img
                        src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_chromebookos_21sept2022_thsgto.png/mxw_1440,f_auto"
                        className="card-img-top py-2"
                        alt="can't Load"
                    />
                </div>
            </div>

            <div className='text-center my-5'><h2>Experiance the Advantage</h2></div>
            <div className="homeImgL2 my-5">
                <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664193290/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/UPDATE/PCP_Singlesplit_23Sep2022_ahitzz.png/mxw_1440,f_auto" alt="can't load" />
            </div>


        </div>
    )
}

export default Home;