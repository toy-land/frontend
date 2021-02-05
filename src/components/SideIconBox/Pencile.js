import React from 'react';
import { useHistory } from 'react-router-dom';
import SideIcon from './SideIcon';

function Pencil() {
  const history = useHistory();
  return (
    <div>
      <SideIcon iconEmoji="✏️" handleClick={() => history.push('/create')} />
    </div>
  );
}

export default Pencil;
