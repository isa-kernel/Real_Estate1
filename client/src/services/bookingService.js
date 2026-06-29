import API from "./api";

export const getBookings = async (token) => {

    const response = await API.get(
        "/bookings",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};