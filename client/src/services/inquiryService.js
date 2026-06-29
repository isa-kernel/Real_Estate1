import API from "./api";

export const getInquiries = async (token) => {

  const response = await API.get(
    "/inquiries",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};