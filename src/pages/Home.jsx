import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { FaUserCog } from "react-icons/fa";
import { RiGeminiFill, RiMapPin2Fill, RiComputerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchfromLocalStorage } from "../utils/localStorageUtils";
import { checkConnection } from "../utils/checkConnection";


const Home = () => {
    const navigate = useNavigate();
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

    const onConnect = () => {
        navigate("/settings");
    };

    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>
                        Liquid Galaxy
                        <span> Web App</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Track, analyze, and manage your Liquid Galaxy interactions with
                        powerful tools and insights
                    </p>
                    <button onClick={onConnect} className={styles.connectButton}>Connect to LG</button>
                    <p className={`${styles.status} ${isConnected ? styles.connected : styles.disconnected}`}>
                        {isConnected ? "Connected" : "Disconnected"}
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                        <div className={`${styles.featureIcon} ${styles.bgBlue}`}>
                            <RiComputerLine className={styles.icon} />
                        </div>
                        <h3 className={styles.featureTitle}>Connect to LG machines</h3>
                        <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                            Connect and interact with Liquid Galaxy machines
                        </p>
                    </div>

                    <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                        <div className={`${styles.featureIcon} ${styles.bgPurple}`}>
                            <RiGeminiFill className={styles.icon} />
                        </div>
                        <h3 className={styles.featureTitle}>Display and clear logos</h3>
                        <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                            Display and clear logos on the Liquid Galaxy screens
                        </p>
                    </div>

                    <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                        <div className={`${styles.featureIcon} ${styles.bgGreen}`}>
                            <RiMapPin2Fill className={styles.icon} />
                        </div>
                        <h3 className={styles.featureTitle}>Fly to a Specific Location </h3>
                        <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                            Fly to a specific location on the Liquid Galaxy system
                        </p>
                    </div>

                    <div className={`${styles.featureCard} ${styles.increasedHeight}`}>
                        <div className={`${styles.featureIcon} ${styles.bgYellow}`}>
                            <FaUserCog className={styles.icon} />
                        </div>
                        <h3 className={styles.featureTitle}>System Control</h3>
                        <p className={`${styles.featureDescription} ${styles.textLineHeight}`}>
                            Control the Liquid Galaxy system settings and configurations
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
