import React from "react";
import { connect } from "react-redux";
import Button from "components/ui/Button";
import Loader from "components/ui/Loader";
import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";

import { ExerciceIcon } from "assets/icons";
import { BattleIcon } from "assets/icons";
import { LevelIcon } from "assets/icons";
import { StatisticsIcon } from "assets/icons";

const Landing = ({ isLoading }) => {
  const history = useHistory();
  return (
    <div className="h-screen">
      <Loader isLoading={isLoading} />
      <div className="relative h-1/2 ">
        <div className="md:flex font-raleway">
          <div className="flex items-center md:w-3/5 justify-center flex-1">
            <div className="mx-24 px-24 md:mx-14 md:px-14 mt-10 md:mt-16 items-center">
              <h2 className="font-bold text-grey-darker text-left text-3xl">
              Bienvenue sur la plateforme Wizzer Teacher !
              </h2>
              <div className="mt-4 md:mt-10">
                <p className="mt-4 md:mt-3">
                  Sur cette plateforme dédiée au Bootcamp, vous pourrez accéder à tous les modules comportants des cours et des exercices. Un mode battle est également accessible pour vous challenger !
                </p>
                <p className="mt-4 md:mt-3">
                  Vous aurez accès au tableau des scores ainsi, vous saurez évaluer votre niveau
                </p>
                <p className="mt-4 md:mt-3">
                  Bon bootcamp !              
                </p>
              </div>
              <div className="mt-10 flex w-1/4">
                <Button text="Connexion" type="primary" action={() => history.push(`login`)} className="mr-5"/>
                <Button text="Inscription" type="black" action={() => history.push(`register`)} />
              </div>
            </div>
          </div>
          <div className="md:flex md:w-2/5 items-center justify-center m-5 bg-primary-light rounded-2xl">
            <div className="w-1/2">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/temporary_files/vGyy7K.json"
                className="w-full"
              >
              </Player>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-1/2 ">
        <div className="font-raleway md:flex mx-auto my-10 w-4/5 justify-around">
          <div className=" bg-primary-light rounded-2xl p-4 w-52">
            <ExerciceIcon />
            <div className="font-semibold my-2">
              Accédez à des exercices
            </div>
            <div className="">
            Chaque jour différents cours et exercices seront proposés
            </div>
          </div>
          <div className=" bg-primary-light rounded-2xl p-4 w-52">
            <BattleIcon />
            <div className="font-semibold my-2">
              Participez à des battles            
            </div>
            <div className="">
              Les battles vous permettront de vous positionner 
            </div>
          </div>
          <div className=" bg-primary-light rounded-2xl p-4 w-52">
            <LevelIcon />
            <div className="font-semibold my-2">
              Evaluez votre niveau
            </div>
            <div className="">
              Un tableau des scores accessibles afin de s’auto évaluer            
            </div>
          </div>
          <div className=" bg-primary-light rounded-2xl p-4 w-52">
            <StatisticsIcon />
            <div className="font-semibold my-2">
              Accédez à vos statistiques
            </div>
            <div className="">
              Un tableau de bord regroupant vos statistiques 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
};

const mapStateToProps = (state) => ({
  isLoading: state.UI.isLoading,
});

export default connect(mapStateToProps)(Landing);