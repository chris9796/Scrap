import React from "react";
import { Link } from "react-router-dom";
import SectionInput from "../../common/SectionInput/SectionInput.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import SectionButton from "../../common/SectionButton.jsx";
import AlreadySignedUp from "./components/AlreadySignedUp.jsx";
import { useState } from "react";
// import { useSignup } from "../../hook/useSignup.js";


function SignUp() {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const signupMutation = useSignup();

    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    // };

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (password !== confirmPassword) {
    //         alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    //         return;
    //     }

    //     signupMutation.mutate({ username, password, email }, {
    //         onSuccess: (data) => {
    //             console.log(data);
    //         },
    //         onError: (error) => {
    //             console.error('회원가입 요청 실패:', error);
    //         }
    //     });
    // };
    return (
        <>
            <section className="signupsection">
                <SectionTitle title="Sign Up" size="100px" color="white" />
                <form>
                    
                    <SectionInput name="Username" />
                    <SectionInput name="Password" />
                    <SectionInput name="Confirm Password" />
                    <SectionInput name="Email" />
                    <AlreadySignedUp />
                    <Link to="/SignIn" className="Link">
                        <SectionButton name="Sign Up" color="white" />
                    </Link>
                </form>
            </section>
        </>
    );
}

export default SignUp;
