import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
export const AppBar = () => {
  const isLoggenIn = useSelector(state => state.user.isLoggenIn);
  return (
    <header>
      <nav>
        {!isLoggenIn && (
          <Link to="/login" style={{ margin: 50 }}>
            Log In
          </Link>
        )}
        {isLoggenIn && <Link to="/dashBorderPage">DashBorderPage</Link>}
      </nav>
      {isLoggenIn && <UserMenu />}
    </header>
  );
};
