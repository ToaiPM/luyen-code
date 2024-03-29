import * as request from '~/ultis/httpRequest';

export const search = async (q, type='less')=>{
    try {
        const res = await request.get(`users/search`,{
            params:{
                q,
                type
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
};

/** Hàm search nhận các tham số là từ khóa tìm kiếm
 * Hàm search trả về MẢNG dữ liệu [{dữ liệu}]
 */