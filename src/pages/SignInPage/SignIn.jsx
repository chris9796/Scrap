import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionButton from "../../common/SectionButton.jsx";
import { useLogin } from "../../hook/useLogin.js";
import { useState } from "react";
function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginMutation = useLogin();
    const Navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        loginMutation.mutate(
            { username, password },
            {
                onSuccess: (data) => {
                    console.log(data);
                },
                onError: (error) => {
                    console.error("로그인 요청 실패:", error);
                },
            }
        );
    };
    return (
        <>
            <section className="signinsection">
                <SectionTitle title="Sign In" size="100px" color="white" />
                <form onSubmit={handleSubmit}>
                    <SectionInput type="text" name="Username" onChange={handleUsernameChange} value={username} />
                    <SectionInput type="password" name="Password" onChange={handlePasswordChange} value={password} />
                    <SectionButton name="Sign In" color="white" />
                </form>
            </section>
        </>
    );
}

export default SignIn;
