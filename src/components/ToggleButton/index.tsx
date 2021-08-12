import { CgMoon, CgSun } from 'react-icons/cg';

import { Button } from './styles';

interface ToggleProps {
  theme?: string;
  onToggle: () => void;
}

export const ToggleButton = ({ theme, onToggle }: ToggleProps): JSX.Element => {
  return (
    <Button onClick={onToggle}>
      <CgMoon
        size={24}
        color={`${theme === 'dark' ? '#765898' : '#e6770b60'}`}
      />
      <CgSun
        size={24}
        color={`${theme === 'light' ? '#e6770b' : '#76589860'}`}
      />
    </Button>
  );
};
