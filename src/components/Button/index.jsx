import { useState } from 'react';
import { StyledButton } from './style';

export default function Button({icon, children, onClick}) {

  const [selected, setSelected] = useState(false);
  
  const handleOnClick = () => {
    setSelected(current => !current);
    
    if(onClick){
      onClick()
    }
  }

  return (
   <StyledButton selected={selected} onClick={handleOnClick}>{icon}{children}</StyledButton>
  )
}
