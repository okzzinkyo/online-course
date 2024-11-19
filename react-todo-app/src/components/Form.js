import React from 'react'

export default function Form({ handleSubmit, value, setValue}) {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type='text'
        name='value'
        style={{ flex: '10', padding: '5px' }}
        placeholder='해야 할 일을 입력해 주세요.'
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      <input type='submit' value='입력' className='btn' style={{ flex: 1 }} />
    </form>
  );
}
