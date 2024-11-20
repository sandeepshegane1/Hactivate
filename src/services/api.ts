import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// Add token to requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (data: any) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};

export const donations = {
  create: async (data: any) => {
    const response = await api.post('/donations', data);
    return response.data;
  },
  getAll: async () => {
    const response = await api.get('/donations');
    return response.data;
  },
  updateStatus: async (id: string, status: string) => {
    const response = await api.patch(`/donations/${id}/status`, { status });
    return response.data;
  }
};

export const requests = {
  create: async (data: any) => {
    const response = await api.post('/requests', data);
    return response.data;
  },
  getAll: async () => {
    const response = await api.get('/requests');
    return response.data;
  },
  updateStatus: async (id: string, status: string, donationId?: string) => {
    const response = await api.patch(`/requests/${id}/status`, { status, donationId });
    return response.data;
  }
};

export default api;