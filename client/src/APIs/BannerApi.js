import axios from 'axios';
const API_URL = process.env.REACT_APP_API_BASE_URL + '/banners';



// Get all banners
export const getBanners = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Add a new banner
export const addBanner = async (bannerData) => {
    try {
        const formData = new FormData();
        formData.append('title', bannerData.title);
        formData.append('subTitle', bannerData.subTitle);
        formData.append('bannerCover', bannerData.bannerCover);
        formData.append('isPublished', bannerData.isPublished);

        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Update an existing banner
export const updateBanner = async (id, bannerData) => {
    try {
        const formData = new FormData();
        formData.append('title', bannerData.title);
        formData.append('subTitle', bannerData.subTitle);
        formData.append('bannerCover', bannerData.bannerCover);
        formData.append('isPublished', bannerData.isPublished);

        const response = await axios.put(`${API_URL}/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Delete a banner
export const deleteBanner = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};