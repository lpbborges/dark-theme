import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Header } from '../../components/Header';
import { RepositoryItem } from '../../components/RepositoryItem';
import { useRepositories } from '../../hooks/useRepositories';
import { useThemeMode } from '../../hooks/useThemeMode';
import { Container, Content } from './styles';

export function Home(): JSX.Element {
  const { repos, isFetching } = useRepositories();
  const { theme } = useThemeMode();

  return (
    <Container>
      <Header />
      <Content>
        <ul>
          {isFetching ? (
            <SkeletonTheme
              color={`${theme === 'dark' ? '#202020' : '#eee'}`}
              highlightColor={`${theme === 'dark' ? '#202020' : '#f2f2f2'}`}
            >
              <Skeleton count={10} height={24} />
            </SkeletonTheme>
          ) : repos.length > 0 ? (
            repos.map(repo => <RepositoryItem key={repo.id} repo={repo} />)
          ) : (
            <h1>Nenhum repositório encontrado</h1>
          )}
        </ul>
      </Content>
    </Container>
  );
}
