import React from 'react';
import { createPortal } from 'react-dom';
import { StyledBackdrop, StyledPopup } from './Popup.styled';

type TPopup = {
  children?: React.ReactNode;
  showPopup: boolean;
  setShowPopup: (active: boolean) => void;
}

export const Popup: React.FC<TPopup> = ({ children, showPopup, setShowPopup }) => {
  return (
    <>
      {
        showPopup && createPortal(
          <>
            <StyledBackdrop onClick={() => setShowPopup(!showPopup)}></StyledBackdrop>
            <StyledPopup>
              {children}
            </StyledPopup>
          </>,
        document.body)
      }
    </>
  );
}