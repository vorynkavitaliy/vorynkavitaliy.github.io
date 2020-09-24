import React, {useState} from 'react'
import styles from './styles/person.module.sass'
export default ({user}) => {

    const [copyText, setCopyText] = useState('')

    const copyToClipboard = e => {
        const textTraget = e.target.querySelector('input')
        textTraget.select();
        document.execCommand('copy');
        setCopyText('Copied!');
        console.log(copyText)
    }

    const dateBuilder = () => {
        const currentTime = new Date(user.dob.date)
        let day = currentTime.getDate() < 10 ? `0${currentTime.getDate()}` : currentTime.getDate();
        let month = currentTime.getMonth() < 10 ? `0${currentTime.getMonth()}` : currentTime.getMonth();
        let year = currentTime.getFullYear();
        return `${month}-${day}-${year} `
    }
    const person = {
        picture: user.picture.large,
        name: user.name.first,
        surname: user.name.last,
        gender: user.gender,
        birthday: dateBuilder(),
        age: `(${user.dob.age})`,
        email: user.email,
        phone: user.phone,
        country: user.location.country,
        streetNumber: user.location.street.number,
        streetName: user.location.street.name,
        city: user.location.city,
        state: user.location.state,
        postcode: user.location.postcode
    }

    const {picture, name, surname, gender, birthday, email, phone, country, streetNumber, streetName, city, state, postcode} = {...person}
    return (
        <li className={styles.card}>
            <div className={`${styles.item} ${styles.pic}`}><img src={picture} alt={name}/></div>
            <h5 className={`${styles.item} ${styles.name}`}>{name} {surname}</h5>
            <small className={`${styles.item} ${styles.gender}`}>{gender}</small>
            <time className={`${styles.item} ${styles.birthday}`}>{birthday}</time>
            {
                document.queryCommandSupported('copy') &&
                <a 
                    onClick={copyToClipboard} 
                    className={`${styles.item} ${styles.mail}`} 
                    href={`mailto:${email}`}>
                        {email}
                        <input readOnly value={email}/>
                </a>
            }

            {
                document.queryCommandSupported('copy') &&
                <a 
                    onClick={copyToClipboard}
                    className={`${styles.item} ${styles.phone}`} 
                    href={`tel:+${phone}`}>
                        {phone}
                        <input readOnly value={phone}/>
                </a>
            }

            <address className={`${styles.item} ${styles.address}`}>
                {country} (country)<br/>
                {streetNumber} {streetName} (street)<br/>
                {city}, {state} (city/state)<br/>
                {postcode}
            </address>
        </li>
    )
}