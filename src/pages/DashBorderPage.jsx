import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashBorderPage = () => {
  useLogOutRedirect();
  return <div>DashBorder</div>;
};
