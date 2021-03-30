import React from 'react';

import styles from './styles.module.scss'

const Label = ({ label }) => {

    return (
        <>
            <div
                className={styles.label}
                style={{backgroundColor:`#${label.color}`}}
            >
                <span>
                    {label.name}
                </span>
            </div>
        </>
    );
};

export default Label;
