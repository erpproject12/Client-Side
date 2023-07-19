import Axios from "axios"



export const Insert_Product = (val) =>{
    return url.post("/api/insert",val)
}

export const View_Product = ()=>{
    return url.get("/api/view")
}

export const Single_Product = (id) => {
    return url.get(`/api/view/${id}`)
}

export const Update_Product = (id,product) =>{
    return url.put(`/api/update/${id}`,product)
}

export const DeleteProduct =(id)=>{
    return url.delete(`/api/delete/${id}`) 
}


// Party

export const Insert_Party=(val)=>{
    return url.post("/api/party_insert",val)
}

export const View_Party=()=>{
    return url.get("/api/party_view")
}



const url = Axios.create({
    baseURL:"http://127.0.0.1:4000"
})
