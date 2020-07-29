import * as React from 'react';
import NewsPageNavBarTypes from './types';
import countryCodes from '../../utils/newsQueryParameters';
import styles from './NewsPageNavBar.module.css';

export default function NewsPageNavBar({
  country, category, currentNewsAPIRequest, onChange, onCountryChange, onCategoryChange, onSearch,
}: NewsPageNavBarTypes) {
  const [query, setQuery] = React.useState('');
  console.log(country, category, currentNewsAPIRequest);
  React.useEffect(() => {
    if (currentNewsAPIRequest === 'topics') {
      onChange(country, category);
    } else {
      onSearch(country, query);
    }
  }, [country, category]);

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        name="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          onSearch(country, query);
        }}
      >
        Search
      </button>
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
        value={category}
        onChange={((e) => {
          onCategoryChange(e.target.value);
        })}
      >
        <option value="world">World</option>
        <option value="nation">Nation</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </select>
    </div>
  );
}
