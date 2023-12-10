import axios, { AxiosPromise } from 'axios';
import { PostData } from '../interface/PostData';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080';

const postData = async (data: PostData): AxiosPromise<any> => {
  const reponse = axios.post(API_URL + '/posts', data);
  return reponse;
};

export function usePostDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['post-data']);
    }
  });

  return mutate;
}
