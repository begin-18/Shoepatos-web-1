import React, {useState} from 'react'
import { database } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
    const [login, setLogin] = useState(false);

    const history = useNavigate();
  
    const handleSubmit = (e, type) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (type === "signup") {
        createUserWithEmailAndPassword(database, email, password)
          .then((data) => {
            console.log(data, "authData");
            history("/HomePages");
          })
          .catch((err) => {
            alert(err.code);
            setLogin(true);
          });
      } else {
        signInWithEmailAndPassword(database, email, password)
          .then((data) => {
            console.log(data, "authData");
            history("/HomePages");
          })
          .catch((err) => {
            alert(err.code);
          });
      }
    };
  
  return (
        <div className=''>
                <div className='mx-[5vw] lg:mx-[25vh] gap-[2rem] sm:gap-[5rem] flex flex-col mb-[2rem] pt-[15vh] pb-10' >
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                   
               

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-solid border-2 border-yellow-600 p-5 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
                        <img className="mx-auto h-20 w-auto" src="images/riel-removebg.png" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{login? 'LOGIN TO YOUR ACCOUNT': 'CREATE YOUR ACCOUNT'}</h2>
                    </div>
                    <form className="space-y-6 " onSubmit={(e) => handleSubmit(e,login? 'signin': 'signup')}>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" placeholder='Input email' required className="block w-full rounded-md border-0 py-2 px-2 text-black font-extrabold shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Password</label>
                        
                        </div>
                        <div className="mt-2">
                        <input id="password" name="password" placeholder='Input password' type="password" required className="block w-full rounded-md border-0 py-2 px-2 text-black font-extrabold shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold hover:font-extrabold leading-6 text-white hover:text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SUBMIT</button>
                    </div>
                    <div className="App">
                {/* Registration and login Screen */}
                <div className='flex items-center justify-center gap-5'>
                    <div
                    className={login === false ? "text-white bg-yellow-600 rounded-lg cursor-pointer " : "cursor-pointer"}
                    onClick={() => setLogin(false)}
                    >
                    <h1 className='text-xl font-extrabold py-2 px-3'>SIGN UP</h1>
                    </div>
                    <div
                    className={login === true ? "text-white bg-yellow-600 rounded-lg cursor-pointer" : "cursor-pointer"}
                    onClick={() => setLogin(true)}
                    >
                    <h1 className='text-xl font-extrabold py-2 px-3'>SIGN IN</h1>
                    </div>
                </div>
                </div>
                    </form>
                </div>
                </div>
                    </div>
        </div>
  
  )
}

export default LoginPage