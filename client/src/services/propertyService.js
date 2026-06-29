import API from "./api";

export const getProperties = async (params = {}) => {
  const response = await API.get("/properties", { params });
  return response.data.properties; // ✅ return just the array
};


export const getProperty =
async(id)=>{

const response =
await API.get(`/properties/${id}`);

return response.data;

};

export const createProperty =
async(data,token)=>{

const response =
await API.post(

"/properties",

data,

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

return response.data;

};

export const deleteProperty =
async(id, token)=>{

  const response =
  await API.delete(

    `/properties/${id}`,

    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }

  );

  return response.data;

};

export const updateProperty =
async(id,data,token)=>{

const response =
await API.put(

`/properties/${id}`,

data,

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

return response.data;

};

export const getFeaturedProperties = async () => {

  const response = await API.get(

    "/properties/featured"

  );

  return response.data;

};