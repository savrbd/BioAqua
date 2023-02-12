import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        phone: ""
    });
    const { signUp } = useAuth();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const validatorConfog = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должено состаять миниму из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состаять миниму из 8 символов",
                value: 8
            }
        },
        phone: {
            isRequired: {
                message: "Телефон обязателен для заполнения"
            },
            isDigit: {
                message: "Телефон должен состоять только из цифр "
            },
            length: {
                message: "Пароль должен состоять  из 11 цифр",
                value: 11
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
            await signUp(data);
            navigate("/");
        } catch (error) {
            setErrors(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Регистрация</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Имя"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Номер телефона"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            type="number"
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
                            disabled={!isValid}
                            className="btn btn-success w-100 mx-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
// import React, { useEffect, useState } from "react";
// import TextField from "../components/textField";
// import { validator } from "../utils/validator";
// const Registration = () => {
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
//     console.log(data);
//   };
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 shadow p-4">
//           <h3 className="mb-4">Регистрация</h3>
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
//               Зарегистрироваться
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Registration;
