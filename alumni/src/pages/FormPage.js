import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";


const FormPage = ({ title, fields, collectionName, onNavigate, db }) =>{ 
    const [formData, setFormData] = useState({}); 
    const handleChange = (e) => setFormData(
        { ...formData, [e.target.name]: e.target.value }
    ); 
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            await addDoc(collection(db, collectionName), 
            { ...formData, createdAt: serverTimestamp() }); 
            alert(`${title.replace('Add New ', '')} added successfully!`); 
            const listPage = collectionName.charAt(0).toUpperCase() + collectionName.slice(1) + 'List'; 
            onNavigate(listPage); 
        } 
            catch (error) { console.error("Error adding document: ", error); 
                alert("Failed to add data."); } }; 
                return ( <div> <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
                 <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto"> 
                    <form onSubmit={handleSubmit} className="space-y-6"> 
                    {fields.map(field => ( <div key={field.name}> 
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label> 
                    {field.type === 'select' ? ( <select name={field.name} id={field.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> 
                        <option value="">{field.placeholder}</option> 
                    {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)} 
                    </select> ) : ( <input onChange={handleChange} type={field.type} name={field.name} id={field.name} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={field.placeholder} /> )} 
                    </div> 
                )
                )
                } 
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Submit</button> </form> </div> </div> ); };

export default FormPage;