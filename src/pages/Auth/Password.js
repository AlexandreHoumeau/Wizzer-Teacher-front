import { Player } from "@lottiefiles/react-lottie-player";
import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Loader from "components/ui/Loader";
import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import api from "services/api";
import * as Yup from "yup";

const Password = ({ isLoading }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalide")
        .required("Ce champ est requis"),
    }),
    onSubmit: async (values) => {
      try {
        await api.axios.post("v1/auth/password", values)
        history.push('/login')
      } catch (error) {}
    },
  });
  return (
    <div className="relative">
      <Loader isLoading={isLoading} />
      <div className="md:flex h-screen font-raleway">
        <div className="flex items-center justify-center flex-1">
          <div className="mx-24 px-24 md:mx-14 md:px-14 mt-10 md:mt-16 items-center">
            <h2 className="font-bold text-grey-darker text-left text-3xl">
              Mot de passe oublié
            </h2>
            <p className="mt-4 md:mt-3 w-3/5">
              Vous allez recevoir un email afin de réinitialiser votre mot de
              passe.
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

                <div className="mt-10 flex justify-center">
                  <Button text="Envoyer" type="primary" action="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:flex md:w-1/2 items-center justify-center flex-1 m-5 bg-primary-light rounded-2xl">
          <div className="w-1/2">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/temporary_files/vGyy7K.json"
              className="w-full"
            ></Player>

            <h1 className="font-bold text-grey-darker text-left text-3xl">
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

export default Password;
