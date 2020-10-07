import api from "./apiHelper"

export const getTaskList = async () => {
  try {
    const response = await api.get("/task-list/")
    return response.data
  } catch (error) {
    throw error
  }
}
export const getTaskDetail = async (id) => {
  try {
    const response = await api.get(`/task-detail/${id}/`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const createTask = async (taskData) => {
  try {
    const response = await api.post('/task-create/', taskData)
    return response.data
  } catch (error) {
    throw error
  }
}
export const updateTask = async (id, taskData) => {
  try {
    const response = await api.post(`/task-update/${id}/`, taskData)
    return response.data
  } catch (error) {
    throw error
  }
}
export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task-delete/${id}/`)
    return response.data
  } catch (error) {
    throw error
  }
}