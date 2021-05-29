import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import A from '@atoms';
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
      <A.Overlay handleOverlay={handleOverlay} />
      <A.PasswdModal
        setPasswd={setPasswd}
        handleClick={handleClick}
        modalText="비밀번호 설정"
      />
    </>
  );
}

export default CreateBox;
