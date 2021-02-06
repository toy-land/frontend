import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getReadmeThunk } from '@modules/getGithub';

const Wrapper = styled.div`
  height: 30%;
  width: 100%
  background-color: white;
`;

export default function MarkdownEditor({ url }) {
  const [value, setValue] = useState('');
  const { data, loading, error } = useSelector(
    (state) => state.getGithub.getReadmeStatus,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      dispatch(getReadmeThunk(url.replace('https://github.com', '')));
    }
  }, [url]);

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
      {!loading && data && <MDEditor.Markdown source={value} />}
    </Wrapper>
  );
}
