'use client'
import Toast from '@/app/components/Toast';
import axios from 'axios';
import Image from 'next/image';
import React, { memo, useCallback, useEffect, useState } from 'react';

const FormDataDoc = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [formData, setFormDate] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [toast, setToast] = useState(null)
    const [appointments, setAppointments] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [arrTime, setArrTime] = useState([]);

    // Handle Add Appointments
    const addAppointment = () => {
        if (!arrTime || !date) {
            alert("Please Enter Time Start Or End");
            return;
        }
        const newAppointment = {
            date,
            time: arrTime,
        };
        setAppointments([...appointments, newAppointment]);
        setArrTime([]);
        setDate("");
    };




    // Handle Change events
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDate({ ...formData, [name]: value });
    }

    // Handle Send Data To Server
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.description || !formData.price || !formData.image) {
            alert("Please Fill All Fields");
            return;
        }
        try {
            setLoading(true);
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setToast(res.data.message);
            console.log(res.data.message);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            console.error(error.response.data.message);
            setError(error.response.data.message);
        } finally {
            setLoading(false);
            setError(null);
            setSuccess(false);
            setFormDate({});
            setImageUrl(null);
        }
    }

    // Handle Set Date
    useEffect(() => {
        setFormDate({ ...formData, appointments: appointments })
    }, [appointments])

    // Handle Set Timeouts
    useEffect(() => {
        let Clear;
        if (toast) {
            Clear = setTimeout(() => {
                setToast(null);
            }, 5000);
        }
        return () => {
            clearTimeout(Clear);
        }
    }, [toast]);


    return (
        <>
            {toast && <Toast message={toast} />}
            {
                error && (
                    <div className="text-red text-sm">
                        {error}
                    </div>
                )
            }
            <form className='flex flex-col gap-3 w-full md:px-3'>
                <div className="file w-full ">
                    <label
                        htmlFor="uploadFile1"
                        className="flex bg-blue  hover:bg-gray text-white text-base px-5 py-3 outline-none rounded w-full cursor-pointer mx-auto font-[sans-serif]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 mr-2 fill-white inline"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000"
                            />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000"
                            />
                        </svg>
                        Upload
                        <input onChange={(e) => {
                            setFormDate({ ...formData, image: e.target.files[0] })
                            setImageUrl(e.target.files[0]);
                        }} name='image' type="file" id="uploadFile1" className="hidden" />
                    </label>
                </div>
                {imageUrl && <Image
                    src={URL.createObjectURL(imageUrl)}
                    alt="Doctor's Image"
                    width={200}
                    height={200}
                />}
                <div className="name w-full">
                    <label className="block text-sm font-medium text-gray">Name</label>
                    <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="text" id="name" name="name" required placeholder='Enter Name' />
                </div>
                <div className="flex gap-3">
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Specialization</label>
                        <select onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' name="specialization" id="specialization">
                            <option hidden>Select Specialization</option>
                            <option value="General physician">General physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Experience</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="text" id="experience" name="experience" required placeholder='Enter Experience' />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Email</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="email" id="email" name="email" required placeholder='Enter Email' />
                    </div>
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Password</label>
                        <input onChange={handleChange} className='w-full outline-none px-2 h-9 mt-1' type="password" id="password" name="password" required placeholder='*****************' />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Phone Number</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="tel" id="phoneNumber" name="phoneNumber" required placeholder='Enter Phone Number' />
                    </div>
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Price</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="text" id="price" name="price" required placeholder='Enter Price' />
                    </div>
                </div>
                <div className="flex gap-3 ">
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Address - 1</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="address" id="address1" name="address1" required placeholder='Enter Address 1' />
                    </div>
                    <div className="name w-full">
                        <label className="block text-sm font-medium text-gray">Address - 2</label>
                        <input onChange={handleChange} className=' w-full outline-none px-2 h-9 mt-1' type="address" id="address2" name="address2" required placeholder='Enter Address 2' />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray">Appointments</label>
                    <button type='button' className='bg-blue py-2 mb-2 px-2 text-white rounded mt-1' onClick={addAppointment}>Add Appointments</button>
                    <div className="flex gap-3">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray">Date</label>
                            <select onChange={(e) => {
                                const selectedTime = e.target.value;
                                setDate(selectedTime)
                            }} className='py-2 px-2 mr-2 w-full rounded'
                                value={date}
                                name="date"
                                id="date"
                            >
                                <option hidden>select Date </option>
                                {daysOfWeek.map((day, index) => (
                                    <option key={index} value={index + 1 + ' ' + day.slice(0, 3)}>{index + 1 + ' ' + day.slice(0, 3)}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray">Time Start</label>
                            <select className='py-2 px-2 mr-2 w-full rounded'
                                value={time}
                                name="appointments"
                                id="appointments"
                                onChange={(e) => {
                                    const selectedTime = e.target.value;
                                    setTime(selectedTime)
                                }}
                            >
                                <option hidden>select time 12:00AM</option>
                                {Array.from({ length: 24 }).map((_, i) => {
                                    const hour = i % 12 || 12;
                                    const period = i < 12 ? "AM" : "PM";
                                    return <option key={i} value={`${hour}:00${period}`}>{`${hour}:00${period}`}</option>;
                                })}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium text-gray">Add Time</label>
                            <button type='button' className='bg-blue py-2 px-2 text-white rounded' onClick={() => {
                                setArrTime([...arrTime, time])
                                setTime('')
                            }}>Submit</button>
                        </div>
                    </div>
                    <ul className=' mt-2 flex flex-wrap gap-3'>
                        {appointments.map((appointment, index) => (
                            <li key={index} className='bg-white rounded p-2 w-[160px]'>
                                <p><strong>date:</strong> <span>{appointment.date}</span></p>
                                <ul>
                                    {appointment.time.map((t, i) => (
                                        <li key={i}>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="name w-full">
                    <label className="block text-sm font-medium text-gray">Description</label>
                    <textarea onChange={handleChange} className=' w-full outline-none px-2 h-32 mt-1' id="description" name="description" required placeholder='Enter Description' />
                </div>
                {
                    loading ? <button className=' w-full outline-none bg-blue px-2 h-9 text-white rounded mt-1' disabled>Loading...</button> :
                        <button onClick={handleSubmit} className=' w-full outline-none bg-blue px-2 h-9 text-white rounded mt-1' type="submit">Add Doctor</button>
                }
            </form>
        </>
    );
}

export default memo(FormDataDoc);
