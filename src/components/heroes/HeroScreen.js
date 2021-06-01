import { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

// import batman from '../../assets/heroes/dc-batman.jpg'; // recurso estático
// const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  // console.log(heroId);

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  // const hero = getHeroById(heroId);
  // console.log(hero);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={`../assets/heroes/${heroId}.jpg`} // desde public/assets/
          // src={ batman } // con importación
          src={heroImages(`./${heroId}.jpg`).default}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b> Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b> First appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5> Characters </h5>
        <p> {characters} </p>

        <button className="btn btn-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
