import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, rolPermitido }) {
  const token = sessionStorage.getItem('token');
  const tipo = sessionStorage.getItem('tipo');

  if (!token) {
    return <Navigate to="/club/login" replace />;
  }

  if (rolPermitido && tipo !== rolPermitido) {
    return tipo === 'admin'
      ? <Navigate to="/club/panel/admin" replace />
      : <Navigate to="/club/panel/afiliado" replace />;
  }

  return children;
}

export default PrivateRoute;
