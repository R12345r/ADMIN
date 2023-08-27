import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const MultiStepFormPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [geolocation, setGeolocation] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory(); // Initialize history from React Router

  const handleNextStep = () => {
    if (step === 2) {
      if (files.length === 0) {
        setErrorMessage('Please upload at least one file before proceeding.');
        return;
      }
    }
  
    if (step === 3) {
      handleFormSubmit();
      return;
    }
  
    setStep(step + 1);
    if (step === 2) {
      if (selectedOptions.length === 0) {
        setErrorMessage('Please select at least one option before proceeding.');
        return;
      }
    }
  
    if (step === 3) {
      handleFormSubmit();
      return;
    }
  
    setStep(step + 1); 
    if (step === 3) {
      handleFormSubmit();
      return;
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      // Implement form submission logic here
      setSuccessMessage('Form submitted successfully!');
      localStorage.setItem('formSubmissionStatus', 'success'); // Set the submission status
      history.push('/form'); // Navigate to "/form" route
    } else {
      setErrorMessage('Please fill in all required fields before submitting.');
    }
  };

  const handleOptionsSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setFiles(uploadedFiles);
    }
  };

  const captureGeolocation = () => {
    // Implement geolocation capturing logic here
    setGeolocation('Captured Geolocation');
  };

  const validateForm = () => {
    // Implement your validation logic here
    return name && email && phone && address;
  };

  useEffect(() => {
    if (step === 3) {
      setErrorMessage('');
      setSuccessMessage('');
    }
  }, [step]);
  return (
    <div className=" absolute inset-0  flex justify-center items-center h-screen bg-gradient-to-r from-cyan-400 via-cyan-500  to-pink-500">
      <div className="w-128 h-100 p-20 bg-white shadow-md rounded-lg dark:bg-gray-900 dark:text-gray-100 ">
        <h2 className="text-2xl mb-4 text-center">
          Step {step}: {step === 1 ? 'Basic Details' : step === 2 ? 'Multi-File Upload' : 'Multi-Field Select Dropdown'}
        </h2>

        {/* Step 1 (Basic Details) */}
        {step === 1 && (
      <div>
      <label>User's Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="block w-full pl-2 rounded-lg text-black"
      />
      <br />
    
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full pl-2 rounded-lg text-black"
      />
      <br />
    
      <label>Phone Number:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="block w-full pl-2 rounded-lg text-black"
      />
      <br />
    
      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        className="block w-full pl-2 rounded-lg text-black"
      />
    </div>
    
        )}

        {/* Step 2 (Multi-File Upload) */}
        {step === 2 && (
          <div>
            <label>Upload Files (PNG/PDF):</label>
            <div  className='pl-2 m-2'>
            <input type="file" multiple accept=".png,.pdf" onChange={handleFileUpload} />

            </div>
            <br />
            
            {/* Display uploaded files */}
            {files.length > 0 && (
              <div>
                <p>Uploaded Files:</p>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}

            <button onClick={captureGeolocation}>Capture Geolocation</button>
            {geolocation && <p>Geolocation: {geolocation}</p>}
          </div>
        )}

        {/* Step 3 (Multi-Field Select Dropdown) */}
        {step === 3 && (
          <div>
            <label>Select Options:</label>
            <div  className='my-1'>
            <select multiple value={selectedOptions} onChange={handleOptionsSelect}>
              <option value="option1" className='text-black'>Option 1</option>
              <option value="option2" className='text-black'>Option 2</option>
              <option value="option3" className='text-black'>Option 3</option>
            </select>
            </div>
         
            <br />
            {/* Display selected options */}
            {selectedOptions.length > 0 && (
              <div>
                <p>Selected Options:</p>
                <ul>
                  {selectedOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="flex justify-between mt-4">
      {step > 1 && <button onClick={handlePreviousStep} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Previous</button>}
      {step < 3 && <button onClick={handleNextStep} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Next</button>}
      {step === 3 && (
        <button onClick={handleFormSubmit} className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">Submit</button>
      )}
      <button onClick={() => {}} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Cancel</button>
    </div>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
