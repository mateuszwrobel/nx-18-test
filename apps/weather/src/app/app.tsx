import { Route, Routes, Link } from 'react-router-dom';

import { Auth } from '@interviews/auth';

import { Forecast } from '@interviews/forecast';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Main App</h1>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/forecast/*" element={<Forecast />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
