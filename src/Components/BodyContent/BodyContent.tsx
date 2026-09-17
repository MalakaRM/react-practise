import './BodyConent.css'
import type {ReactNode} from "react";

// 1. Children සඳහා Interface එකක් සකස් කිරීම
interface BodyContentProps {
    children: ReactNode;
}

function BodyContent(props: BodyContentProps) {
    return (
        <div id="bodycontent">
            <h3>body Content</h3>
            {props.children}
        </div>

    )
}

export default BodyContent

