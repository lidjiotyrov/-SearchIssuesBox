import React, {useEffect, useState, useRef} from 'react';
import Markdown from 'react-markdown';
import {Label} from "../";

import styles from './styles.module.scss'

const Issue = ({
                 issue,
                 targetIndex,
                 selectedIndex,
                 numberIssue,
               }) => {

  const [modal, setModal] = useState(false)
  const fieldRef = useRef(null)

  useEffect(() => {
    if (targetIndex === numberIssue) {
      setModal(!modal)
    }
  }, [modal, numberIssue, targetIndex])

  useEffect(() => {
    if (selectedIndex === numberIssue) {
      fieldRef.current.scrollIntoView({block: "center", behavior: "smooth"});
    }
  }, [numberIssue, selectedIndex])

  return (
      <>
        <div
            ref={fieldRef}
            className={styles.issue}
            onClick={() => setModal(!modal)}
            style={selectedIndex === numberIssue
                ? {border: '1px solid red'}
                : {border: '1px solid black'}
            }
        >
          <span>{issue.title}</span>
          {issue.labels.map(label => (<Label key={label.id} label={label}/>))}
          <div className={modal ? styles.modalOpen : styles.modalClose}>
            <Markdown source={issue.body}/>
          </div>
        </div>
      </>
  );
};

export default Issue;

