import axios from './axiosConfig';

interface User {
  username: string;
}

interface Portfolio {
  portfolio: Record<string, any>;
  usdtBalance: number;
}

export const userService = {
  createUser: (userData: User) => {
    return axios.post('/users', userData);
  },

  getUser: (id: string) => {
    return axios.get(`/users/${id}`);
  },

  updateUser: (id: string, userData: Partial<User>) => {
    return axios.put(`/users/${id}`, userData);
  },

  deleteUser: (id: string) => {
    return axios.delete(`/users/${id}`);
  },

  getPortfolio: (id: string) => {
    return axios.get<Portfolio>(`/users/${id}/portfolio`);
  },
};
