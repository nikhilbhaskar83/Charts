import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)


    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }



    const loggedRouter = () => {
        return (
            <>

                <li className="login"><Link to="/" onClick={logoutUser}><b>Logout</b></Link></li>
            </>
        )
    }


    return (


        <div>

            <header>
                <ul >
                    <li className="shopname"><b>CHARTS</b></li>


                </ul>
            </header>

        </div>

    )
}

export default Header
