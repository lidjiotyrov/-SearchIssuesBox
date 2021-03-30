import React from 'react';

import styles from './styles.module.scss'
import Issue from "../Issue";

const List = ({ issues, ...restProps}) => {

    return (
        <div className={styles.list}>
            {issues.map((issue, index) => (
                <Issue
                    issue={issue}
                    key={issue.id}
                    numberIssue={index}
                    {...restProps}
                />
                ))}
        </div>
    );
};

export default List;
