import React from 'react'

export default function Form({ handleSubmit, value, setValue}) {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className='flex pt-2' onSubmit={handleSubmit}>
      <input
        type='text'
        name='value'
        className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
        placeholder='해야 할 일을 입력해 주세요.'
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      <input className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400' type='submit' value='입력' />
    </form>
  );
}
