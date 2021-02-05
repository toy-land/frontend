import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { writeToyThunk } from '@modules/writeToy';

import {
  getGithubThunk,
  getContributorThunk,
  getReadmeThunk,
} from '@modules/getGithub';

import {
  getSkillsThunk,
  getOrganizationsThunk,
  getCategoriesThunk,
} from '@modules/getSkills';

import C from '@components';
import P from '@pages';

import { getActive } from '@utils/getActive';
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
`;

const WrapEachText = styled.span`
  font-family: S-CoreDream-5;
  font-size: 2rem;
  padding: 1rem 0 1rem;
`;

const WrapEachInput = styled.input`
  width: 100%;
  font-family: S-CoreDream-5;
  font-size: 1.6rem;
  color: grey;
  &:focus {
    outline: none;
  }
  outline: none;
  margin-bottom: 3rem;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
`;

const WrapSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  > div {
    width: 20rem;
    font-size: 1.5rem;
  }
`;

const ENTRY_STEP = 0;
const EDIT_STEP = 1;

export default function CreateToyPage() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState();
  const [orgs, setOrgs] = useState([]);
  const [org, setOrg] = useState();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const [form, setForm] = useState({
    title: undefined,
    description: undefined,
    logoUrl: undefined,
    githubIdentifier: undefined,
    password: undefined,
    serviceLink: '',
    githubLink: undefined,
    organizationId: 1,
    category: undefined,
    period: undefined,
    contributors: undefined,
    email: '',
    techStackIds: undefined,
    pushedAt: undefined,
  });

  const [step, setStep] = useState(ENTRY_STEP);
  const [url, setUrl] = useState('https://github.com/Yapp-17th/Web_2_Client');
  const [contributor, setContributor] = useState([]);

  const { getGithubStatus, getContributorStatus } = useSelector(
    (state) => state.getGithub,
  );
  useEffect(() => () => setStep(ENTRY_STEP), []);

  const {
    getCategoriesStatus,
    getSkillsStatus,
    getOrganizationsStatus,
  } = useSelector((state) => state.getSkills);

  const dispatch = useDispatch();

  function handleData(getUrl) {
    dispatch(getGithubThunk(getUrl));
    dispatch(getContributorThunk(getUrl));
    dispatch(getReadmeThunk(getUrl));
    dispatch(getSkillsThunk());
    dispatch(getOrganizationsThunk());
    dispatch(getCategoriesThunk());
    setStep(EDIT_STEP);
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  useEffect(() => {
    if (!getGithubStatus.loading && getGithubStatus.data) {
      setForm({
        ...form,
        title: getGithubStatus.data.name,
        description: getGithubStatus.data.description,
        logoUrl: getGithubStatus.data.owner.avatar_url,
        githubIdentifier: getGithubStatus.data.id,
        // password: '0000',
        // serviceLink: undefined,
        githubLink: url,
        organizationId: getGithubStatus.data?.organization?.id || 1,
        // category: undefined,
        period: getActive(getGithubStatus.data.pushed_at),
        // contributors: undefined,
        // email: undefined,
        // techStackIds: undefined,
        pushedAt: getGithubStatus.data.pushed_at,
      });
    }
  }, [getGithubStatus.data]);

  useEffect(() => {
    if (!getContributorStatus.loading && getContributorStatus.data) {
      setForm({
        ...form,
        contributors: getContributorStatus.data.map((each) => ({
          githubIdentifier: each.id,
          username: each.login,
        })),
      });

      const contributorInfo = getContributorStatus.data.map((each) => ({
        url: each.avatar_url,
        id: each.id,
        name: each.login,
        github: each.html_url,
      }));

      setContributor([...contributor, ...contributorInfo]);
    }
  }, [getContributorStatus.data]);
  useEffect(() => {
    if (!getCategoriesStatus.loading && getCategoriesStatus.data) {
      setCategories(
        getCategoriesStatus.data.reposponse.map((each) => ({
          value: each,
          label: each,
        })),
      );
    }
  }, [getCategoriesStatus.data]);

  useEffect(() => {
    if (!getSkillsStatus.loading && getSkillsStatus.data) {
      setSkills(
        getSkillsStatus.data.data.map((each) => ({
          value: each.id,
          label: each.name,
        })),
      );
    }
  }, [getSkillsStatus.data]);

  useEffect(() => {
    if (!getOrganizationsStatus.loading && getOrganizationsStatus.data) {
      setOrgs(
        getOrganizationsStatus.data.reposponse.map((each) => ({
          value: each.id,
          label: each.name,
        })),
      );
    }
  }, [getOrganizationsStatus.data]);

  useEffect(() => {
    if (org) {
      setForm({ ...form, organizationId: org.value });
    } else if (skill) {
      setForm({
        ...form,
        techStackIds: skill.map((each) => each.value),
      });
    } else if (category) {
      setForm({
        ...form,
        category: category.value,
      });
    }
  }, [org, skill, category]);

  return (
    <Wrapper>
      {
        {
          [ENTRY_STEP]: (
            <P.InputRepoPage
              url={url}
              setUrl={setUrl}
              handleData={handleData}
            />
          ),
          [EDIT_STEP]: (
            <Wrapper>
              <WrapContainer>
                <WrapLeft>
                  <WrapImage src={form?.logoUrl} />
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
                    onClick={() => window.open(form?.githubLink)}
                    src={GitHub}
                    alt="github-logo"
                  />
                </WrapLeft>
                <WrapRight>
                  <WrapTitle>{form?.title}</WrapTitle>
                  <WrapDescription
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                  <div>
                    <WrapEachText>E-Mail</WrapEachText>
                    <WrapEachInput
                      placeholder="유지보수 이메일을 받고싶으시다면 이메일 주소를 넣어주세요"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <WrapEachText>URL</WrapEachText>
                    <WrapEachInput
                      placeholder="서비스가 배포된 URL을 넣어주세요"
                      value={form.serviceLink}
                      onChange={(e) => setForm({ ...form, serviceLink: e.target.value })}
                    />
                  </div>
                  <WrapSelector>
                    <Select
                      isMulti
                      onChange={setSkill}
                      options={skills}
                      placeholder="기술스택"
                    />
                    <Select
                      onChange={setOrg}
                      options={orgs}
                      placeholder="소속"
                    />
                    <Select
                      onChange={setCategory}
                      options={categories}
                      placeholder="카테고리"
                    />
                  </WrapSelector>
                  <C.MarkdownEditor url={url} />
                </WrapRight>
              </WrapContainer>
            </Wrapper>
          ),
        }[step]
      }
    </Wrapper>
  );
}
