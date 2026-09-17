import './HeaderConent.css'
import MenuLink from "../MenuLink/MenuLink.tsx";
import react from '../../assets/react.svg'

function HeaderContent() {
    return (
        <>
        <div id="navcontent">
            <a href="http://www.react.dev"><img src={react} alt="React" /></a>
            <div>
                <MenuLink linkname="Home" url="home" />
                <MenuLink linkname="About" url="About" />
                <MenuLink linkname="Contact" url="Contact" />
                <MenuLink linkname="Login" url="Login" />
            </div>
        </div>
            </>
    )
}

export default HeaderContent


