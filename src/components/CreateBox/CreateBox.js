import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PasswdModal from '@atoms/PasswdModal';
import Overlay from '@atoms/Overlay';
import { writeToyThunk } from '@modules/writeToy';

function CreateBox({ formData, setModalToggle }) {
  const [passwd, setPasswd] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(writeToyThunk({ ...formData, password: passwd }));
  };

  const handleOverlay = () => {
    setModalToggle(false);
  };

  return (
    <>
      <Overlay handleOverlay={handleOverlay} />
      <PasswdModal
        setPasswd={setPasswd}
        handleClick={handleClick}
        modalText="비밀번호 설정"
      />
    </>
  );
}

export default CreateBox;
