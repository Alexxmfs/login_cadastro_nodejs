import "../App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div>
      <div className="titulo-login">
        <h1>Login</h1>
      </div>
      <div className="container-login">
        <Formik
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="Email" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
            {/*Outro campo*/}
            <div className="form-group">
              <Field
                name="password"
                className="form-field"
                placeholder="Senha"
              />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>

            <button className="button" type="submit">
            <p>Login</p>
            </button>
          </Form>
        </Formik>
      </div>
      <div className="Dont-have-account">
        <p className="criarConta">
          Não tem uma conta ainda?
          <Link to="/" className="cadastrar">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
