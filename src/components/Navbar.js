import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


// styles
import styles from "./Navbar.module.css"


export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <nav className={styles.navbar}>
            <ul>
                <img src="./img/money-logo.png" alt="Money-logo" />
                <li className={styles.title}><Link to="/">myMoney</Link></li>
                <li ><Link style={{ color: "#1f9751", marginRight: "15px", fontWeight: "bold" }} to="/history">History</Link></li>
                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}

                {user && (
                    <>
                        <li>Hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>


        </nav>
    )
}
