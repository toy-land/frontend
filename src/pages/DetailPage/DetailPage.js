import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getToyThunk } from '@modules/getToy';

import {
  getContributorThunk,
} from '@modules/getGithub';

import {
  getSkillsThunk,
} from '@modules/getSkills';

import C from '@components';

import Select from 'react-select';
import GitHub from '@assets/GitHub.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  max-width: 1200px;
  width: 65%;
  height: 65%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 1.5rem;
  padding: 5rem 5rem 5rem 5rem;
  overflow: auto;
  ::-webkit-scrollbar {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  ::-webkit-scrollbar-track {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  ::-webkit-scrollbar-thumb {
    border-top-right-radius: 2rem;
  }
  position: relative;
`;

const WrapLeft = styled.div`
  padding: 2rem 0 2rem;
  width: 20rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapRight = styled.div`
  padding: 2rem 0 2rem;
  max-width: 70rem;
  height: auto;
`;

const WrapTitle = styled.div`
  font-size: 5rem;
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
  justify-content: center;
  font-size: 1.5rem;
`;

const WrapMargin = styled.div`
  margin-left: 1rem;
  font-size: 1.5em;
  font-family: S-CoreDream-3;
`;

const WrapGitHub = styled.img`
  width: 13rem;
  margin: 1rem;
  cursor: pointer;
`;

const WrapContributor = styled.div`
  width: 100%;
  display: flex;
  justify-conetent: space-between;

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
  font-size: 2.5rem;
  width: 100%;
  border-width: 0;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  user-select: none;
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
    width: 20rem;
    font-size: 1.5rem;
  }
`;

export default function DetailPage({ match }) {
  const { id } = match.params;
  const [skill, setSkill] = useState();
  const [contributor, setContributor] = useState([]);

  const dispatch = useDispatch();

  const { data, error, loading } = useSelector(
    (state) => state.getToy.getToyStatus,
  );
  const { getContributorStatus } = useSelector((state) => state.getGithub);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (!getContributorStatus.loading && getContributorStatus.data) {
      setContributor(getContributorStatus.data.map((each) => ({
        url: each.avatar_url,
        id: each.id,
        name: each.login,
        github: each.html_url,
      })));
    }
  }, [getContributorStatus.data]);

  useEffect(() => {
    if (!loading && data) {
      dispatch(
        getContributorThunk(data.githubLink.replace('https://github.com', '')),
      );
      setSkill(data.skills.map((each) => ({ value: each, label: each })));
    }
  }, [data]);

  useEffect(() => {
    dispatch(getToyThunk(id));
    dispatch(getSkillsThunk());
  }, []);

  return (
    <Wrapper>
      <Wrapper>
        <WrapContainer>
          <WrapLeft>
            <WrapImage src={data?.logoUrl} />
            <div>
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
            </div>
            <WrapGitHub
              onClick={() => window.open(data?.githubLink)}
              src={GitHub}
              alt="github-logo"
            />
          </WrapLeft>
          <WrapRight>
            <WrapTitle>{data?.title}</WrapTitle>
            <WrapDescription value={data?.description} />
            <WrapSelector>
              <Select
                isMulti
                value={skill}
                onChange={() => {}}
                options={skill}
                placeholder="기술스택"
                isDisabled
              />
              <Select
                onChange={() => {}}
                placeholder={data?.organization}
                isDisabled
              />
              <Select placeholder={data?.category} isDisabled />
            </WrapSelector>
            <C.MarkdownEditor url={data?.githubLink} />
          </WrapRight>
        </WrapContainer>
      </Wrapper>
    </Wrapper>
  );
}
