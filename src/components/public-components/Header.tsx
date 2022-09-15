import style from '../../styles/Header.module.css'

const Header = () => {
  return(
    <header className={style.header}>
      <h1>Mr. Burger</h1>
      <div>
        <button onClick={():void => alert('clicou')}>Login</button>
        <button>Crie sua conta</button>
      </div>
    </header>
  )
}

export default Header