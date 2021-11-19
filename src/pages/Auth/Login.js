import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authentification_background from "assets/images/authentification_background.png"
import api from "services/api";
import { useHistory } from "react-router";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Password from "components/ui/Password";

const Login = () => {
    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Email invalide")
          .required("Ce champ est requis"),
        password: Yup.string().required("Ce champ est requis"),
      }),
    });

    return(
        <>
            <div className="md:flex h-screen font-raleway">
                <div className="md:w-1/2">
                    <div className="mx-24 px-24 md:mx-14 md:px-14 mt-10 md:mt-16 items-center">
                        <h2
                        className="font-bold text-grey-darker text-left text-3xl"
                        >
                        Inscription
                        </h2>
                        <p className="mt-4 md:mt-3 w-2/5">Si vous n’avez pas de compte, vous pouvez vous <a className="text-primary font-bold" href="#">inscrire ici !</a></p>
                        <div className="mt-10">
                            <form onSubmit={formik.handleSubmit}>
                                <Input
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder="Entrez votre adresse email"
                                    value={formik.values.email}
                                    icon="MailIcon"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                                />
                                <Password
                                    id="password"
                                    name="password"
                                    label="Mot de passe"
                                    placeholder="Entrez votre mot de passe"
                                    value={formik.values.password}
                                    icon="LockIcon"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                                />
                                <div className="mt-10 flex justify-center">
                                  <Button
                                    text="Connexion"
                                    type="primary"
                                    action=""
                                  />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                 <div className="md:flex md:w-1/2 items-center justify-center flex-1 m-5 bg-primary-light rounded-2xl">
                   <div className="h-5/6">
                      <img className="" src={authentification_background} alt="authentification_background"></img>
                      <h1 className="font-bold text-grey-darker text-left text-3xl mt-20">Wizzer Teacher</h1>
                      <p className="font-medium text-grey-darker text-left text-2xl mt-4">La plateforme de bootcamp</p>
                      </div>
                </div>
        </div>
        </>
    );
}
  
export default Login;