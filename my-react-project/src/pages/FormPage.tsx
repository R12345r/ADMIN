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
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: 'url("./public/welcome.jpg")' }}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the CMS Admin</h1>
        {formSubmitted ? (
          <p className="text-green-500">Form Successfully Submitted!</p>
        ) : (
          registrationSuccess ? (
            <p className="text-green-500">Registration Successful!</p>
          ) : (
            <p className="text-green-500">You have successfully logged in!</p>
          )
        )}
        {/* You can add your form elements and content here */}
      </div>
    </div>
  );
};

export default FormPage;
