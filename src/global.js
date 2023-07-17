import Axios from "axios"
export const Insert_Product = (val) =>{
    return url.post("/api/insert",val)
}

export const View_Product = ()=>{
    return url.get("/api/view")
}
const url = Axios.create({
    baseURL:"http://127.0.0.1:4000"
})
