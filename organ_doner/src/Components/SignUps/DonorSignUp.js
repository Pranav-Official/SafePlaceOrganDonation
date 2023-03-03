import React, { useState } from 'react';

function DonorSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResidentialAddressChange = (event) => {
    setResidentialAddress(event.target.value);
  };

  const handleConnectWallet = () => {
    // Add logic to connect to Metamask wallet
  };

  const handleSignup = () => {
    // Add logic to handle signup
  };

  return (
    <div className='DonorSignUpBox'>
      <h1>Sign Up As A Donor</h1>
      <form className='SignUpGrid'>
        <label>
          First Name:
          <p><input type="text" value={firstName} onChange={handleFirstNameChange} /></p>
        </label>
        <label>
          Last Name:
          <p><input type="text" value={lastName} onChange={handleLastNameChange} /></p>
        </label>
        <label>
          Phone Number:
          <p><input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} /></p>
        </label>
        <label>
          Email:
          <p><input type="email" value={email} onChange={handleEmailChange} /></p>
        </label>
        <label className='residential-address'>
          Residential Address:
          <p><input  type="text" value={residentialAddress} onChange={handleResidentialAddressChange} /></p>
        </label>
      </form>
      <button className='metamask-button' onClick={handleConnectWallet}>Connect to Metamask Wallet</button>
      <button className='Sing Up' onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default DonorSignup;
