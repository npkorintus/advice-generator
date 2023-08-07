import React, { useEffect, useState } from 'react';

import API from '../../api';
import CircularProgress from '@mui/joy/CircularProgress';

const AdviceCard = () => {
  interface Slip {
    advice: string;
    id: number;
  }
  const [adviceSlip, setAdviceSlip] = useState<Slip>({ advice: '', id: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  // const [slip, setSlip] = useState<string>('');
  // const [id, setId] = useState<number>(null);

  useEffect(() => {
    API.get().then(response => {
      console.log('response: ', response)
      setAdviceSlip(response.data.slip);
      setLoading(false);
    })
  }, [loading]);

  console.log('adviceSlip: ', adviceSlip)

  return (
    loading ? <CircularProgress /> : (
      <div className='advice-card'>
        <div>"{adviceSlip.advice}"</div>
        <div>#{adviceSlip.id}</div>
      </div>
     )
  );
};

export default AdviceCard;
