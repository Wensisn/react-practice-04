import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/mySlice/mySlice';

export const Layout = () => {
  //   const distpatch = useDispatch();
  //   const value = useSelector(state => state.myValue);

  return (
    <>
      <div>
        <AppBar />
        <Outlet />
      </div>
      {/* <div>{value}</div>
      <button onClick={() => distpatch(increment(100))}>increment</button>
      <button onClick={() => distpatch(decrement(50))}>decrement</button> */}
    </>
  );
};
