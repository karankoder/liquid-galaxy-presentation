import React, { useState, useEffect } from 'react';
import styles from './Tools.module.css';
import Navbar from '../components/Navbar';
import { displayLogo } from '../utils/displayLogo';
import { fetchfromLocalStorage } from '../utils/localStorageUtils';
import { checkConnection } from '../utils/checkConnection';
import { clearLogo } from '../utils/clearLogo';
import { flyto } from '../utils/flyto';
import { relaunch } from '../utils/relaunch';
import { reboot } from '../utils/reboot';
import { shutdown } from '../utils/shutdown';


const Tools = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const savedData = fetchfromLocalStorage(['ip', 'port', 'username', 'password', 'numberOfRigs']);
        const connectionChecker = async (data) => {
            if (savedData) {
                const response = await checkConnection(savedData);
                setIsConnected(response);
            }
        };
        connectionChecker();
    }, [isConnected]);

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={`${styles.statusContainer} ${isConnected ? styles.connected : styles.disconnected}`}>
                    <div className={styles.statusIndicator}></div>
                    <p className={styles.statusText}>
                        {isConnected ? "Connected" : "Disconnected"}
                    </p>
                </div>
                <div className={styles.header}>
                    <h1>Liquid Galaxy Tools</h1>
                    <p>Manage and control your Liquid Galaxy system with these tools.</p>
                </div>
                <div className={styles.buttonGrid}>
                    <button
                        className={`${styles.button} ${styles.showLogo}`}
                        onClick={() => displayLogo()}
                        disabled={!isConnected}>
                        Show Logo
                    </button>
                    <button
                        className={`${styles.button} ${styles.clearLogo}`}
                        onClick={() => clearLogo()}
                        disabled={!isConnected}>
                        Clear Logo
                    </button>
                    <button
                        className={`${styles.button} ${styles.flyToLocation}`}
                        onClick={() => flyto()}
                        disabled={!isConnected}>
                        Fly to Specific Location
                    </button>
                    <button
                        className={`${styles.button} ${styles.relaunchLG}`}
                        onClick={() => relaunch()}
                        disabled={!isConnected}>
                        Relaunch LG
                    </button>
                    <button
                        className={`${styles.button} ${styles.rebootLG}`}
                        onClick={() => { reboot() }}
                        disabled={!isConnected}>
                        Reboot LG
                    </button>
                    <button
                        className={`${styles.button} ${styles.shutdownLG}`}
                        onClick={() => shutdown()}
                        disabled={!isConnected}>
                        Shutdown LG
                    </button>
                </div>
            </div>
        </>
    );
};

export default Tools;
