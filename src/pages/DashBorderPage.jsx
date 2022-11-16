import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

// const useLogOutRedirect = () => {
//   const navigate = useNavigate();
//   const isLoggenIn = useSelector(state => state.user.isLoggenIn);
//   useEffect(() => {
//     if (!isLoggenIn) {
//       navigate('/login', { replace: true });
//     }
//   }, [isLoggenIn, navigate]);
// };

export const DashBorderPage = () => {
  useLogOutRedirect();
  return <div>DashBorder</div>;
};
