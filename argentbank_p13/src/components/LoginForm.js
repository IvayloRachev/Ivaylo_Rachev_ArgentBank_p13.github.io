import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getToken, getUser } from '../utils/apiFetch';
import { loggedIn } from '../redux/actions';
import { getUserData } from '../redux/actions';

export default function LoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();

    // Error div
    const emailError = document.querySelector(".email_error");
    const passwordError = document.querySelector(".password_error");
    const messageError = document.querySelector(".message_error");

    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.loggedReducer);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Error message
        if (!email) emailError.innerHTML = 'Please enter a valid email';
        else emailError.innerHTML = "";
        if (!password) passwordError.innerHTML = "Please enter a password";
        else passwordError.innerHTML = "";

        const user = { email, password };
        console.log(user);

        // User logged in
        const dataToken = await getToken(user);
        console.log(dataToken);

        // Stroke token in local storage if user is logged in successfully
        if (dataToken.status === 200) {
            localStorage.setItem("token", dataToken.body.token);
        }else {
            messageError.innerHTML = "Invalid user";
        }

        const token = localStorage.getItem("token");

        // Get user profile data

        if (token) {
            const dataUser = await getUser(token);
            console.log(dataUser);
            dispatch(getUserData(dataUser.body.firstName, dataUser.body.lastName));
            dispatch(loggedIn());
            console.log(dataUser.body.firstName);
            console.log(dataUser.body.lastName);
            return navigate("/user");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                <p className='email_error'></p>
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
                <p className='password_error'></p>
            </div>
            <div className='input-remember'>
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" id="remember-me" />
            </div>
            <button className='sign-in-button'>Sign in</button>
            <p className='message_error'></p>
        </form>
    );
}

