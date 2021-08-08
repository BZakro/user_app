import { API, Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../graphql/mutations';

//from graphql
const Login = () => {
  const history = useHistory();
  const [isSignedUp, setIsSignedUp] = useState()
  const [userSub, setUserSub] = useState()
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    username: '',
    confirmationCode: ''
  });

  const signUp = async () => {
    const { username, password, email } = formState

    try {
      const {user, userSub} = await Auth.signUp({
        username: username,
        password,
        attributes: {
          email,
        }
      });
      setIsSignedUp(true)
      setUserSub(userSub)
      const userToSave = {username, email, id: userSub}
      await API.graphql({ query: createUser, variables: { input: userToSave } });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  const confirmSignUp = async () => {
    const { username, confirmationCode } = formState
    try {
      const res = await Auth.confirmSignUp(username, confirmationCode);
      console.log(res);
      history.push(`/profile/${userSub}`)
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
  
  const login = async () => {
    const { username, password } = formState
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      history.push(`/profile/${user.attributes.sub}`)
    } catch (error) {
      console.log('error signing in', error);
    }
  }



  const onHandleSubmit = () => {
    formState.login ? login() : signUp()
  }

  return (
    <main>
      {!isSignedUp ?
        (<div>
          <h4 className="mv3">
            {formState.login ? 'Login' : 'Sign Up'}
          </h4>
          <div className="flex flex-column">
            <input
              value={formState.username}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  username: e.target.value
                })
              }
              type="text"
              placeholder="Your name"
            />
            {!formState.login && (
              <input
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                }
                type="text"
                placeholder="Your email address"
              />
            )}
            <input
              value={formState.password}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value
                })
              }
              type="password"
              placeholder="Choose a safe password"
            />
          </div>
          <div className="flex mt3">
            <button
              className="pointer mr2 button"
              onClick={onHandleSubmit}
            >
              {formState.login ? 'login' : 'create account'}
            </button>
            <button
              className="pointer button"
              onClick={(e) =>
                setFormState({
                  ...formState,
                  login: !formState.login
                })
              }
            >
              {formState.login
                ? 'need to create an account?'
                : 'already have an account?'}
            </button>
          </div>
        </div>)
        :
        <div>
          <h4>
            We have sent a confirmation code to your email,
          </h4>
          <h5>Please confirm your signup</h5>
          <input type="text" placeholder="confirmation code" value={formState.confirmationCode} onChange={(e) =>
            setFormState({
              ...formState,
              confirmationCode: e.target.value
            })
          } />
          <button onClick={confirmSignUp}>Confirm</button>
        </div>
      }
    </main>
  );
};

export default Login;

