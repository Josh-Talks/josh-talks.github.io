import styled from '@emotion/styled';
import React from 'react';
import Icon from '../icon';
import { flexCenter } from './../_shared/styled-mixins';

export const StyledButtonLink = styled.a`
  ${flexCenter};
  text-decoration: none;
  color: var(--bg-content-color) !important;
  background-color: var(--title-color);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;

  &:hover {
    color: var(--primary-color) !important;
  }

  &:after {
    content: '';
    z-index: -1;
    border: 1px solid var(--title-color);
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 100%;
    height: 100%;
    transition: all ease var(--transition-fast);
  }

  &:hover:after {
    border: 1px solid var(--primary-color);
    bottom: -5px;
    right: -5px;
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 0.8rem;
    margin-left: 0.25rem;
  }

  &:hover > svg {
    fill: var(--primary-color);
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const ButtonLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledButtonLink href={link ? link : '#'} target="_blank" rel="noopener">
          {label}
          <Icon icon="arrow-right" />
        </StyledButtonLink>
      )}
    </React.Fragment>
  );
};

export default ButtonLink;
