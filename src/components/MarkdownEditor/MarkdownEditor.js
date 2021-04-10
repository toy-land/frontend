import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;
`;

export default function MarkdownEditor({ readmeData }) {
  return (
    <Wrapper>
      <MDEditor.Markdown source={readmeData} />
    </Wrapper>
  );
}
