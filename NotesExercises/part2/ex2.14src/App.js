import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CountryDetail = ({thisCountry}) => {
  const details = <div>
    capital: {thisCountry.capital} <br />
    population: {thisCountry.population}
    <h2>languages</h2>
    <ul>
      {thisCountry.languages.map(language => 
        <li>{language.name}</li>
      )}
    </ul>
    <img 
      src={thisCountry.flag}
      alt={thisCountry.name}
      width="300"
      height="150"            
    />
  </div>

  return (
    details
  )
}

// const DisplayCountry = ({country}, {showCountryDetail}, {setShow}) => {
//   if (country.length > 10) {
//     return (
//       <div>
//         Too many matches, specify another filter
//       </div>
//     )
//   }
//   else if (country.length > 0) {
//     return (
//       country.map(thisCountry => 
//         <div key={thisCountry.id}>
//           {thisCountry.name}
//           <button onClick={setShow(!showCountryDetail)}>show</button>
//           <CountryDetail thisCountry={thisCountry} showCountryDetail={showCountryDetail}/>
//         </div>
//       )
//     )
//   }
//   else {
//     return(
//       <div>
//         Please select a country
//       </div>
//     )
//   }
// }

const App = () => {
  const [filterCountry, setFilterCountry] = useState("")
  const [ country, setCountry ] = useState([])
  const [showCountryDetail, setShow] = useState(false)

  const api_endpoint = "https://restcountries.eu/rest/v2/name/" + filterCountry

  useEffect( () => {
    console.log('effect')

    const eventHandler = response => {
      console.log('promise fulfilled')
      setCountry(response.data)
    }    

    const promise = axios.get(api_endpoint)
    promise.then(eventHandler)
  }, [api_endpoint])

  const handleFilterCountry = (event) => {
    setFilterCountry(event.target.value)
  }

  // const countryDetails = country.map(thisCountry => 
  //   <div key={thisCountry.id}>
  //     capital: {thisCountry.capital} <br />
  //     population: {thisCountry.population}
  //     <h2>languages</h2>
  //     <ul>
  //       {thisCountry.languages.map(language => 
  //         <li>{language.name}</li>
  //       )}
  //     </ul>
  //     <img 
  //       src={thisCountry.flag}
  //       alt={thisCountry.name}
  //       width="300"
  //       height="150"            
  //     />
  //   </div>
  // )

  // const detailsToShow = showCountryDetail
  //   ? "true"
  //   : "false"  

  const handleShow = (event) => {
    event.preventDefault()
    setShow(!showCountryDetail)
  }

  console.log("country: ", country);
  console.log("showCountryDetail: ", showCountryDetail);
  console.log("filterCountry: ", filterCountry);

  return (
    <div>
      <form>
        Select Country:<br />
        <input
          value={filterCountry}
          onChange={handleFilterCountry}          
        />
        <button onClick={handleShow}>show details</button><br />
        <div>
          {country.length<10 
            ? country.map(thisCountry =>
              <div key={thisCountry.id}>
                <h1>{thisCountry.name}</h1>
                
                {showCountryDetail
                  ? <CountryDetail thisCountry={thisCountry} />                    
                  : ""
                }<br/>
              </div>
              )            
            : "Too many matches, specify another filter"}
        </div>
      </form>
    </div>
  )
}

export default App