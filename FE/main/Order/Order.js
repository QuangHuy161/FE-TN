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
            <div class="row m-3 main_order">
                <div data-spy="scroll" class="col-sm-5 payment overflow-scroll m-2">
                    <DataTable
                        title="Món"
                        striped
                        columns={mon}
                        data={data_mon}
                    />
                    <div class="border-top border-secondary border-3 mt-5"></div>
                    <DataTable
                        title="Topping"
                        columns={topping}
                        data={data_topping}
                    />
                </div>
                <div class="col-sm m-2 gx-0">
                    <span class="font-monospace fs-3 text-dark">Menu</span>
                    <div data-spy="scroll" class=" menu_show row p-0 m-2">
                        <div class="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    A
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    A
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    B
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    B
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    C
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    C
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 p-0 col-sm-12 mb-4 mb-lg-0">
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                            <div>
                                <div class="order_img">
                                    <img src={image} alt="" />
                                </div>
                                <div class="order_img_name">
                                    D
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row order_info fixed-bottom border-top border-3 border-success p-3">
                <div class="col-sm text-start m-1">
                    <form class="container m-0 info_order" method="POST">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="form_label" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" class=""  aria-describedby="order_ten"/>
                        </div>

                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="form_label" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="text" class=""  aria-describedby="order_sdt"/>
                        </div>
                       
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="form_label">Tiền khách đưa</span>
                            </div>
                            <input type="text" class="" aria-label="Amount (to the nearest dollar)"/>
                            <div class="input-group-append">
                                <span class="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div class=" col-sm button_payment text-end">
                    <button class="bt btn rounded-1">Thanh Toán</button>
                </div>
            </div>
        </div>
    )
}

export default Order;