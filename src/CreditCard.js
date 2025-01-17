

import './CreditCard.css'
import imgVisa       from './assets/images/visa.png'
import imgMasterCard from './assets/images/master-card.svg'

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const divStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
    }

    return(
            <div style={divStyle} className="card" > 
                <img src={type === 'Visa' ? imgVisa : imgMasterCard} alt="credit card img"/>
                <p className="card-numb">•••• •••• •••• {number.slice(-4)}</p>
                <p className="align-left" >Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
                <p className="align-left" >{owner}</p>
            </div>
        
        
    )
}



export default CreditCard