import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggenIn = useSelector(state => state.user.isLoggenIn);
  useEffect(() => {
    if (!isLoggenIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggenIn, navigate]);
};
