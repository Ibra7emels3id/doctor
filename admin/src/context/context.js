'use client'
import axios from "axios";
const { createContext, useContext, useState, useEffect } = require("react");
const AuthContext = createContext([]);
const server = process.env.NEXT_PUBLIC_SERVER_URL

export const AuthProviderContext = ({ children }) => {
    const [doctor, setDoctor] = useState([])
    const [loadingDoctor, setLoadingDoctor] = useState(false)
    const [userDoctors, setUserDoctors] = useState([])

    // Handle Get All Doctor
    const getAllUserDoctors = async () => {
        try {
            const response = await axios.get(`${server}/api/orders`)
            setUserDoctors(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Handle Get All Doctor
    const getAllDoctor = async () => {
        try {
            setLoadingDoctor(true)
            const response = await axios.get(`${server}/api/products`)
            setDoctor(response.data);
        } catch (error) {
            console.error('Error:', error);
            setLoadingDoctor(false)
        } finally {
            setLoadingDoctor(false)
        }
    }

    // Use Effect 
    useEffect(() => {
        getAllDoctor()
        getAllUserDoctors()
    }, [])


    return (
        <AuthContext.Provider value={{ doctor, loadingDoctor, getAllDoctor , userDoctors , getAllUserDoctors }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext)
