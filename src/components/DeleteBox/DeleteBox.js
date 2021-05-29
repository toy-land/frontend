import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeToyThunk } from '@modules/removeToy';
import A from '@atoms';

function DeleteBox({ toyId, setModalToggle }) {
  const [passwd, setPasswd] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeToyThunk({ toyId, passwd }, setModalToggle));
  };
  const handleOverlay = () => {
    setModalToggle(false);
  };
  return (
    <>
      <A.Overlay handleOverlay={handleOverlay} />
      <A.PasswdModal
        setPasswd={setPasswd}
        handleClick={handleClick}
        modalText="생성 시 사용했던 비밀번호 입력"
      />
    </>
  );
}

export default DeleteBox;
