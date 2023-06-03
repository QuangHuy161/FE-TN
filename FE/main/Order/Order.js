import "./Order.scss"
import DataTable from "react-data-table-component";
import image from "../../../img/img_drink.jpg"
function Order(){

    let mon=[
        {
            name: "STT",
            selector: row => row.stt,
        },
        {
            name: "Tên món",
            selector: row => row.ten,
        },
        {
            name: "Số Lượng",
            selector: row => row.soluong,
        },
        {
            name: "Giá",
            selector: row => row.gia,
        }
        
    ]

    let data_mon=[
        {
            stt:1,
            ten:'Trà sữa trân châu',
            soluong:1,
            gia:'15000'
        },
        {
            stt:2,
            ten:'Trà sữa trân châu đường đen',
            soluong:3,
            gia:'15000'
        },
        {
            stt:3,
            ten:'Trà sữa trân châu đường đen',
            soluong:3,
            gia:'15000'
        },
        {
            stt:4,
            ten:'Trà sữa trân châu đường đen',
            soluong:3,
            gia:'15000'
        },
     
    ]
    let topping=[
        {
            name: "STT",
            selector: row => row.stt,
        },
        {
            name: "Tên món",
            selector: row => row.ten,
        },
        {
            name: "Giá",
            selector: row => row.gia,
        }
        
    ]

    let data_topping=[
        {
            stt:1,
            ten:'Trân châu đen',
            gia:'5000'
        },
        {
            stt:2,
            ten:'trân châu trắng',
            gia:'5000'
        },
    ]

    return(
        <div id="order">
            <div className="row m-3 main_order">
                <div data-spy="scroll" className="col-sm-5 payment overflow-scroll m-2">
                    <DataTable
                        title="Món"
                        striped
                        columns={mon}
                        data={data_mon}
                    />
                    <div className="border-top border-secondary border-3 mt-5"></div>
                    <DataTable
                        title="Topping"
                        columns={topping}
                        data={data_topping}
                    />
                </div>
                <div className="col-sm m-2 gx-0">
                    <span className="font-monospace fs-3 text-dark">Menu</span>
                    <div data-spy="scroll" className=" menu_show row p-0 m-2">
                        <div className="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    A
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    B
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    C
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div className="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div className="order_img_name">
                                    D
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row order_info fixed-bottom border-top border-3 border-success p-3">
                <div className="col-sm text-start m-1">
                    <form className="container m-0 info_order" method="POST">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" className=""  aria-describedby="order_ten"/>
                        </div>

                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="text" className=""  aria-describedby="order_sdt"/>
                        </div>
                       
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label">Tiền khách đưa</span>
                            </div>
                            <input type="text" className="" aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className=" col-sm button_payment text-end">
                    <button className="bt btn rounded-1">Thanh Toán</button>
                </div>
            </div>
        </div>
    )
}

export default Order;