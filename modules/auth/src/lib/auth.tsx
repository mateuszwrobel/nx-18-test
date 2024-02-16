import { Route, Link } from 'react-router-dom';

import styles from './auth.module.scss';

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Auth!</h1>

      <ul>
        <li>
          <Link to="/">modules/auth/src/lib/auth root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the modules/auth/src/lib/auth root route.</div>}
      />
    </div>
  );
}

export default Auth;
