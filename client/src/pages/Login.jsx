import {
useState,
useContext
}
from "react";

import {
useNavigate
}
from "react-router-dom";

import API from "../services/api";

import {
AuthContext
}
from "../context/AuthContext";
import Spinner
from "../components/common/Spinner";

function Login(){

const navigate =
useNavigate();

const {
setToken
}
=
useContext(AuthContext);

const [email,setEmail]
=
useState("");

const [password,setPassword]
=
useState("");

const [loading,setLoading]
=
useState(false);

const [error,setError]
=
useState("");

const handleSubmit =
async(e)=>{

e.preventDefault();

setLoading(true);

setError("");

try{

const response =
await API.post(
"/auth/login",
{
email,
password
}
);

localStorage.setItem(
"token",
response.data.token
);

setToken(
response.data.token
);

navigate(
"/dashboard"
);

}
catch(error){

setError(
"Invalid credentials"
);

}
finally{

setLoading(false);

}

};

return(

<div className="login-page">

<form
onSubmit={handleSubmit}
>

<h2>
Admin Login
</h2>

{error &&

<p>
{error}
</p>

}

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(
e.target.value
)
}

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>
setPassword(
e.target.value
)
}

/>

<button
disabled={loading}
>

{
loading
?
<Spinner/>
:
"Login"
}

</button>

</form>

</div>

);

}

export default Login;