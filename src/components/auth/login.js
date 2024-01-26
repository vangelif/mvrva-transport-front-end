import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../redux/auth/authSlice';
import Authspinner from './authspinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user, isLoading, isSuccess, isError, message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      toast.success(message);
      navigate('/');
      dispatch(reset());
    }
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      user: {
        email,
        password,
      },
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Authspinner />;
  }

  return (
    <div style={{ marginLeft: '300px' }}>
      <h2>Login Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          {/* <label>Email</label> */}
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          {/* <label>Password</label> */}
          <input type="password" name="password" value={password} onChange={onChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
