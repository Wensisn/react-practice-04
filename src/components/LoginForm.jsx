import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/userSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const distpatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.login.value);
    distpatch(logIn(form.login.value));
    e.target.reset();
    navigate('/dashBorderPage', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <button type="submit">Log In</button>
    </form>
  );
};
