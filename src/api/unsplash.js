import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 29d8d9b738b2efbc3d630ed0cccca13aad04b08147118612dad1fe824b05593e'
    }
});