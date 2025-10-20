import React, { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { Button, Form, message, Typography } from "antd";
import api from "../services/api";

const { Title } = Typography;

const Login: React.FC = () => {

  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const res = await api.post("/auth/login", values);
      localStorage.setItem("token", res.data.token);
      message.success("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      message.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Title level={2} className="text-center mb-6">
          Login
        </Title>
        <Form name="loginForm" layout="vertical" onFinish={handleLogin}>
          <InputField
            name="email"
            label="Email"
            type="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          />

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <span> Don't have an account?</span>
          <Button type="link" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
