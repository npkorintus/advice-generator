import React, { useEffect, useState } from 'react';

import AdviceSlipData from '../../types/AdviceSlip';
import AdviceSlipService from '../../services/AdviceService';

import CircularProgress from '@mui/joy/CircularProgress';

const AdviceCard: React.FC = () => {
  const initialAdviceCardState = {
    slip: {
      id: null,
      advice: ''
    }
  };

  const [adviceSlip, setAdviceSlip] = useState<AdviceSlipData>(initialAdviceCardState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AdviceSlipService.get().then(response => {
      console.log('response: ', response)
      const slip = response.data;
      setAdviceSlip(slip);
      setLoading(false);
    })
  }, [loading]);

  console.log('adviceSlip: ', adviceSlip)

  return (
    loading ? <CircularProgress /> : (
      <div className='advice-card'>
        <div>"{adviceSlip.slip.advice}"</div>
        <div>#{adviceSlip.slip.id}</div>
      </div>
     )
  );
};

export default AdviceCard;
