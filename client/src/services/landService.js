import API from "./api";

export const getLands = async () => {

    const response = await API.get("/lands");

    return response.data;

};

export const createLand = async (data, token) => {

    const response = await API.post(

        "/lands",

        data,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

    return response.data;

};

export const updateLand = async (id, data, token) => {

    const response = await API.put(

        `/lands/${id}`,

        data,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

    return response.data;

};

export const deleteLand = async (id, token) => {

    const response = await API.delete(

        `/lands/${id}`,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

    return response.data;

};