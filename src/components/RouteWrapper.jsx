import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {Loader} from './Loader';

const RouteWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading delay for demonstration purposes

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && children}
    </>
  );
};
RouteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouteWrapper;
