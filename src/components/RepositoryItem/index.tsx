import { memo } from 'react';
import {
  AiOutlineBook,
  AiOutlineExclamationCircle,
  AiOutlineEye,
  AiOutlineFork,
  AiOutlineStar,
} from 'react-icons/ai';

import { IRepository } from '../../interfaces/IRepository';
import { Container } from './styles';

interface RepoItemProps {
  repo: IRepository;
}

function RepositoryItemComponent({ repo }: RepoItemProps): JSX.Element {
  return (
    <Container>
      <div className="book-icon">
        <AiOutlineBook size={16} color="#444343" />
      </div>
      <div className="repo-infos">
        <a className="fullname" href={repo.html_url}>
          {repo.full_name}
        </a>
        <span className="description">{repo.description}</span>
        <div className="counters">
          <div>
            <AiOutlineStar />
            <small>{repo.stargazers_count}</small>
          </div>
          <div>
            <AiOutlineFork />
            <small>{repo.forks_count}</small>
          </div>
          <div>
            <AiOutlineEye />
            <small>{repo.watchers_count}</small>
          </div>
          <div>
            <AiOutlineExclamationCircle />
            <small>{repo.open_issues_count}</small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const RepositoryItem = memo(RepositoryItemComponent);
