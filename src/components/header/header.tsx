import "./header.css"
import symbolGold from "../../img/Gold_Currency_Symbols.svg.png"

const Header = () => {
    return (
        <div className={"header-wr"}>
            <img src={symbolGold} alt="symbolGold"/>
            <h2>Обмен валют</h2>
            <h3>Информация о курсах обмена иностранных валют является
                справочной и может меняться в течение дня</h3>
        </div>
    )
}
export default Header;