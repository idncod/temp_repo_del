import React, { useState } from 'react';
import HireMeModal from './HireMeModal';
import axios from 'axios'

  const HireMe = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  }
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Access the selected file
      const file = e.target.files[0];
    
      // Validate the file format (extension)
      if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        // File format is valid, handle the file upload logic here
        console.log('File uploaded:', file);
      } else {
        // Invalid file format, show an error message to the user
        console.error('Invalid file format. Please upload a PDF or DOCX file.');
      }
    };
    
    //Handling the submit
    const HireMeForm = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/submitEnquiry', formData);
          alert('Enquiry submitted successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          console.error('Error submitting enquiry:', error);
          alert('Failed to submit enquiry. Please try again later.');
        }
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-semibold mb-4">Hire Me</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
