import { useState } from 'react';
import { auth } from '../config/firebase-config';

export function usePasswordChange() {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const handleChangePassword = async () => {
    if (isPasswordMatch) {
      if (password) {
        try {
          const currentUser = auth.currentUser;
          await currentUser.updatePassword(password);
          alert('Password changed successfully');
        } catch (error) {
          alert(error.message);
        }
      } else {
        setPasswordError('Please enter a new password');
      }
    } else {
      setPasswordError('Passwords do not match');
    }
  };

  return {
    confirmPassword,
    setConfirmPassword,
    password,
    setPassword,
    isPasswordMatch,
    setIsPasswordMatch,
    passwordError,
    setPasswordError,
    handleChangePassword,
  };
}
