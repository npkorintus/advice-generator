import http from '../http-common';
import AdviceSlipData from '../types/AdviceSlip';

const get = () => {
  return http.get<AdviceSlipData>('');
}

const AdviceSlipService = { get };

export default AdviceSlipService;
