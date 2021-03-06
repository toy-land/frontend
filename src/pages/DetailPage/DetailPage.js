import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { getToyThunk, initializeToy } from '@modules/getToy';

import {
  getGithubThunk, initializeGithub,
} from '@modules/getGithub';

import C from '@components';

import GitHub from '@assets/GitHub.png';
import { respondTo } from '@utils/mixin';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.section`
  max-width: 120rem;
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  border-radius: 1.5rem;
  padding: 5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: white;
    width: 1.5rem;
  }
  ::-webkit-scrollbar-track {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00b2fa;
  }
  ${respondTo.mobile`
    width: 95%;
    padding: 5rem 2rem;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `}
`;

const WrapLeft = styled.div`
  flex:0.3;
  position: sticky;
  ${respondTo.mobile`
    position: static;
    flex:1;
  `}
  top: 0;
  padding-top: 2rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapRight = styled.div`
  top: 0;
  max-width: 70rem;
  padding: 2rem 0 2rem;
  height: auto;
  flex:0.7;
  ${respondTo.mobile`
    max-width:34.5rem;
    flex:1;
  `}
`;

const WrapTitle = styled.div`
  font-size: 5rem;
  ${respondTo.mobile`
    font-size: 3rem;
  `}
  font-family: S-CoreDream-6;
  margin: 2rem 0 2rem;
`;

const WrapImage = styled.img`
  width: 20rem;
  height: 20rem;
`;

const WrapUrl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.8rem 0;
    justify-content: center;
    font-size: 1.5rem;
  ${respondTo.mobile`
    display: none;
  `}
`;

const WrapMargin = styled.div`
  font-size: 1.5em;
  ${respondTo.mobile`
    font-size: 1rem;
  `}
  font-family: S-CoreDream-3;
`;

const WrapGitHub = styled.img`
  width: 13rem;
  margin: 1.5rem 1rem;
  cursor: pointer;
`;

const LogoContainer = styled.img`
  display: inline-block;
  width: 15rem;
  margin: 3rem 1rem;
  cursor: pointer;
  ${respondTo.mobile`
    display: none;
  `}
`;

const ContributorArea = styled.div`
  margin: 8% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapContributor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    cursor: pointer;
  }
`;

const WrapDescription = styled.textarea`
  font-family: S-CoreDream-2;
  color: #636363;
  width: 100%;
  border-width: 0;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  user-select: none;
  font-size: 2.5rem;
  ${respondTo.mobile`
    font-size: 1.5rem;
  `}
  ::-webkit-scrollbar {
    background-color:white;
    width: 0.5rem;
  }
`;

const WrapSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 6rem;
  > div {
    flex:1;
    padding: 1%;
    font-size: 1.5rem;
    ${respondTo.mobile`
      font-size: 1rem;
    `}
  }
`;

export default function DetailPage({ match }) {
  const { id } = match.params;
  const [skill, setSkill] = useState();
  const [contributor, setContributor] = useState([]);

  const dispatch = useDispatch();

  const { data: toyData, error: getToyError, loading: getToyLoading } = useSelector(
    (state) => state.getToy.getToyStatus,
  );

  const {
    loading: getGithubLoading, data: githubDatas,
    sucess: getGithubSucess, error: getGithubError,
  } = useSelector(
    (state) => state.getGithub,
  );

  const { readmeData, contributorData } = githubDatas;

  useEffect(() => () => { // clean-up
    dispatch(initializeGithub());
    dispatch(initializeToy());
  }, []);

  useEffect(() => {
    if (!getGithubLoading && contributorData) {
      setContributor(contributorData.map((each) => ({
        url: each.avatar_url,
        id: each.id,
        name: each.login,
        github: each.html_url,
      })));
    }
  }, [contributorData]);

  useEffect(() => {
    if (!getToyLoading && toyData) {
      dispatch(
        getGithubThunk(toyData.githubLink.replace('https://github.com', '')),
      );
      setSkill(toyData.skills.map((each) => ({ value: each, label: each })));
    }
  }, [toyData]);

  useEffect(() => {
    dispatch(getToyThunk(id));
  }, []);

  return (
    <Wrapper>
      <Wrapper>
        <WrapContainer>
          <WrapLeft>
            <WrapImage src={toyData?.logoUrl} />
            <ContributorArea>
              <WrapUrl>
                👤
                {' '}
                <WrapMargin>Contributors</WrapMargin>
              </WrapUrl>
              <WrapContributor>
                {contributor.map(
                  (each, i) => i < 3 && (
                    <WrapGitHub
                      onClick={() => window.open(each.github)}
                      src={each.url}
                      key={each.id}
                      alt={each.name}
                    />
                  ),
                )}
              </WrapContributor>
              <LogoContainer
                onClick={() => window.open(toyData?.githubLink)}
                src={GitHub}
                alt="github-logo"
              />
            </ContributorArea>
          </WrapLeft>
          <WrapRight>
            <WrapTitle>{toyData?.title}</WrapTitle>
            <WrapDescription value={toyData?.description} />
            <WrapSelector>
              <Select
                isMulti
                value={skill}
                onChange={() => { }}
                options={skill}
                placeholder="기술스택"
                isDisabled
              />
              <Select
                onChange={() => { }}
                placeholder={toyData?.organization}
                isDisabled
              />
              <Select placeholder={toyData?.category} isDisabled />
            </WrapSelector>
            <C.MarkdownEditor
              getGithubLoading={getGithubLoading}
              readmeData={readmeData}
            />
          </WrapRight>
        </WrapContainer>
      </Wrapper>
    </Wrapper>
  );
}
