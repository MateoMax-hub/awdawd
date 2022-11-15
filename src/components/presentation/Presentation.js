import React from "react";
import I6 from './../../assets/6I.png';
import I5 from './../../assets/5I.png';
import I4 from './../../assets/4I.png';
import I3 from './../../assets/3I.png';
import I2 from './../../assets/2I.png';
import I1 from './../../assets/1I.png';
import D6 from './../../assets/6D.png';
import D5 from './../../assets/5D.png';
import D4 from './../../assets/4D.png';
import D3 from './../../assets/3D.png';
import D2 from './../../assets/2D.png';
import D1 from './../../assets/1D.png';
import style from './presentation.module.css';

const Presentation = () => {
  const petalsLeft = [I6,I5,I4,I3,I2,I1];
  const petalsRight = [D6,D5,D4,D3,D2,D1];

  return (
    <div className={style.container}>
      <div>
        <div>
          {petalsLeft?.map((petal) => (
            <div>
              <img src={petal} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          {petalsRight?.map((petal) => (
            <div>
              <img src={petal} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div>
            <span>
              Mateo Gabriel Max
            </span>
            <span></span>
            <span>
              Web developer full stack
            </span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta et maiores explicabo tempora nemo iste dolorem fugiat eum assumenda laboriosam facere perferendis quis exercitationem doloremque impedit velit corrupti, optio delectus amet at debitis dolor dolores nostrum. Rem, dicta dolor esse ab, molestiae ducimus magni quisquam accusamus quasi hic ut vero tempore tenetur, aperiam sint omnis autem consequatur veritatis! Ex nihil distinctio velit amet earum placeat, perspiciatis sunt. Eveniet reprehenderit dolore incidunt iusto. Placeat, impedit.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Presentation;
