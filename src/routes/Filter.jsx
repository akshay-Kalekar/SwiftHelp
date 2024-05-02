import React, { useState } from 'react'
import hospitalImg from '../assets/filter/hospital.png'
import manImg from '../assets/filter/man.png'
import searchIcon from '../assets/filter/search.png'
import sosImg from '../assets/filter/sosImg.png'
import data1 from '../component/Filter/data';
import BoxGrid from '../component/Filter/Hospitaldatas';
import {hospitalData} from '../component/Filter/data2';
import Box from '../component/Filter/Persondatas';
import Form from '../component/Filter/Form'




const ITEMS_PER_PAGE = 10;

function Head() {
  const[role,setRole]=useState("person");
  const handleRoleClick = (newRole) => {
    setRole(newRole);
  }; 
  const [selectedOptionb, setSelectedOptionb] = useState('');
  const [selectedOptionl, setSelectedOptionl] = useState('');
  const handleSelectChangeb = (event) => {
    setSelectedOptionb(event.target.value);
  };
  const handleSelectChangel = (event) => {
    setSelectedOptionl(event.target.value);
  };
  return (
    <div className='flex flex-col items-center justify-center gap-10' data-theme='light'>

        {/* header */}

        <div className='flex flex-col p-8 border  border-b border-black  items-center justify-center w-full '>
            <h1 className='italic text-center text-4xl'>SWIFT HELP</h1>
        </div>

        {/* body */}

        <div className='flex flex-col items-center justify-center gap-11'>

            {/* options */}

            <div className='flex flex-row items-center gap-11'>
                <div className={`h-40 w-40 p-2 border-2 border-black rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transform hover:scale-110 hover:bg-gray-200  hover:border-red-500 ${role === 'person' ?  'border-4 border-red-500 bg-gray-200 ':'active'}`} onClick={() => handleRoleClick('person')} >                    
                    <img src={manImg} alt="" className='h-20 w-20' />
                    <h3 className='text-2xl'>Person</h3>
                </div>
                <div className={`h-40 w-40 p-2 border-2 border-black rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transform hover:scale-110 hover:bg-gray-200  hover:border-red-500 ${role==='hospital'? 'border-4 border-red-500 bg-gray-200':'active'}`} onClick={() => handleRoleClick('hospital')}>                    
                    <img src={hospitalImg} alt="" className='h-20 w-20'/>
                    <h3 className='text-2xl'>Hospital</h3>
                </div>
                <div className={`h-40 w-40 p-2 border-2 border-black rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transform hover:scale-110 hover:bg-gray-200  hover:border-red-500 ${role==='sos'? 'border-4 border-red-500 bg-gray-200':'active'}`} onClick={() => handleRoleClick('sos')}>                    
                    <img src={sosImg} alt="" className='h-20 w-20'/>
                    <h3 className='text-2xl'>Urgent Need</h3>
                </div>
            </div>

            {/* dropdown */}
            { role !== 'sos' &&
                <div className='flex flex-row items-center justify-center gap-11'>
                <div className='flex  w-full flex-col gap-5'>
                    <label htmlFor="dropdown" className='text-3xl w-80 font-bold'>Needed Blood Group:</label>
                    <select id="dropdown" value={selectedOptionb} onChange={handleSelectChangeb}  className='text-2xl'>
                        <option className='text-2xl' value="">ALL</option>
                        <option className='text-2xl' value="A+">A+</option>
                        <option className='text-2xl' value="A-">A-</option>
                        <option className='text-2xl' value="B+">B+</option>
                        <option className='text-2xl' value="B-">B-</option>
                        <option className='text-2xl' value="O+">O+</option>
                        <option className='text-2xl' value="O-">O-</option>
                        <option className='text-2xl' value="AB+">AB+</option>
                        <option className='text-2xl' value="AB-">AB-</option>
                    </select>  
                </div>
                <div className='flex  w-full flex-col gap-5'>
                    <label htmlFor="dropdown" className='text-3xl w-80 font-bold'>Location:</label>
                    <select id="dropdown" value={selectedOptionl} onChange={handleSelectChangel} className='text-2xl'>
                        <option className='text-2xl' value="">ALL</option>
                        <option className='text-2xl' value="Bhopal">Bhopal</option>
                        <option className='text-2xl' value="Indore">Indore</option>
                        <option className='text-2xl' value="Kerala">Kerala</option>
                        <option className='text-2xl' value="Delhi">Delhi</option>
                        <option className='text-2xl' value="Bangalore">Bangalore</option>
                    </select>  
                </div>
                <img src={searchIcon} alt="" className='h-15 w-10 cursor-pointer' />
            </div>
            }

            {/* list */}

            {role==="person" && (
                <Box hospitalData={data1} locationn={selectedOptionl} bloodTypee={selectedOptionb}/>
            )}
            {role==="hospital"
                && (
                    <BoxGrid hospitalData={hospitalData} locationn={selectedOptionl} bloodTypee={selectedOptionb} />
                )
            }
            {
                role ==="sos" && (
                    <Form/>
                )
            }
        </div>
    </div>
  )
}

export default Head