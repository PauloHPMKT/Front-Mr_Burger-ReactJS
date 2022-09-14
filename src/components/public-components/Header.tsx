import style from '../../styles/Header.module.css'

const Header = () => {
  return(
    <header className={style.header}>
      <h1>Logo</h1>
      <div>
        <button>Login</button>
        <button>Crie sua conta</button>
      </div>
    </header>
  )
}

export default Header