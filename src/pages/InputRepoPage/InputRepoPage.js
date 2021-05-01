import { getGithubThunk } from '@modules/getGithub';
import { getOptionThunk } from '@modules/getOption';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  max-width: 120rem;
  width: 65%;
  height: 65%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 1.5rem;
  padding: 5rem 5rem 5rem 5rem;
`;
const WrapFont = styled.div`
  font-family: S-CoreDream-5;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const WrapFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
`;

const WrapInput = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 10rem;
  border: solid 0.2rem #00b0ff;
  outline: none;
  font-family: S-CoreDream-5;

  font-size: 1.3rem;
  padding-left: 1.5rem;
  margin-right: 1.5rem;
  ::-webkit-input-placeholder {
    font-family: S-CoreDream-3;
    color: grey;
  }
`;

const WrapButton = styled.div`
  width: 6rem;
  height: 5rem;
  cursor: pointer;
  font-family: S-CoreDream-5;
  font-size: 2rem;
  color: white;
  background-color: #00b0ff;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export default function InputRepoPage() {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    loading: getGithubLoading, data: githubDatas,
    success: getGithubSuccess, error: getGithubError,
  } = useSelector(
    (state) => state.getGithub,
  );

  const {
    loading: getOptionLoading, data: OptionDatas,
    success: getOptionSuccess, error: getOptionError,
  } = useSelector((state) => state.getOption);

  useEffect(() => {
    if (!getGithubLoading && !getOptionLoading) {
      if (getGithubError) {
        alert(getGithubError);
      }
      if (getOptionError) {
        alert(getOptionError);
      }
      if (getGithubSuccess && getOptionSuccess) {
        history.push('/create');
      }
    }
  }, [githubDatas, OptionDatas]);

  function handleRepo(getUrl) {
    dispatch(getGithubThunk(getUrl));
    dispatch(getOptionThunk());
  }

  return (
    <Wrapper>
      <WrapContainer>
        <WrapFont>깃 레포지토리 주소를 입력해주세요.</WrapFont>
        <WrapFlex>
          <WrapInput
            placeholder="https://"
            onChange={(e) => setUrl(e.target.value)}
          />
          <WrapButton
            type="button"
            onClick={() => {
              if (!url.includes('https://github.com')) {
                alert('올바른 repository URL을 넣어주세요.');
                return;
              }
              handleRepo(url.replace('https://github.com', ''));
            }}
          >
            확인
          </WrapButton>
        </WrapFlex>
      </WrapContainer>
    </Wrapper>
  );
}
