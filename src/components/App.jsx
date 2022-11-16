import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, DashBorderPage } from 'pages';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashBorderPage" element={<DashBorderPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
