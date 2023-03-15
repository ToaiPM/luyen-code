import axios from "axios";
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})
export const get = async (path, option = {}) =>{
    const reponse = await request.get(path, option);
    return reponse.data;
}

/** Hàm get nhận 2 tham số path="đường dẫn" và option là từ khóa tìm kiếm 
 * Hàm get trả về OBJECT {dữ liệu}
 */