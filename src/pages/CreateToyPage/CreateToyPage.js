import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Select from 'react-select';
import styled from 'styled-components';

import { getActive } from '@utils/getActive';
import GitHub from '@assets/GitHub.png';

import {
  initializeGithub,
} from '@modules/getGithub';

import {
  initializeOption,
} from '@modules/getOption';

import C from '@components';

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
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 1.5rem;
  padding: 5rem 5rem 5rem 5rem;
  overflow: auto;
  scroll-margin-top: 1em;

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
  position: relative;
`;

const Circle = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  cursor: pointer;
  border-radius: 100%;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.2rem;
  height: 6.2rem;
  &:hover {
    opacity: 0.8;
  }
`;

const IconEmojiWrapper = styled.p`
  font-size: 3rem;
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

const WrapTitle = styled.input`
  font-size: 5rem;
  font-family: S-CoreDream-6;
  margin: 2rem 0 2rem;
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
  font-size: 2.5rem;
  width: 100%;
  border-width: 0;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  margin-bottom: 3rem;
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
  margin-bottom: 6rem;
  > div {
    width: 20rem;
    font-size: 1.5rem;
  }
`;

const INIT_FORM = {
  title: '',
  description: '',
  logoUrl: '',
  githubIdentifier: '',
  passwd: '',
  serviceLink: '',
  githubLink: '',
  organizationId: 1,
  category: '',
  period: '',
  email: '',
  techStackIds: '',
  pushedAt: '',
};

export default function CreateToyPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState();
  const [orgs, setOrgs] = useState([]);
  const [org, setOrg] = useState();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [form, setForm] = useState(INIT_FORM);
  const [contributor, setContributor] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

  const {
    loading: getGithubLoading, data: githubDatas,
    success: getGithubSuccess, error: getGithubError,
  } = useSelector(
    (state) => state.getGithub,
  );
  const { readmeData, githubData, contributorData } = githubDatas;

  const {
    loading: getOptionLoading, data: OptionDatas,
    success: getOptionSuccess, error: getOptionError,
  } = useSelector((state) => state.getOption);

  const {
    loading: writeToyLoading, data: writeToyData,
    success: writeToySuccess, error: writeToyError,
  } = useSelector((state) => state.writeToy.writeToyStatus);

  const { skillData, organizationData, categoryData } = OptionDatas;

  function handleSubmit() {
    if (form.category && form.techStackIds) {
      setModalToggle(true);
    } else {
      alert('기술스택, 소속, 카테고리를 선택하세요!');
    }
  }

  useEffect(() => () => { // clean-up
    dispatch(initializeGithub);
    dispatch(initializeOption);
  }, []);

  useEffect(() => {
    if (!getGithubLoading && getGithubSuccess) {
      setForm({
        ...form,
        title: githubData.name,
        description: githubData.description,
        logoUrl: githubData.owner.avatar_url,
        githubIdentifier: githubData.id,
        githubLink: githubData.owner.html_url,
        organizationId: githubData?.organization?.id || 1,
        period: getActive(githubData.pushed_at),
        pushedAt: githubData.pushed_at.replace('Z', ''),
        contributors: contributorData.map((each) => ({
          githubIdentifier: each.id,
          username: each.login,
        })),
      });

      setContributor(
        contributorData.map((each) => ({
          url: each.avatar_url,
          id: each.id,
          name: each.login,
          github: each.html_url,
        })),
      );
    }

    if (!getGithubLoading && getGithubError) {
      alert(getGithubError);
    }
  }, [githubDatas]);

  useEffect(() => {
    if (!getOptionLoading && getOptionSuccess) {
      setCategories(
        categoryData.reposponse.map((each) => ({
          value: each,
          label: each,
        })),
      );
      setSkills(
        skillData.data.map((each) => ({
          value: each.id,
          label: each.name,
        })),
      );
      setOrgs(
        organizationData.reposponse.map((each) => ({
          value: each.id,
          label: each.name,
        })),
      );
    }

    if (!getOptionLoading && getOptionError) {
      alert(getOptionError);
    }
  }, [OptionDatas]);

  useEffect(() => {
    if (org) {
      setForm({ ...form, organizationId: org.value });
    }
  }, [org]);

  useEffect(() => {
    if (skill) {
      setForm({
        ...form,
        techStackIds: skill.map((each) => each.value),
      });
    }
  }, [skill]);

  useEffect(() => {
    if (category) {
      setForm({
        ...form,
        category: category.value,
      });
    }
  }, [category]);

  useEffect(() => {
    if (!writeToyLoading && writeToySuccess) {
      alert('토이 생성 성공!');
      history.push('/');
    }
    if (!writeToyLoading && writeToyError) {
      alert(`${writeToyError}`);
    }
  }, [writeToyLoading]);

  return (
    <Wrapper>
      <WrapContainer>
        <Circle onClick={handleSubmit}>
          <IconEmojiWrapper>✍️</IconEmojiWrapper>
        </Circle>
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
          <WrapTitle
            value={form?.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
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
          <C.MarkdownEditor
            readmeData={readmeData}
            getGithubLoading={getGithubLoading}
          />
        </WrapRight>
      </WrapContainer>
      <>
        {modalToggle && (
          <>
            <C.CreateBox formData={form} setModalToggle={setModalToggle} />
          </>
        )}
      </>
    </Wrapper>
  );
}
