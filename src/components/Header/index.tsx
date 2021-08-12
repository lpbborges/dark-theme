import { useThemeMode } from '../../hooks/useThemeMode';
import { SearchInput } from '../SearchInput';
import { ToggleButton } from '../ToggleButton';
import { Container } from './styles';

export function Header(): JSX.Element {
  const { theme, themeModeToggler } = useThemeMode();

  return (
    <Container>
      <SearchInput />
      <ToggleButton theme={theme} onToggle={themeModeToggler} />
    </Container>
  );
}
