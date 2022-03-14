import {useQuery} from 'react-query';
import * as api from '../api';

export function useGetLandmarks(city) {
  return useQuery(['landmarks', city], api.getLandmarks);
}
