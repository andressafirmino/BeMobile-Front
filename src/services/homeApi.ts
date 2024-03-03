import api from './api';

export async function getEmployees() {
  const response = await api.get(`/employees`);
  return response.data;
}
