import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { logIn } = useAuth();
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);
    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        setEnterError(null);
    };

    const validatorConfog = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателкн для заполнения"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfog);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        try {
            await logIn(data);

            navigate("/"
                // history.location.state
                //     ? history.location.state.from.pathname
                //     : "/"
            );
        } catch (error) {
            setEnterError(error.message);
        }
    };
    return (
      <div className="container mt-5">
         <div className="row">
           <div className="col-md-6 offset-md-3 shadow p-4">
              <h3 className="mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                  <TextField
                      label="Электронная почта"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      error={errors.email}
                  />
                  <TextField
                      label="Пароль"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      error={errors.password}
                  />
                  <button
                      type="submit"
                      disabled={!isValid || enterError}
                      className="btn btn-primary w-100 mx-auto"
                  >
                      Submit
                  </button>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/registration"
                  >
                    <div className=" d-flex justify-content-center pt-2">
                      <h6>Зарегистрироваться</h6>
                    </div>
                  </Link>
              </form>
            </div>
          </div>
        </div>
    );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import TextField from "../components/textField";
// import { validator } from "../utils/validator";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const handleChange = ({ target }) => {
//     setData((prevState) => ({
//       ...prevState,
//       [target.name]: target.value,
//     }));
//   };
//   const validatorConfig = {
//     email: {
//       isRequired: {
//         message: "Электронная почта обязательна для заполнения",
//       },
//       isEmail: {
//         message: "Email введен некорректно",
//       },
//     },
//     password: {
//       isRequired: {
//         message: "Пароль обязателен для заполнения",
//       },
//       isCapitalSymbol: {
//         message: "Пароль должен содержать хотя бы одну заглавную букву",
//       },
//       isContainDigit: {
//         message: "Пароль должен содержать хотя бы одно число",
//       },
//       min: {
//         message: "Пароль должен состоять минимум из 8 символов",
//         value: 8,
//       },
//     },
//   };
//   useEffect(() => {
//     validate();
//     // }, [data]);
//   });
//   const validate = () => {
//     const errors = validator(data, validatorConfig);
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const isValid = Object.keys(errors).length === 0;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validate();
//     if (!isValid) return;
//   };
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 shadow p-4">
//           <h3 className="mb-4">Login</h3>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Электронная почта"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               error={errors.email}
//             />
//             <TextField
//               label="Пароль"
//               type="password"
//               name="password"
//               value={data.password}
//               onChange={handleChange}
//               error={errors.password}
//             />
//             <button
//               type="submit"
//               disabled={!isValid}
//               className="btn btn-primary w-100 mx-auto"
//             >
//               Submit
//             </button>
//             <Link
//               className="nav-link active"
//               aria-current="page"
//               to="/registration"
//             >
//               <div className=" d-flex justify-content-center pt-2">
//                 <h6>Зарегистрироваться</h6>
//               </div>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
