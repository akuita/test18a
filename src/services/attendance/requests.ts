import { request } from '@utils/request';
import axios from 'axios';
import AuthenticationSessionStorage from '@utils/authenticationSession';

export type CheckInRequestBody = {
  employee_id: number;
  location: string;
};

export type CheckInResponse = {
  timestamp: string;
  employee_id: number;
  location: string;
};

export const checkInEmployee = async (body: CheckInRequestBody): Promise<CheckInResponse> => {
  try {
    const session = await AuthenticationSessionStorage.getAuthenticationAsync();
    const accessToken = session?.accessToken;

    const response = await request({
      url: '/api/attendance/check-in',
      method: 'POST',
      data: body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Unauthorized: No valid access token provided.');
      }
      if (error.response?.status === 403) {
        throw new Error('Forbidden: User is not authorized to perform this action.');
      }
      // Handle other API errors as needed
    }
    throw error;
  }
};
