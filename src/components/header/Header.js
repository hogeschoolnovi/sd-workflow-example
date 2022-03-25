import React from 'react';
import OuterContentContainer from "../container/OuterContentContainer";
import InnerContentContainer from "../container/InnerContentContainer";

function Header() {
    return (
        <OuterContentContainer className="header">
            <InnerContentContainer>
                {/*Nav here*/}
                <h1>Introducing Clove, a mental health collective</h1>
                <p>Get accessible and personalized mental healthcare in-person or from the comfort of your home.</p>
            </InnerContentContainer>
        </OuterContentContainer>
    )
}

export default Header;