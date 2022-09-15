import Header from "../../components/public-components/Header";

import style from '../../styles/Home.module.css'

const Home = () => {
  return(
    <>
      <Header />
        <div className={style.container}>
          <aside>
            <img src='/img/mr_burger.png' alt="Logo mr. Burger" />
          </aside>
          <div className={style.container_menu}>
            <div className={style.central_content}>
              <img src="/img/burguer-banner.jpg" alt="Sanduiche" />
            </div>
            <div>
              conteudo de baixo
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;