import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function AddressPopUp({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }


    const [address, setAddress] = useState({
        fullname : '',
        address: '',
        city: '',
        state: '',
        country : '',
        zip: '',
        phone : ''
    });

    const handleChange = (field, value) => {
        setAddress((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here (e.g., send the data to a server)
        console.log(address);
    };
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-4">
                                        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                                            <h2 className="text-2xl font-bold mb-4 text-purple-500">Add Address</h2>
                                            <form onSubmit={handleSubmit} className="space-y-4 font-paw">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    value={address.fullname}
                                                    onChange={(e) => handleChange('fullname', e.target.value)}
                                                    className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    value={address.address}
                                                    onChange={(e) => handleChange('address', e.target.value)}
                                                    className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                />
                                                <div className='flex gap-4'>
                                                    <input
                                                        type="text"
                                                        placeholder="City"
                                                        value={address.city}
                                                        onChange={(e) => handleChange('city', e.target.value)}
                                                        className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="State"
                                                        value={address.state}
                                                        onChange={(e) => handleChange('state', e.target.value)}
                                                        className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                    />
                                                </div>
                                                <div className='flex gap-4'>
                                                    <input
                                                        type="text"
                                                        placeholder="Country"
                                                        value={address.country}
                                                        onChange={(e) => handleChange('country', e.target.value)}
                                                        className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="ZIP"
                                                        value={address.zip}
                                                        onChange={(e) => handleChange('zip', e.target.value)}
                                                        className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                    />
                                                </div>
                                                <input
                                                    type="number"
                                                    placeholder="Phone"
                                                    value={address.phone}
                                                    onChange={(e) => handleChange('phone', e.target.value)}
                                                    className="input-field py-1 px-3 outline-none border border-gray-500 w-full rounded-sm hover:border-purple-500"
                                                />
                                                <button type="submit" className="bg-purple-500 text-white py-2 rounded-md w-full">
                                                    Save Address
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

