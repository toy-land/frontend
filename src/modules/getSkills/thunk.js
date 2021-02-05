import * as api from '@utils/api';
import { createPromiseThunk } from '@utils/asyncUtils';
import * as actions from './actions';

export const getSkillsThunk = createPromiseThunk(actions.GET_SKILLS, api.getSkillsApi);
