import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const HttpKit = {
  getAllCategories: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/all-categories`);
      return res.data; 
    } catch (error) {
      console.log("Error to fetch All category:", error);
      return { category: [] }; // Return an empty array if error occurs
    }
  },
  fetchDuasBySubcatId: async(id)=>{
    try {
      const res = await axios.get(`${BASE_URL}/duas/${id}`)
      return res.data
    } catch (error) {
      console.log("Error to fetch all duas:", error);
      return { duas: [] }; 
    }
  }
}
export default HttpKit;