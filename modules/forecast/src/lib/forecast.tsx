import { Route, Link, Routes } from 'react-router-dom';

import styles from './forecast.module.scss';

/* eslint-disable-next-line */
export interface ForecastProps {}

export function Forecast(props: ForecastProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Forecast!</h1>

      <ul>
        <li>
          <Link to="/">modules/forecast/src/lib/forecast root</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <div>This is the modules/forecast/src/lib/forecast root route.</div>
          }
        />
      </Routes>
    </div>
  );
}

export default Forecast;
