import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authentification_background from "assets/images/authentification_background.png";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Password from "components/ui/Password";
import api from "services/api";
import { connect } from "react-redux";
import Loader from "components/ui/Loader";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Register = ({ isLoading }) => {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Merci de renseigner un email valide")
        .required("Merci de renseigner votre adresse email"),
      firstName: Yup.string().required("Merci de renseigner votre prénom"),
      lastName: Yup.string().required(
        "Merci de renseigner votre nom de famille"
      ),
      password: Yup.string().min(8, 'Le mot de passe doit faire minimum 8 caractères').required("Merci de renseigner votre mot de passe"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Le mot de passe est différent")
        .required("Merci de renseigner votre mot de passe"),
    }),
    onSubmit: async (values) => {
      await api.axios
        .post("v1/auth/register", values)
        .then((res) => {
          if (res.success) {
            toast.success('Merci de vous avoir enregisté. Vous pouvez maintenant vous connecter !')
            history.push('/login')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="relative">
      <Loader isLoading={isLoading} />

      <div className="md:flex h-screen font-raleway">
        <div className="flex items-center justify-center flex-1">
          <div className="">
            <h2 className="font-bold text-grey-darker text-left text-3xl">
              Inscription
            </h2>
            <p className="mt-4 md:mt-3 w-3/5">
              Si vous avez déjà un compte, vous pouvez vous{" "}
              <a href="/login" className="text-primary font-bold">connecter ici !</a>
            </p>
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
                  error={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null
                  }
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
                  error={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : null
                  }
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
                  error={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : null
                  }
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
                  error={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : null
                  }
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
                  error={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : null
                  }
                />
                <div className="mt-10 flex justify-center">
                  <Button text="Inscription" type="primary" action="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:flex md:w-1/2 items-center justify-center flex-1 m-5 bg-primary-light rounded-2xl">
          <div className="w-1/2">
            <img
              className="object-contain"
              src={authentification_background}
              alt="authentification_background"
            ></img>
            <h1 className="font-bold text-grey-darker text-left text-3xl mt-20">
              Wizzer Teacher
            </h1>
            <p className="font-medium text-grey-darker text-left text-2xl mt-4">
              La plateforme de bootcamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.UI.isLoading,
});

export default connect(mapStateToProps)(Register);
