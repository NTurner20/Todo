import React , {useState, useEffect} from "react";
import { toast } from "react-toastify";


const Dashboard = ({setAuth}) => {

    const [name, setName] = useState("");

    async function getName() {
        
        try {
            
            const response = await fetch("http://localhost:5001/dashboard/",{
                method: "GET",
                headers:{token: localStorage.token}
            });

            const parseRes = await response.json();
            
            setName(parseRes.user_name);
        } catch (error) {
            console.error(error.message);
            
        }
    }

    useEffect(() => {
        getName();
    },[])

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.info('Logged out successfully!')
    }

    return (
        <>
        <h1>Hello {name}</h1>
        <button 
            onClick={(e) =>{
                logout(e)
            }} 
            className="btn btn-primary"
        >
            Logout
        </button>
        </>
    );
};

export default Dashboard;