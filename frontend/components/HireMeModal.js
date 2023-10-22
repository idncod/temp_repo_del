import React, { useState } from 'react';
import axios from 'axios';

const HireMeModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    // If the input is a file input, set the file in the form data
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('resume', formData.resume);

      await axios.post('http://localhost:3001/submitEnquiry', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Enquiry submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        resume: null,
      });
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-600">
              Job Description (.PDF or .DOCX)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.docx"
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default HireMeModal;


