import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
//import { auth, provider } from '../../firebase/firebase.utils'
//import { signInWithPopup} from  'firebase/auth'


class SignIn extends React.Component{
    state={
        email: '',
        password:''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            email:'',
            password: ''
        })
    }
// Makes it dynamically set for email or password as the name will be replaced with email or password and the value will be the state
    handleChange = event => {
        event.preventDefault()
        const {value, name} = event.target
        this.setState({
           [name] : value
        })
    }


 /*   googleHandler = async () => {
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            });
    };*/

    render(){
        return(
            <div className='sign-in'>
                    <h2 className='title'>I already have an account</h2>
                    <span>Sign in using email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='Email' required /> 
                                
                    <FormInput type='password' name='Password' value={this.state.password}
                     handleChange={this.handleChange} 
                     label='password'
                     required/>                              
                </form>
                <div className='buttons-group'>
                  <CustomButton type='submit'>Sign In</CustomButton>
                  <CustomButton > Sign In With Google </CustomButton> 
                </div>              
            </div>
        )
    }
}

export default SignIn