import React, { useEffect } from 'react';
import '../../pages/Dashboard/Dashboard.css'

function ConfirmPassword({
  confirmPassword,
  setConfirmPassword,
  titleInput1,
  titleInput2,
  setPasswordError,
  setIsPasswordMatch,
  password,
  confirmPasswordValue,
  setPasswordValue,
  setConfirmPasswordValue,
}) {
  useEffect(() => {
    if (password === confirmPasswordValue) {
      setIsPasswordMatch(true);
      setPasswordError(''); // Clear any previous error messages
    } else {
      setIsPasswordMatch(false);
      setPasswordError('Passwords do not match');
    }
  }, [password, confirmPasswordValue, setIsPasswordMatch, setPasswordError]);

  return (
    <div className='confirmPassword-dash'>
      <label htmlFor="password" className='label-password'>{titleInput1}</label>
      <input
        type="password"
        name="password"
        placeholder={titleInput1}
        value={password}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <label htmlFor="confirmPassword" className='label-password' >{titleInput2}</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder={titleInput2}
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
    </div>
  );
}

export default ConfirmPassword;
