import { Breadcrumbs, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';

function HistoryBookTicket(props) {
        return(
            <div >
                <NavBar></NavBar>
                <div>
                    <div >
                    <div >
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" to="/" >
                                        Trang chủ
                                    </Link>
                                    
                                    <Typography>Lịch sử đặt vé </Typography>
                                </Breadcrumbs>
                            </div>
                            <div className="row">
                                <table  className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Mã vé</th>
                                    <th scope="col">Tên phim</th>
                                    <th scope="col">Lịch chiếu</th>
                                    <th scope="col">Rạp</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Thanh toán</th>
                                    </tr>
                                </thead>
                                </table>    
                            </div>
                        </div>
                    </div>
                </div>
        )
        
    
}

export default HistoryBookTicket;