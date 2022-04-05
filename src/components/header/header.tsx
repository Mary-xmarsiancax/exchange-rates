import "./header.css"
import symbolGold from "../../img/Gold_Currency_Symbols.svg.png"

const Header = () => {
    return (
        <div className={"header-wr"}>
            <div className={"header-wr-text"}>
                <img src={symbolGold} alt="symbolGold"/>
                <div>
                    <b>Обмен валют</b>
                </div>
            </div>
        </div>
    )
}
export default Header;