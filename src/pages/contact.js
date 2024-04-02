import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import styled from "styled-components";

const client = generateClient();

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiry: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await client.post('apiName', '/path', {
                body: formData,
            });
            alert('Message sent!');
        } catch (err) {
            console.error('Error submitting form:', err);
            alert('Failed to send message.');
        }
    };

    return (
        <MainContainer>
            <SectionWrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <FormLabel style={{ color: '#090fff' }}>
                        Name
                        <FormInput type="text" name="name" value={formData.name} onChange={handleChange} />
                    </FormLabel>
                    <FormLabel style={{ color: '#090fff' }}>
                        Email
                        <FormInput type="email" name="email" value={formData.email} onChange={handleChange} />
                    </FormLabel>
                    <FormLabel style={{ color: '#090fff' }}>
                        Phone
                        <FormInput type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </FormLabel>
                    <FormLabel style={{ color: '#090fff' }}>
                        Company
                        <FormInput type="text" name="company" value={formData.company} onChange={handleChange} />
                    </FormLabel>
                    <FormLabel style={{ color: '#090fff' }}>
                        Enquiry Details
                        <FormInput type="text" name="enquiry" value={formData.enquiry} onChange={handleChange} />
                    </FormLabel>
                    <FormLabel style={{ color: '#090fff' }}>
                        Message
                        <FormTextarea name="message" value={formData.message} onChange={handleChange} />
                    </FormLabel>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </FormContainer>
            </SectionWrapper>
        </MainContainer>
    );
};

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const SectionWrapper = styled.section`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 120px;
  border: 1px solid #2942b6;
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #3956de;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff00f8;
  }
`;

export default Contact;
