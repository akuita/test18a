import { requestAuthenticated } from '@utils/request';
import axios from 'axios';

const ENDPOINTS = {
  CHECK_IN: '/attendance/check-in',
};

export type RecordEmployeeCheckInParamsType = {
  employee_id: number;
};

export const recordEmployeeCheckIn = async (params: RecordEmployeeCheckInParamsType): Promise<any> => {
  try {
    const response = await requestAuthenticated({
      url: ENDPOINTS.CHECK_IN,
      method: 'POST',
      data: params,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      switch (status) {
        case 400:
          throw new Error('Bad Request: The request is malformed or contains invalid parameters.');
        case 401:
          // Handle token refresh or redirect to login
          throw new Error('Unauthorized: Please authenticate to proceed.');
        case 403:
          throw new Error('Forbidden: You do not have permission to perform this action.');
        case 422:
          throw new Error('Unprocessable Entity: The request body or parameters are in an incorrect format.');
        case 500:
          throw new Error('Internal Server Error: An unexpected error has occurred.');
        default:
          throw new Error('An unknown error occurred.');
      }
    } else {
      throw new Error('An error occurred while processing your request.');
    }
  }
};