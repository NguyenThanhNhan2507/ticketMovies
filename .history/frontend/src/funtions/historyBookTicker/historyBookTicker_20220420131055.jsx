import { Breadcrumbs, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


function HistoryBookTicket(props) {
        return(
            <div >
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
                        
                        </div>
                    </div>
                </div>
        )
        
    
}

export default HistoryBookTicket;