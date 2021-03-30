import { createAsyncAction } from '@utils/asyncUtils';

export const INITIALIZE_OPTION = 'getOption/INITIALIZE_OPTION';
export const initializeOption = () => ({
  type: INITIALIZE_OPTION,
});

export const getOptionAsyncAction = createAsyncAction('getOption/GET_OPTION');
