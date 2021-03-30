import React, {useCallback, useEffect, useState} from 'react';

import {getIssues} from "../../services/ajaxSearchIssues";
import {Input, Loader, List} from "../../components";

import styles from './styles.module.scss'

import {keyWordKey} from '../../helpers/constant';

const SearchIssues = () => {
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [targetIndex, setTargetIndex] = useState(-1);
  const [viewHeight, setViewHeight] = useState(0)

  const getApiCall = useCallback(
      search => {
        setLoading(true)
        getIssues(search)
            .then((response) => {
              setIssues(response.data.items)
              setLoading(false)
            })
      }, [setLoading])

  useEffect(() => {
    getApiCall()
  }, [getApiCall])

  useEffect(() => {
    setTargetIndex(-1)
  }, [targetIndex])

  const handleChangeInput = useCallback(
      e => {
        getApiCall(e.target.value)
      },
      [getApiCall]
  )

  const handleKeyDown = useCallback(
      e => {
        switch (e.keyCode) {
          case keyWordKey.ARROW_UP:

            return (

                selectedIndex > -1 && setSelectedIndex(selectedIndex - 1)
            )
          case keyWordKey.ARROW_DOWN:
            setViewHeight(viewHeight - 50)

            return (
                selectedIndex < issues.length - 1 &&
                setSelectedIndex(selectedIndex + 1)
            );
          case keyWordKey.ENTER:
            return selectedIndex > -1 && setTargetIndex(selectedIndex);
          default:
            return;
        }
      },
      [selectedIndex, viewHeight, issues.length]
  );

  return (
      <div className={styles.main}>
        <h1>Application with an autocomplete input box</h1>
        <div className={styles.searchWrapper}>
          <Input onChange={e => handleChangeInput(e)} onKeyDown={e => handleKeyDown(e)}
          />
        </div>
        {loading ? <Loader/> : <List issues={issues} selectedIndex={selectedIndex} targetIndex={targetIndex}/>}
        {!loading && !issues.length && <p>No Results</p>}
      </div>
  );
};
export default SearchIssues;
