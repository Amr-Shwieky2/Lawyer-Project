import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';

export function useSignOut() {
  const history = useNavigate();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      history('/logIn');
    });
  };

  return handleSignOut;
}
