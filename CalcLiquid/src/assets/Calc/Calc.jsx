import { useEffect, useState } from "react"
import './CalcStyle.css'
export const Calc = () =>{
    const [ResultDesc, setResultDesc] = useState(0)
    const [ResultTotal,setResultTotal] = useState(0)
    const [ValueBruto ,setValueBruto] = useState(0)
    const [DescValue ,setDescValue] = useState(0)
    const [PerLiquid, setPerLiquid] = useState(0)

    const setAccount =() =>{
        let account = (ValueBruto * DescValue)/100
        let TotalAccount =  ValueBruto - account
        let PerLiqui = (ValueBruto - TotalAccount)/100
        setResultDesc(account)
        setResultTotal(TotalAccount)
        setPerLiquid(PerLiqui)
        setDescValue(0)
        setValueBruto(0)

    }

    const GetValueBruto = (eve) => {
        setValueBruto(eve.target.value)
    }
    const GetValueLiquid = (eve)=> {
        setDescValue(eve.target.value)

    }

    return(<>
    <div className="MainDisplay">

        <div className="DisplayAction">
            <label htmlFor="inputValueBruto">Valor Bruto:</label>
            <input type="number" onChange={GetValueBruto} value={ValueBruto} />
            <label htmlFor="inputValueLiqui">Valor Liquido:</label>
            <input type="number" onChange={GetValueLiquid} value={DescValue} />
            <button onClick={setAccount}>Account</button>
        </div>

        <div className="DisplayResult">
            <div>
                     <p>Desconto Liquido:</p>
                     <span id="DescLiquid">{ResultDesc}</span>
            </div>
            <div>
                  <p>Valor Liquido:</p>
                  <span id="ValueLiquid">{ResultTotal}</span>
            </div>
            <div>
                  <p>Variação percentual:</p>
                  <span id="ValueLiquid">{PerLiquid}</span>
            </div>
        </div>
      
    </div>
    </>)
}