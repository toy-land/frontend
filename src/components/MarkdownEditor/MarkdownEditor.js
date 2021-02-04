import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getReadmeThunk } from '@modules/getGitHub';

const Wrapper = styled.div`
  color: white;
  width: 80%;
`;
export default function MarkdownEditor() {
  const [value, setValue] = useState('**Hello world!!!**');
  const { data, loading, error } = useSelector(
    (state) => state.getGithub.getReadmeStatus,
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getReadmeThunk('/Yapp-17th/Web_2_Client'));
  }, [dispatch]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (!loading && data) {
      setValue(data);
    }
  }, [data]);
  return (
    <Wrapper>
      <MDEditor.Markdown source={value} />
    </Wrapper>
  );
}
