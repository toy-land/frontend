import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;
`;

const LoadingText = styled.h3`
  font-size: 3rem;
`;

export default function MarkdownEditor({ getGithubLoading, readmeData }) {
  return (
    <>
      {getGithubLoading
        ? (
          <LoadingText>⏳</LoadingText>
        )
        : (
          <Wrapper>
            <MDEditor.Markdown source={readmeData} />
          </Wrapper>
        )}
    </>
  );
}
