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
        <div className='id'>Advice #{adviceSlip.slip.id}</div>
        <div className='advice'><q>{adviceSlip.slip.advice}</q></div>
        <div className='divider'>
          <img src='../../../images/pattern-divider-mobile.svg' />
        </div>
        <div className='dot-container'>
          <span className='dot'>
            <img className='dice-img' src="../../../images/icon-dice.svg" />
          </span>
        </div>
      </div>
     )
  );
};

export default AdviceCard;
