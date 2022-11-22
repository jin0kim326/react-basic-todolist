import React, { useContext } from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';
import { DarkModeContext, useDarkMode } from '../../Context/DarkModeContext';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={() => toggleDarkMode()} className={styles.toggle}>
        {darkMode ? <HiMoon /> : <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
