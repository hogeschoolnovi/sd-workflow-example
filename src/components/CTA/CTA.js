import Button from '../button/Button';

import './CTA.css'


const CTA = ({header}) => {
    
    function toAbout(){
        window.location.href = "/about";
    }
    
    return(
    <div class="CTA-container">
        <h1 class="CTA-header">
            {header}
        </h1>
        <Button disabled={false} clickHandler={toAbout} children="BOOK A CONSULTANT"/>
    </div>
    )
}

export default CTA;