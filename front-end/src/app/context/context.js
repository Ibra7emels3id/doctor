'use client'
import { useUser } from "@clerk/nextjs";
import axios from "axios";
const { createContext, useContext, useState, useEffect } = require("react");
const AuthContext = createContext([]);
const server = process.env.NEXT_PUBLIC_SERVER_URL

export const AuthProviderContext = ({ children }) => {
    const { user } = useUser();
    const [doctor, setDoctor] = useState([])
    const [loadingDoctor, setLoadingDoctor] = useState(false)
    const [data , setData] = useState(null)


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

    // Get All Orders
    const getOrders = async (id) => {
        try {
            // Get Data Server
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/order/${id}`);
            const data = res.data.user;
            setData(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Use Effect 
    useEffect(() => {
        getAllDoctor()
        if (user?.id) {
            getOrders(user?.id)
        }
    }, [user?.id])


    return (
        <AuthContext.Provider value={{ doctor, loadingDoctor, getAllDoctor , data , getOrders }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext)
