import "./content.css"
import {getCurrentExchangeRatesApi} from "../../serviсes/api";
import {useEffect} from "react";
import {setValute} from "../../store/exchangeRates-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/redux-store";
import moneyGold from "../../img/1.png";
import Marquee from "react-fast-marquee";

const Content = () => {
    const dispatch = useDispatch()
    const valutes = useSelector<AppState>(state => state.contentStore.valute) as string
    useEffect(() => {
        getCurrentExchangeRatesApi()
            .then(resp => {
                let responseData = resp.data.Valute
                dispatch(setValute(responseData));
            })
    }, [])

    type ValuteResponseValue = {
        CharCode: string,
        ID: string,
        Name: string,
        Nominal: number,
        NumCode: string,
        Previous: number,
        Value: number
    }
    const valutesContent = Object.values(valutes).map((el: any) => {
            return (
                <tr key={el.ID} className={el.CharCode==="USD" || el.CharCode==="EUR" ? "usdStyle" : ""}>
                    <td>{el.CharCode}</td>
                    <td>{el.Name}</td>
                    <td>{el.Previous}</td>
                    <td>{el.Value}
                    </td>
                </tr>
            )
        }
    )

    return (
        <div className={"content-wr"}>
            <Marquee direction="left" speed={150}>Информация о курсах обмена иностранных валют является справочной и может меняться в течение дня</Marquee>
            <div className={"table-wr"}>
                <table>
                    <thead>
                    <tr className={"table-head"}>
                        <th>Букв. код</th>
                        <th>Валюта</th>
                        <th>Вчерашний курс</th>
                        <th>Курс на сегодняшний день</th>
                    </tr>
                    </thead>
                    <tbody>
                    {valutesContent}
                    </tbody>
                </table>
            </div>
            <div className={"mainImgWrTop"}>
                <img src={moneyGold} alt="gold-money"/>
            </div>
            <div className={"mainImgWrMiddle"}>
                <img src={moneyGold} alt="gold-money"/>
            </div>
            <div className={"mainImgWrBottom"}>
                <img src={moneyGold} alt="gold-money"/>
            </div>
        </div>
    )
}
export default Content;