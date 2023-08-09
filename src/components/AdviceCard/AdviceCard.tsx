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
  const [width, setWidth] = useState<number>(window.innerWidth);
  const mobile = width <= 375;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    AdviceSlipService.get().then(response => {
      const slip = response.data;
      setAdviceSlip(slip);
      setLoading(false);
    })
  }, [loading]);

  return (
    loading ? <CircularProgress /> : (
      <div className='advice-card'>
        <div className='id'>Advice #{adviceSlip.slip.id}</div>
        <div className='advice'><q>{adviceSlip.slip.advice}</q></div>
        <div className='divider'>
          <img src={mobile ? '../../pattern-divider-mobile.svg' : '../../pattern-divider-desktop.svg'} />
        </div>
        <div className='dot-container'>
          <span className='dot'>
            <img className='dice-img' src={'../../icon-dice.svg'} />
          </span>
        </div>
      </div>
     )
  );
};

export default AdviceCard;
