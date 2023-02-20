import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import StateTypes from './../functions/StateTypes'

const CitySelector = (props) => {
    const cityList = props.data.map(city => {
        if (city.nomCommune) return <option value={city.nomCommune}>{city.nomCommune}</option>
    })
    return (
        <select name='city' id='city'>
            {cityList}
        </select>
    )
}

CitySelector.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        codePostal: PropTypes.string,
        nomCommune: PropTypes.string,
        codeCommune : PropTypes.string,
        libelleAcheminement: PropTypes.string
    }))
}


const FormDelivery = (props) => {
    const [city, setCity] = useState('') // API grâce zipCode
    const [cityList,setCityList] = useState([])
    // let city = '' => setCity('Paris') => city = 'Paris'
    const [zipCode, setZipCode] = useState(0) // ASK
    const [address, setAddress] = useState('') // ASK - API
    const [number, setNumber] = useState(0)
    const [error, setError] = useState(false)

    // Create : const [city, setCity] = useState()
    // Read : city
    // Update : setCity
    useEffect(()=> {
        return !StateTypes.number(zipCode) ?null :setError('Mauvais Code Postal')
    }, [zipCode])
    useEffect(()=>{
        return !StateTypes.string(city) ?null :setError('Ville incorrect')
    }, [city])

    const handleZipChange = (e)=> {
        if (!isNaN(e.target.value)){
            if (e.target.value.length === 5){
                const url = `https://apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`
                fetch(url)
                .then(response=> {
                    if(response.status === 200){
                        response.json()
                        .then(res => {
                            if(res.length > 0){
                                setCityList(res)
                            }
                            else {
                                setCityList(false)
                            }
                        })
                    }
                    else {
                        setError(`Aucune ville trouvé au code postal : ${e.target.value}`)
                        setCityList(false)
                    }
                })
                .catch(err => {
                    setError(`Erreur lors de l'appel API, veuillez réessayer plus tard, cordialement`)
                    console.error(err)
                })
            }
            return setZipCode(e.target.value)
        }
    }
    
    /*const [primaryAddress, setPrimaryAdress] = useState({
        city: '',
        zipCode: 0,
        number: 0,
        address: ''
    })*/

    return (
        <div>
            <h1>Quel est votre adresse ? s'il vous plait</h1>
            {error && <p>{error}</p>}
            <label for='zipcode'>Code Postal : </label>
            <input
                type='number'
                name='zipcode'
                value={zipCode}
                onChange={handleZipChange}
            />
            {cityList
                ? <CitySelector data={cityList} />
                : null
            }
        </div>
    )

}

export default FormDelivery