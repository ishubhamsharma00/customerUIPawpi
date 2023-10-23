import React, { useState } from 'react';

const AddressRadioButtons = () => {
  const [selectedAddress, setSelectedAddress] = useState('billing');

  const handleAddressChange = (addressType) => {
    setSelectedAddress(addressType);
  };

  return (
    <div className="flex items-center justify-start gap-5 text-xl font-inter font-semibold my-4">
        
      <label>
        <input
          type="radio"
          value="shipping"
          checked={selectedAddress === 'shipping'}
          onChange={() => handleAddressChange('shipping')}
          className="mr-2 text-black bg-black"
        />
        Shipping Address
      </label>
      <label className="mr-4">
        <input
          type="radio"
          value="billing"
          checked={selectedAddress === 'billing'}
          onChange={() => handleAddressChange('billing')}
          className="mr-2 text-black"
        />
        Billing Address
      </label>

    </div>
  );
};

export default AddressRadioButtons;
