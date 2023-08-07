import React, { useEffect, useState } from 'react';

import API from '../../api';
import CircularProgress from '@mui/joy/CircularProgress';

const AdviceCard = () => {
  const [adviceSlip, setAdviceSlip] = useState(null);

  useEffect(() => {
    API.get().then(response => {
      console.log('response: ', response)
      setAdviceSlip(response.data);
    })
  }, []);

  return (
    adviceSlip ? <>
      <div>"{adviceSlip.slip.advice}"</div>
      <div>#{adviceSlip.slip.id}</div>
    </> : <CircularProgress />
  );
};

export default AdviceCard;
