import axios from 'axios'
import { Toast } from '../components/atoms/Toast'

async function checkIn(userId) {
  try {
    const res = await axios.post(`/api/check-in/${userId}`)
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleApiError(error)
    }
    throw error
  }
}

function handleApiError(error) {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        Toast.error('Bad Request: The request is malformed or contains invalid parameters.')
        break
      case 401:
        Toast.error('Unauthorized: The user is not authenticated.')
        break
      case 403:
        Toast.error('Forbidden: The user is not authorized to perform the check-in.')
        break
      case 422:
        Toast.error('Unprocessable Entity: The request body or parameters are in an incorrect format.')
        break
      case 500:
        Toast.error('Internal Server Error: An unexpected error has occurred on the server.')
        break
    }
  }
}

export { checkIn }
