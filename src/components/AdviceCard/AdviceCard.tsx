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
      <div
        className='advice-card'
        style={{
          // border: '1px solid black',
          padding: '20px',
          borderRadius: '12px',
          background: 'hsl(217, 19%, 24%)'
          // background: 'hsl(217, 19%, 38%)'
        }}
      >
        <div style={{ color: 'hsl(150, 100%, 66%)' }}>Advice #{adviceSlip.slip.id}</div>
        <div style={{ color: 'hsl(193, 38%, 86%)' }}>"{adviceSlip.slip.advice}"</div>
        <div>
          <img
          src='../../../images/pattern-divider-mobile.svg'
          style={{
            marginTop: '20px'
          }}
          />
        </div>
        <div>
          <span className='dot'
            style={{
              height: '50px',
              width: '50px',
              backgroundColor: 'hsl(150, 100%, 66%)',
              borderRadius: '50%',
              display: 'inline-block'
            }}
          >
            <img src="../../../images/icon-dice.svg" />
          </span>
        </div>
      </div>
     )
  );
};

export default AdviceCard;
