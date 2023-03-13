import "./Order.scss"
import DataTable from "react-data-table-component";
import image from "../../../img/img_drink.jpg"
function Order(){

    let columns=[
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

    let data=[
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
    ]

    return(
        <div id="order">
            <div class="row gx-0 m-3 main_order">
                <div class="col-sm-5 payment m-2">
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </div>
                <div data-spy="scroll" class="col-sm m-2 gx-0 menu_show row">
                    <div class="col-lg-4 col-sm-12 mb-4 mb-lg-0">
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
                    <div class="col-lg-4 col-sm-12 mb-4 mb-lg-0">
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
                    <div class="col-lg-4 col-sm-12 mb-4 mb-lg-0">
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
                    
                </div>

            </div>
            <div class="order_info fixed-bottom border-top m-3">
                <div class="text-start m-1">
                    <form class="container w-25 m-0 info_order" method="POST">
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" class="form-control"  aria-describedby="order_ten"/>
                        </div>

                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="text" class="form-control"  aria-describedby="order_sdt"/>
                        </div>
                       
                        <div class="input-group mb-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Tiền khách đưa</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div class="input-group-append">
                                <span class="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div class="button_payment text-end">
                    <button class="btn rounded-1">Thanh Toán</button>
                </div>
            </div>
        </div>
    )
}

export default Order;