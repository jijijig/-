import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';


interface FormData {
  name: string;
  email: string;
  introduction: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    introduction: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Application submitted!');
    setFormData({
      name: '',
      email: '',
      introduction: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">이름</Label>
      <Input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <Label htmlFor="email">이메일</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Label htmlFor="introduction">자기소개</Label>
      <Textarea
        id="introduction"
        name="introduction"
        rows={4}
        value={formData.introduction}
        onChange={handleChange}
      />

      <Button type="submit">제출하기</Button>
    </Form>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;  
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
