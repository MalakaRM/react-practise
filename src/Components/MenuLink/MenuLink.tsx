import './MenuLink.css'

// 1. Props වල structure එක TypeScript වලට පෙන්වීම සඳහා interface එකක් හදාගන්න
interface MenuLinkProps {
    url: string;
    linkname: string;
}

function MenuLink(props: MenuLinkProps) {
    return (
       <>
           <a href={props.url} className="link">{props.linkname} </a>

       </>


    )
}

export default MenuLink

