"use client";

import { useState } from 'react';

export default function NomineeRegistration() {
    const [formData, setFormData] = useState({
        nominee1: {
            name: '',
            address: '',
            phoneNumber: '',
            whatsappNumber: '',
            email: '',
            accountNumber: '',
            ifscCode: '',
            documents: null,
        },
        nominee2: {
            name: '',
            address: '',
            phoneNumber: '',
            whatsappNumber: '',
            email: '',
            accountNumber: '',
            ifscCode: '',
            documents: null,
        },
    });
    const [error, setError] = useState('');
    const [showNominee2, setShowNominee2] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const [nominee, field] = name.split('.');
        setFormData({
            ...formData,
            [nominee]: {
                ...formData[nominee],
                [field]: files ? files[0] : value,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nominee1, nominee2 } = formData;

        if (
            !nominee1.name ||
            !nominee1.address ||
            !nominee1.phoneNumber ||
            !nominee1.whatsappNumber ||
            !nominee1.email ||
            !nominee1.accountNumber ||
            !nominee1.ifscCode ||
            !nominee1.documents
        ) {
            setError('All nominee 1 fields are required');
            return;
        }

        if (
            nominee1.phoneNumber.length !== 10 ||
            nominee1.whatsappNumber.length !== 10 ||
            nominee1.documents.type !== 'application/pdf'
        ) {
            setError('Nominee 1 phone numbers must be 10 digits and documents must be in PDF format');
            return;
        }

        if (showNominee2) {
            if (
                !nominee2.name ||
                !nominee2.address ||
                !nominee2.phoneNumber ||
                !nominee2.whatsappNumber ||
                !nominee2.email ||
                !nominee2.accountNumber ||
                !nominee2.ifscCode ||
                !nominee2.documents
            ) {
                setError('All nominee 2 fields are required');
                return;
            }

            if (
                nominee2.phoneNumber.length !== 10 ||
                nominee2.whatsappNumber.length !== 10 ||
                nominee2.documents.type !== 'application/pdf'
            ) {
                setError('Nominee 2 phone numbers must be 10 digits and documents must be in PDF format');
                return;
            }
        }

        setError('');
        console.log('Form submitted', formData);
        // Reset form
        setFormData({
            nominee1: {
                name: '',
                address: '',
                phoneNumber: '',
                whatsappNumber: '',
                email: '',
                accountNumber: '',
                ifscCode: '',
                documents: null,
            },
            nominee2: {
                name: '',
                address: '',
                phoneNumber: '',
                whatsappNumber: '',
                email: '',
                accountNumber: '',
                ifscCode: '',
                documents: null,
            },
        });
        setShowNominee2(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-blue-600">Nominee Registration</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Nominee 1</h2>
                    <div>
                        <input
                            type="text"
                            name="nominee1.name"
                            placeholder="Nominee's Name"
                            value={formData.nominee1.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <textarea
                            name="nominee1.address"
                            placeholder="Nominee's Address"
                            value={formData.nominee1.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="nominee1.phoneNumber"
                            placeholder="Nominee's Phone Number"
                            value={formData.nominee1.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="nominee1.whatsappNumber"
                            placeholder="Nominee's Whatsapp Number"
                            value={formData.nominee1.whatsappNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="nominee1.email"
                            placeholder="Nominee's Email"
                            value={formData.nominee1.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="nominee1.accountNumber"
                            placeholder="Nominee's Account Number"
                            value={formData.nominee1.accountNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="nominee1.ifscCode"
                            placeholder="Nominee's IFSC Code"
                            value={formData.nominee1.ifscCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name="nominee1.documents"
                            accept="application/pdf"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="showNominee2"
                            checked={showNominee2}
                            onChange={() => setShowNominee2(!showNominee2)}
                            className="mr-2"
                        />
                        <label htmlFor="showNominee2" className="text-gray-800">Add Nominee 2 Details</label>
                    </div>
                    {showNominee2 && (
                        <>
                            <h2 className="text-xl font-bold text-blue-600">Nominee 2</h2>
                            <div>
                                <input
                                    type="text"
                                    name="nominee2.name"
                                    placeholder="Nominee's Name"
                                    value={formData.nominee2.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="nominee2.address"
                                    placeholder="Nominee's Address"
                                    value={formData.nominee2.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="nominee2.phoneNumber"
                                    placeholder="Nominee's Phone Number"
                                    value={formData.nominee2.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="nominee2.whatsappNumber"
                                    placeholder="Nominee's Whatsapp Number"
                                    value={formData.nominee2.whatsappNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="nominee2.email"
                                    placeholder="Nominee's Email"
                                    value={formData.nominee2.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="nominee2.accountNumber"
                                    placeholder="Nominee's Account Number"
                                    value={formData.nominee2.accountNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="nominee2.ifscCode"
                                    placeholder="Nominee's IFSC Code"
                                    value={formData.nominee2.ifscCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    name="nominee2.documents"
                                    accept="application/pdf"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
