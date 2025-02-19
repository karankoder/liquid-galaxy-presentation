import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Settings.module.css';
import Navbar from '../components/Navbar';
import { connectToLG } from '../utils/connectToLG';
import { fetchfromLocalStorage, saveToLocalStorage } from '../utils/localStorageUtils';

export default function Settings() {
    const [formData, setFormData] = useState({
        ip: '',
        port: '',
        username: '',
        password: '',
        numberOfRigs: ''
    });

    useEffect(() => {
        const savedData = fetchfromLocalStorage(['ip', 'port', 'username', 'password', 'numberOfRigs']);
        if (savedData) {
            setFormData(savedData);
            connectToLG(savedData);
        }
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await connectToLG(formData);
            saveToLocalStorage(formData);
            setFormData({
                ip: '',
                port: '',
                username: '',
                password: '',
                numberOfRigs: ''
            });
        } catch (error) {
            console.error('Error connecting to the server:', error);
        }
    };

    return (
        <>
            <Navbar />
            <Toaster />
            <div className={styles.pageContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Settings</h2>
                    <p className={styles.formDescription}>Configure your Liquid Galaxy setup.</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Host IP Address</label>
                            <input
                                type="text"
                                name="ip"
                                placeholder="Enter the host IP address"
                                className={`${styles.input} ${styles.themeInput}`}
                                value={formData.ip}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Port</label>
                            <input
                                type="text"
                                name="port"
                                placeholder="Enter the port"
                                className={`${styles.input} ${styles.themeInput}`}
                                value={formData.port}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter the username"
                                className={`${styles.input} ${styles.themeInput}`}
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter the password"
                                className={`${styles.input} ${styles.themeInput}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Number of LG Rigs</label>
                            <input
                                type="number"
                                name="numberOfRigs"
                                placeholder="Enter the number of LG rigs"
                                className={`${styles.input} ${styles.themeInput}`}
                                value={formData.numberOfRigs}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>Connect</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
