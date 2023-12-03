import React from 'react';
import PropTypes from 'prop-types';
import { BsFacebook } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';

const TestimoneyCard = ({ testimony }) => (
  <div className="flex flex-col border border-black rounded-md w-full">
    <div className=" p-3 flex justify-between border-b border-black">
      <div className="flex">
        <RxAvatar className="w-[34px] h-[34px] text-blue-900" />
        <div className="flex flex-col">
          <span className=" font-bold">{testimony.name}</span>
          <span className=" font-thin text-sm">{testimony.date}</span>
        </div>
      </div>
      <BsFacebook className="w-[24px] h-[24px] text-blue-900" />
    </div>
    <div className=" px-3 py-5 font-light font-mono">
      <p>{testimony.text}</p>
    </div>
  </div>
);

TestimoneyCard.propTypes = {
  testimony: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TestimoneyCard;
