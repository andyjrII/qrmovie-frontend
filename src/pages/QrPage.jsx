import React, { useEffect, useState } from 'react'
import axios from '../api/axios';

const QrPage = () => {
    const [url, setUrl] = useState('');
    const getQRCode = async () => {
        try {
            const response = await axios.get('/', {
                withCredentials: true
            });
            setUrl(response.data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getQRCode();
        }, 1000 * 10);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='container'>
            <h1>QR CODE GENERATOR</h1>
            {url ? <img alt="QR Code" src={url} /> : <h3>Loading...</h3>}
            <p>Scan the QR Code to get access to movies!</p>
            <br />
            <hr />
        </div>
    )
}

export default QrPage