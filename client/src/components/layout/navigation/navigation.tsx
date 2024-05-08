import LogoutButton from "../../general/logoutButton";
import "./navigation.scss"

type navigationProps = {
    username: string | void;
}

export function Navigation(props: navigationProps) {
    return (
        <nav className='nav'>
            <div className="logout">
                <LogoutButton></LogoutButton>
            </div>
            {props.username ? <div className="welcome">Welcome, {props.username}!</div> : null}
            <div className="buttons">
                <div className="links">
                    <a href='/products'>Products</a>
                    <a href='/'>About</a>
                </div>
            </div>
      </nav>
    )
}
  