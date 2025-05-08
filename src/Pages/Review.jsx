import React, { useState } from 'react';

const ReviewInput = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    setReviews([text, ...reviews]);
    setText('');
  };

  return (
    <div className='bg-base-300 mt-10 space-y-6 mx-auto my-10 p-6 rounded shadow'>
      <h2 className='font-bold text-3xl'>Write a Review</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <input
          type="text"
          placeholder="Your opinion"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='w-full h-[120px] border text-center'
        />
        <button type="submit" className='bg-base-200 px-6 py-2 rounded-2xl text-white font-semibold '>Submit</button>
      </form>

    </div>
  );
};

export default ReviewInput;
