import { useState } from 'react';
import { AiOutlineLoading, AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { useRepositories } from '../../hooks/useRepositories';
import { Container, Button } from './styles';

export function SearchInput(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [isErrored, setIsErrored] = useState(false);
  const { fetchRepositories, isFetching } = useRepositories();

  const handleClick = async (): Promise<void> => {
    if (!searchQuery) {
      toast.error('É necessário informar um repositório para pesquisar');
      setIsErrored(true);
      return;
    }

    await fetchRepositories(searchQuery);
  };

  return (
    <Container isErrored={isErrored}>
      <input
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Pesquise por um repositório"
        value={searchQuery}
        onFocus={() => setIsErrored(false)}
      />
      <Button
        disabled={isFetching}
        isLoading={isFetching}
        type="button"
        onClick={handleClick}
      >
        {isFetching ? (
          <AiOutlineLoading className="loading" size={24} color="#ffffff" />
        ) : (
          <AiOutlineSearch size={24} color="#ffffff" />
        )}
      </Button>
    </Container>
  );
}
