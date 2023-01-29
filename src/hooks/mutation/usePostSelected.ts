import SelectAPI from '@src/api/select';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

const usePostSelected = () => {
  const router = useRouter();

  return useMutation((data: ISelect) => SelectAPI.postSelected(data), {
    onSuccess: (data: AxiosResponse) => {
      router.push('/');
    },
  });
};

export default usePostSelected;
