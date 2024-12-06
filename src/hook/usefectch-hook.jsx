import React, { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setErrors(null);
    try {
      const response = await cb(...args, options);
      setData(response);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, errors, fn };
};

export default useFetch;
