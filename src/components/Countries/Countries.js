import  React  from 'react';

export function Countries({myCountries}) {
    return(
<div className="myCountries">
<div className="countryName">   <p>{myCountries.name}</p> </div>
<div className="countryLanguage"> <p>{myCountries.emoji}</p> </div>
</div>
    )
}