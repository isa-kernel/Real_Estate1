import API
from "./api";

export const getStats =
async(token)=>{

const response =
await API.get(
"/dashboard",
{
headers:{
Authorization:
`Bearer ${token}`
}
}
);

return response.data;

};