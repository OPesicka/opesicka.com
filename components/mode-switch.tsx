import * as React from 'react'
import styled from 'styled-components'
import { semanticColor } from '../theme/theme'
import { useDarkMode } from '@rbnd/react-dark-mode'
import SwitchIcon24 from '../icons/switch-icon-24'

export const ModeSwitch: React.FC = () => {
  const { mode, setMode } = useDarkMode()

  const newMode = mode === 'dark' ? 'light' : 'dark'

  return (
    <SButton
      onClick={() => {
        setMode(newMode)
      }}
    >
      <SwitchIcon24 />
    </SButton>
  )
}

const SButton = styled.div`
  background: ${semanticColor('neutral.backgroundSubtle')};
  border: 1px solid ${semanticColor('neutral.border')};
  padding: 7px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 160ms;
  cursor: pointer;
  color: ${semanticColor('neutral.text')};
  display: flex;

  position: absolute;
  top: 16px;
  right: 16px;

  :hover {
    background: ${semanticColor('neutral.hover')};
    box-shadow: var(--shadow-l1);
  }
`
