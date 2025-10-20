import { Form, Input } from "antd";
import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  rules?: any[];
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  rules = [],
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules} className="mb-4">
      <Input type={type} placeholder={placeholder} className="rounded-lg" />
    </Form.Item>
  );
};

export default InputField;
