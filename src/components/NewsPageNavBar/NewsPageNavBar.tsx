import * as React from 'react';
import NewsPageNavBarTypes from './types';
import countryCodes from '../../utils/countries';
import styles from './NewsPageNavBar.module.css';

export default function NewsPageNavBar({
  country, cathegory, onChange, onCountryChange, onCathegoryChange,
}: NewsPageNavBarTypes) {
  React.useEffect(() => {
    onChange(country, cathegory);
    // console.log('nav:', country, cathegory)
  }, [country, cathegory]);
  return (
    <div className={styles.wrapper}>
      <select
        id="countries"
        value={country}
        onChange={((e) => {
          onCountryChange(e.target.value);
        })}
      >
        {
          Object.keys(countryCodes).map((code) => (
            <option value={code} key={code}>{countryCodes[code]}</option>
          ))
        }
      </select>
      <select
        id="cathegories"
        value={cathegory}
        onChange={((e) => {
          onCathegoryChange(e.target.value);
        })}
      >
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
}
