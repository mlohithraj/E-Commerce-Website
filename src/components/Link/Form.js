import React, { useRef, useState, useContext } from 'react'; // Import useContext
import classes from './styles.css';
import { useHistory } from 'react-router-dom';
// import AuthContext from './context/auth-context'; // Import AuthContext
import AuthContext from '../context/auth-context';

const Form = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Get the context value
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATsM8U38z0WQGEo8exGT9eE9QMsmbr8pE',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication Failed';

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          // Set user email in context after successful login
          authCtx.login(data.email);
          // Redirect to home page or desired route
          history.replace('/'); // Redirect to home page
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    // Perform form submission or validation logic here
    console.log('Email:', enteredEmail);
    console.log('Password:', enteredPassword);
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
