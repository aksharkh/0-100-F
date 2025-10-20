import React, { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { Button, Form, message, Typography } from "antd";
import api from "../services/api";

const { Title } = Typography;

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = async (values: {
    userName: string;
    email: string;
    role: string;
    password: string;
  }) => {
    try {
      const res = await api.post("/auth/signup", values);
      message.success("Signup successful!");
      navigate("/dashboard");
    } catch (error: any) {
      message.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Title level={2} className="text-center mb-6">
          Sign Up
        </Title>
        <Form name="signupForm" layout="vertical" onFinish={handleSignup}>
          <InputField
            name="userName"
            label="Username"
            placeholder="Enter your username"
            rules={[{ required: true, message: "Please input your username!" }]}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input valid email",
              },
            ]}
          />
          <InputField
            name="role"
            label="Role"
            placeholder="Enter role"
            rules={[{ required: true, message: "Please input your role!" }]}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            rules={[{ required: true, message: "Please input your password!" }]}
          />
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Button type="link" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
