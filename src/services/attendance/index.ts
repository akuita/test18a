import { useMutation, UseMutationOptions } from 'react-query';
import { recordEmployeeCheckIn, RecordEmployeeCheckInParamsType } from './requests';

export const useRecordEmployeeCheckIn = (
  options?: UseMutationOptions<
    any,
    unknown,
    RecordEmployeeCheckInParamsType,
    unknown
  >,
) => {
  return useMutation<any, unknown, RecordEmployeeCheckInParamsType, unknown>(
    recordEmployeeCheckIn,
    options
  );
};