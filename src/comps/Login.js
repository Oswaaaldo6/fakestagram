import React from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../firebase/config';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from 'firebase/auth';

function Login() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/home'; 
        navigate(path);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.info(token);
        console.info(user);

        routeChange();
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.info(errorCode);
        console.info(errorMessage);
        console.info(email);
        console.info(credential);
        });
    }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      console.info(accessToken);
      console.info(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);

      console.info(errorCode);
      console.info(errorMessage);
      console.info(email);
      console.info(credential);
    });
  }

  const signOutGoogle = () => {
    signOut(auth).then(() => {
      console.info('saliendo');
    }).catch((error) => {
      console.error(error);
    });
  }

  const signOutFacebook = () => {
    signOut(auth).then(() => {
      console.log('centeno kk')
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
      <button onClick={signInWithGoogle}>
        GOOGLE
      </button>
      <button onClick={signInWithFacebook}>
        FACEBOOK
      </button>

      <button onClick={signOutGoogle}>
        LOGOUT GOOGLE
      </button>

      <button onClick={signOutFacebook}>
        LOGOUT FACEBOOK
      </button>
    </>
    /*
    <div className="App">
      <Home/>
    </div>
    */
  );
}

export default Login;