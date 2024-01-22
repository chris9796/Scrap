import { useMutation } from 'react-query';
import axios from 'axios';


export const useSignup = () => {
  return useMutation(
    ({ username, password, email }) =>
      axios.post('/api/signup', { username, password, email }),
    {
      onError: (error) => {
        console.log("에러",error)
        // 에러 처리
      },
      onSuccess: (data) => {
        console.log("성공",data)
        // 성공 처리
      },
      onSettled: () => {
        // 요청 완료 후 처리
        console.log("요청 완료후 처리할 내용.")
      },
    }
  );
};