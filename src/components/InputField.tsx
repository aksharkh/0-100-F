import React from 'react'


interface InputFieldProps{
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}



const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, placeholder}) => {
  return (
    <div className='mb-4'>
        <label className='block text-sm mb-1'>{label}</label>
        <input
        type={type}
        value={value}
        onChange={onChange}
        className='w-full'
        placeholder={placeholder}
         />
    </div>
  )
}

export default InputField