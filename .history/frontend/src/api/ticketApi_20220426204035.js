import axiosApi from "./axiosApi";

const ticketApi = {
    getTicketApi(){
        const url = `/QuanLyDatVe/LayDanhSachPhongVe`;
        return axiosApi.get(url , { params: params } )
    }
}