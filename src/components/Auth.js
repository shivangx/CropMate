import React,{useState} from 'react'

import axios from 'axios'

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}
const Auth = () => {
    const [isSignup,setIsSignup]=useState(true);
    const[form,setForm]=useState(); 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        

    }
    const switchMode=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup);
    }
  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>
                    {isSignup?'sign up':'sign in'}
                </p>
                <form onSubmit ={handleSubmit}>
            {isSignup &&(
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='fullName'>FullName</label>
                    <input
                    name='fullName'
                    type='text'
                    placeholder='Full Name'
                    onChange={handleChange}
                    required
                    />
                </div>
            )}
            <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='username'>User Name</label>
                    <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={handleChange}
                    required
                    />
                </div>
                {isSignup &&(
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='fullName'>Phone Number</label>
                    <input
                    name='phonenumber'
                    type='text'
                    placeholder='Phone Number'
                    onChange={handleChange}
                    required
                    />
                    
                </div>
            )}
             {isSignup &&(
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='fullName'>Avatar URL</label>
                    <input
                    name='AvatarURL'
                    type='text'
                    placeholder='AvatarURL'
                    onChange={handleChange}
                    required
                    />
                    
                </div>
            )}
            <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='password'>Password</label>
                    <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange}
                    required
                    />
                    
                    
                </div>
                {isSignup &&(
                <div className='auth__form-container_fields-content_input'>
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <input
                    name='confirmpassword'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    required
                    />
                    </div>
                )}
                <div className='auth__form-container_fields-content_button'>
                    <button>{isSignup?"Sign up":"Sign In"}</button>
                </div>

                </form>
                <div className='auth__form-contaier_fields-accounts'>
                    <p>
                        {isSignup?"Already have an account?":"Don,t have an account? "}
                        <span onClick={switchMode}>
                            {isSignup?' Sign In':'Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
      
      <div className='auth__form-container_image'>
       
      </div>
    </div>
  )
}

export default Auth
