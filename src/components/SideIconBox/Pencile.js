import React from 'react';
import { useHistory } from 'react-router-dom';
import SideIcon from './SideIcon';

function Pencil() {
  const history = useHistory();
  return (
    <div>
      <SideIcon iconEmoji="✏️" handleClick={() => history.push('/input')} />
    </div>
  );
}

export default Pencil;
