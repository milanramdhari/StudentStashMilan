import { useState } from 'react';
import eyeImage from '../images/eye.png';
import "../style.css"
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth.api';


export default function Signup() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        error: false
    })

    const navigate = useNavigate();

    //check to see if the email provided by the user is in the proper format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const [showPassword, setShowPassword] = useState(false)

    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const reveilPassword = (event) => {
        setShowPassword(prev => !prev)
    }

    const handleSubmit = async () => {

        if (!user.name || !user.email || !user.password || !user.username) {
            setMessage("All fields are required!")
            setUser({ ...user, error: true })
            return;
        }
        const newUser = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password
        }

        if (newUser.password.length < 8 && newUser.password.length != 0) {
            setMessage("Password must be at least 8 characters long.")
            setUser({ ...user, error: true })
            return;
        }

        if (newUser.username.length < 4 && newUser.username.length != 0) {
            setMessage("Username is too short.")
            setUser({ ...user, error: true })
            return;
        }

        if (!isValidEmail(newUser.email)) {
            setMessage("Incorrect email format!")
            setUser({ ...user, error: true })
            return;

        }
        setUser({ ...user, error: false });

        try {
            const signUpQuery = await signup(user.name, user.username, user.email, user.password);

            if (signUpQuery.success){
                navigate('/confirm');
            }
            else
            {
                setMessage(signUpQuery.message)
                setUser({
                    ...user,
                    error: true
                });
            }
        } catch (error) {
            console.log(error)
        }
        
        



    }
    return (
        <>
            <div className="flex items-center justify-center">
                {user.error && (<div role="alert" className="alert alert-warning w-auto p-2 mt-3 inline-flex items-center justify-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg><span>{message}</span>
                </div>)}
            </div>


            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md p-4">
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Name
                        <input type="text" className="grow" placeholder="" name='name' value={user.name} onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Username
                        <input type="text" className="grow" placeholder="" name='username' value={user.username} onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Email
                        <input type="text" className="grow" placeholder="" name='email' value={user.email} onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        Password
                        <input type={showPassword ? "text" : "password"} className="grow" placeholder="" name='password' value={user.password} onChange={handleChange} />
                        <button><img src={eyeImage} alt="Show Password" className="w-6 h-6 cursor-pointer transition duration-300 hover:brightness-210" onClick={reveilPassword} /></button>
                    </label>
                    <button className="btn btn-primary w-full mb-4" onClick={handleSubmit}>Sign Up</button>
                    <p>Already have an account? <Link className="link link-primary" to="/signin">Sign in here</Link></p>
                </div>
            </div>
        </>

    );
}