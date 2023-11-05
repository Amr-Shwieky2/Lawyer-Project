import React from 'react';
import ConfirmPassword from './ConfirmPassword/ConfirmPassword';

function PasswordSection({
  confirmPassword,
  setConfirmPassword,
  password,
  setPassword,
  isPasswordMatch,
  setIsPasswordMatch,
  passwordError,
  setPasswordError,
  handleChangePassword,
}) {
  return (
    <div className='password'>
      <ConfirmPassword
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        titleInput1={"New Password"}
        titleInput2={"Confirm New Password"}
        setPasswordError={setPasswordError}
        setIsPasswordMatch={setIsPasswordMatch}
      />
      {passwordError && <div className="error-message">{passwordError}</div>}
      <button className="home-btn" onClick={handleChangePassword}>
        Change Password
      </button>
    </div>
  );
}

export default PasswordSection;
