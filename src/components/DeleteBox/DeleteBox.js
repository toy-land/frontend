import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '@atoms/DeleteModal';
import { removeToyThunk } from '@modules/removeToy';
import Overlay from '@atoms/Overlay';

function DeleteBox({ toyId, setRemoveToggle }) {
  // setPasswd, onClick
  const {
    loading, data, success, error,
  } = useSelector((state) => state.removeToy.removeToyStatus);
  const [passwd, setPasswd] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeToyThunk({ toyId, passwd }));
  };
  const handleOverlay = () => {
    setRemoveToggle(false);
  };
  return (
    <>
      <Overlay handleOverlay={handleOverlay} />
      <DeleteModal
        setPasswd={setPasswd}
        handleClick={handleClick}
      />
    </>
  );
}

export default DeleteBox;
