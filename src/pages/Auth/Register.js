import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authentification_background from "assets/images/authentification_background.png"
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Password from "components/ui/Password";

const Register = (user) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Merci de renseigner votre adresse email"),
            firstName: Yup.string().required("Merci de renseigner votre prénom"),
            lastName: Yup.string().required("Merci de renseigner votre nom de famille"), 
            password: Yup.string().required("Merci de renseigner votre mot de passe"),

        }),
        onSubmit: async (values) => {
            console.log(values);
        }     
    });

    return(
        <>
            <div className="md:flex h-screen font-raleway">
                <div className="md:w-1/2">
                    <div className="mx-24 px-24 md:mx-14 md:px-14 mt-10 md:mt-16">
                        <h2
                        className="font-bold text-grey-darker text-left text-3xl"
                        >
                        Inscription
                        </h2>
                        <p className="mt-4 md:mt-3 w-2/5">Si vous avez déjà un compte, vous pouvez vous <span className="text-primary font-bold">connecter ici !</span></p>
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
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    label="Nom"
                                    placeholder="Entrez votre nom"
                                    value={formik.values.lastName}
                                    icon="ContactIcon"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                                />
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    label="Prénom"
                                    placeholder="Entrez votre prénom"
                                    value={formik.values.firstName}
                                    icon="ContactIcon"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
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
                                <Password
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirmation de mot de passe"
                                    placeholder="Confirmez votre mot de passe"
                                    value={formik.values.confirmPassword}
                                    icon="LockIcon"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                                />
                                <div className="mt-10 flex justify-center">
                                  <Button
                                    text="Inscription"
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
  
export default Register;