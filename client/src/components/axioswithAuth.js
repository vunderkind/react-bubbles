import axios from 'axios';

export const axioswithAuth = () => {
    const token = "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    })
}