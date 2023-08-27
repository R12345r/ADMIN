import React, { useState, useEffect } from 'react';

const FormPage: React.FC = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const registrationSuccessful = localStorage.getItem('registrationSuccessful') === 'true';
    if (registrationSuccessful) {
      setRegistrationSuccess(true);
      localStorage.removeItem('registrationSuccessful');
    }

    const submissionStatus = localStorage.getItem('formSubmissionStatus');
    if (submissionStatus === 'success') {
      setFormSubmitted(true);
      localStorage.removeItem('formSubmissionStatus');
    }
  }, []);

  return (
    <div
      className=" absolute inset-0 flex items-center justify-center h-screen bg-gradient-to-l from-pink-200 to-indigo-600"

    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the CMS Admin</h1>
        {formSubmitted ? (
          <p className="text-green-500">Form Successfully Submitted!</p>
        ) : (
          registrationSuccess ? (
            <p className="text-green-500">Registration Successful!</p>
          ) : (
            <h6 className="text-green-900">You have successfully logged in!</h6>
          )
        )}
  
      </div>
    </div>
  );
};

export default FormPage;
