import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PostData[]> => {
  const reponse = axios.get(API_URL + '/posts');
  return reponse;
};

export function usePostData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['post-data'],
    retry: 2
  });

  return {
    ...query,
    data: query.data?.data
  };
}
