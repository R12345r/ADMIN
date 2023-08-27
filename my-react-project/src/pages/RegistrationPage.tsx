import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const history = useHistory();

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && password) {
      const userData = {
        name,
        email,
        password
      };

      // Simulate successful registration
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsRegistrationSuccessful(true);
      setRegistrationError('');
      
      // Redirect to the multistep form page
      history.push('/multistepform'); // Replace with the actual route of the multistep form page
    } else {
      setRegistrationError('Please fill in all fields.');
      setIsRegistrationSuccessful(false);
    }
  };

  return (
<div className="page-container"> 


<div className=" absolute inset-0   flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <form className="bg-white shadow-md rounded-xl px-10 py-8 w-96  dark:bg-gray-900 dark:text-gray-100" onSubmit={handleRegistration}>
        <h2 className="text-2xl font-semibold mb-6 text-center">Registration Page</h2>
      
       {registrationError && <p className="text-red-500 mb-4">{registrationError}</p>}
       {isRegistrationSuccessful && <p className="text-green-500 mb-4">Registration successful!</p>}
  
  <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500 text-black"
            placeholder="Password"
            required
          />
        </div>
  
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
    </div>


     
  
  
  );
};

export default RegistrationPage;



