import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('mvojjnjp');
  if (state.succeeded) {
    return <p>Thanks for Your Order! We Will Contact You Soon</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full items-center gap-3">

      <label htmlFor="name">
        Your Full Name:
        <input
          id="name"
          type="name"
          name="name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </label>

      <label htmlFor="address">
        Your Full Address:
        <input
          id="address"
          type="address"
          name="address"
        />
        <ValidationError
          prefix="Address"
          field="address"
          errors={state.errors}
        />
      </label>

      <label htmlFor="state">
        State:
        <input
          id="state"
          type="text"
          name="state"
        />
        <ValidationError
          prefix="State"
          field="state"
          errors={state.errors}
        />
      </label>

      <label htmlFor="lga">
        Local Government:
        <input
          id="lga"
          type="text"
          name="lga"
        />
        <ValidationError
          prefix="Lga"
          field="lga"
          errors={state.errors}
        />
      </label>

      <label htmlFor="Land-Mark">
        Land-Mark/Nearest Bus-Stop:
        <input
          id="Land-Mark"
          type="text"
          name="Land-Mark"
        />
        <ValidationError
          prefix="Land-Mark"
          field="Land-Mark"
          errors={state.errors}
        />
      </label>

      <label htmlFor="phone-number">
        Phone Number:
        <input
          id="phone-number"
          type="telephone"
          name="phone-number"
        />
        <ValidationError
          prefix="phone-number"
          field="phone-number"
          errors={state.errors}
        />
      </label>

      <label htmlFor="alt-phone-number">
        Alternative Phone Number:
        <input
          id="alt-phone-number"
          type="telephone"
          name="alt-phone-number"
        />
        <ValidationError
          prefix="alt-phone-number"
          field="alt-phone-number"
          errors={state.errors}
        />
      </label>

      <label htmlFor="quantity">
        Quantity:
        <input
          id="quantity"
          type="number"
          name="quantity"
        />
        <ValidationError
          prefix="quantity"
          field="quantity"
          errors={state.errors}
        />
      </label>
      <button
        type="submit"
        disabled={state.submitting}
        className="text-xl bg-[#2fbe00] w-[60%] py-2 rounded-md font-bold text-white hover:bg-green-800 my-2"
      >
        Place Your Order Now
      </button>
    </form>
  );
};

export default Form;
