import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { IRepository } from '../interfaces/IRepository';
import { gitApi } from '../services/gitApi';

interface IRepositoriesContextData {
  repos: IRepository[];
  fetchRepositories: (searchQuery: string) => Promise<void>;
  isFetching: boolean;
}

interface IRepositoriesProviderProps {
  children: ReactNode;
}

const RepositoriesContext = createContext<IRepositoriesContextData>(
  {} as IRepositoriesContextData
);

export const RepositoriesProvider = ({
  children,
}: IRepositoriesProviderProps): JSX.Element => {
  const [repos, setRepos] = useState<IRepository[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchRepositories = async (query: string): Promise<void> => {
    const ITEMS_PER_PAGE = 10;
    setIsFetching(true);

    try {
      const { data } = await gitApi.get('search/repositories', {
        params: {
          q: query,
          per_page: ITEMS_PER_PAGE,
        },
      });

      const { items } = data;

      setRepos(items);
    } catch {
      toast.error('Falha ao buscar repositórios, tente novamente mais tarde');
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <RepositoriesContext.Provider
      value={{ repos, fetchRepositories, isFetching }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

export function useRepositories(): IRepositoriesContextData {
  return useContext(RepositoriesContext);
}
