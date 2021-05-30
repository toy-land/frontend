import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components';

import A from '@atoms';

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

const SpinnerContainer = styled.div`
  position:absolute;
  top:50%;
  left:50%;
`;

export default function MarkdownEditor({ getGithubLoading, readmeData }) {
  return (
    <>
      {getGithubLoading
        ? (
          <SpinnerContainer>
            <A.Spinner />
          </SpinnerContainer>
        )
        : (
          <Wrapper>
            <MDEditor.Markdown source={readmeData} />
          </Wrapper>
        )}
    </>
  );
}
