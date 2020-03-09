import React from 'react';

const BackendErrorMessage = ({ backendErrorMessage }) => {
  const messages = Object.entries(backendErrorMessage).map(([key, value]) => `${key} ${value}`);
  return (
    <ul className="error-messages">
      {
                messages.map((errorMessage) => (
                  <li key={errorMessage}>{errorMessage}</li>
                ))
            }
    </ul>
  );
};

export default BackendErrorMessage;
