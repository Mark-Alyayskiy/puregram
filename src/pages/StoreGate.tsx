import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {useSelector} from 'react-redux';

const StoreGate = ({children}) => {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const _persist = useSelector(state => state._persist);

  useEffect(() => {
    setIsGateOpen(_persist.rehydrated);
  }, [_persist.rehydrated]);

  return <React.Fragment>{isGateOpen ? children : null}</React.Fragment>;
};

export default StoreGate;
