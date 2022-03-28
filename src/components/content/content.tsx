import "./content.css"
import moneyLogo from "../../img/1.png"
const Content = () => {
    return (
        <div className={"content-wr"}>
            <div>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</li>
                </ul>
            </div>
                <img src={moneyLogo} alt="moneyLogo"/>
        </div>
    )
}
export default Content;