import React, { useState } from 'react';
import PersonalDetailsModal from './PersonalDetailsModal';


const initialData = {
  name: "S S Md. Bayzid",
  email: "ssmd.bayzid@gmail.com",
  university: "World University",
  address: "House: 85, Road: 05, Mohammadia Housing Society, Mohammadpur, Dhaka",
}
const About = () => {
  const [isOpenModal, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 
  const [formData, setFormData] = useState(localStorage.getItem("personalData") ? JSON.parse(localStorage.getItem("personalData")) : initialData);



  return (
    <div className='relative flex items-center justify-center py-10 lg:px-0 px-5'>
    {!isOpenModal  ?  <div className="mx-auto w-full bg-white md:w-[40%] px-4  border-2 border-dashed border-slate-400  py-5">
        <div className="flex items-center justify-between w-4/5 md:w-4/5 ml-auto py-5">
          <h2 className="text-center text-2xl font-bold">Personal Details</h2>
          <button onClick={openModal} className="text-red-600 text-xl ">Edit</button>
        </div>
        <table className="w-fulltext-start">
          <tbody className="">
            <tr className="mb-5 text-start">
              <th className="px-5 py-4 text-start">Name</th>
              <td>:</td>
              <td className="pl-4">{formData.name}</td>
            </tr>
            <tr className="mb-5 text-start">
              <th className="px-5 py-4 text-start">Email</th>
              <td>:</td>
              <td className="pl-4">{formData.email}</td>
            </tr>
            <tr className="mb-5 text-start">
              <th className="px-5 py-4 text-start">University</th>
              <td>:</td>
              <td className="pl-4">{formData.university}</td>
            </tr>
            <tr className="mb-5 text-start">
              <th className="px-5 py-4 text-start">Address</th>
              <td>:</td>
              <td className="pl-4">
                {formData.address}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      :
      <PersonalDetailsModal formData={formData} setFormData={setFormData} isOpen={isOpenModal} onClose={closeModal} />}
    </div>
  );
};

export default About;
