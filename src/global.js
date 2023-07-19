import Axios from "axios"

// Product

export const Insert_Product = (val) =>{
    return url.post("/api/insert",val)
}

export const View_Product = ()=>{
    return url.get("/api/view")
}

export const Delete_Product = (id)=>{
return url.delete(`/api/delete/${id}`)

}


// Party

export const Insert_Party=(val)=>{
    return url.post("/api/party_insert",val)
}


const url = Axios.create({
    baseURL:"http://127.0.0.1:4000"
})
