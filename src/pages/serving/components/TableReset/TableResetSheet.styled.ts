import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SheetContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors?.White || "#FFFFFF"};
  border-radius: 1.5rem 1.5rem 0 0;
  max-height: calc(100vh - 0.75rem);
  max-height: calc(100dvh - 0.75rem);
  padding: clamp(0.375rem, 1.2dvh, 0.5rem) 0.75rem 0;
  box-sizing: border-box;
  animation: ${slideUp} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`;

export const HandleBar = styled.div`
  width: 2.5rem;
  height: 0.25rem;
  background-color: #e0e0e0;
  border-radius: 2px;
  flex-shrink: 0;
  margin: 0 auto clamp(0.75rem, 3dvh, 1.625rem) auto;
`;

// export const Title = styled.h2`
//   font: ${({ theme }) => theme.fonts?.Bold20 || "700 20px sans-serif"};
//   margin: 0 0 1.5rem 0;
// `;

export const InputBox = styled.div`
  width: 100%;
  height: clamp(2.75rem, 8dvh, 3.5rem);
  border-radius: 0.75rem;
  border: 1px solid rgba(192, 192, 192, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Bg};
  margin-bottom: clamp(0.625rem, 2.5dvh, 2rem);
  flex-shrink: 0;
`;

export const SheetBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  width: 100%;
`;

export const SheetFooter = styled.div`
  flex-shrink: 0;
  padding: 0 0 calc(clamp(0.75rem, 2.5dvh, 1rem) + env(safe-area-inset-bottom));
`;

export const Placeholder = styled.span`
  ${({ theme }) => theme.fonts.Bold18};
  color: ${({ theme }) => theme.colors.Focused};
`;

export const InputText = styled.span`
  ${({ theme }) => theme.fonts.Bold24};
  color: ${({ theme }) => theme.colors.Black};
`;

export const KeypadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.5rem, 2dvh, 1.25rem);
  margin-bottom: clamp(0.625rem, 2.5dvh, 1.25rem);
  min-width: 0;
  overflow: hidden;
`;

export const KeyButton = styled.button`
  height: clamp(2.5rem, 8.5dvh, 4.75rem);
  border-radius: 0.75rem;
  background-color: #f8f8f8;
  border: none;
  ${({ theme }) => theme.fonts.Bold24};
  color: #a0a0a0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 0;

  &:active {
    background-color: #efefef;
  }

  img {
    width: clamp(2rem, 8dvh, 3.125rem);
    height: auto;
  }
`;

export const SubmitButton = styled.button<{ $active: boolean }>`
  width: 100%;
  height: clamp(3rem, 8dvh, 3.5rem);
  border-radius: 0.75rem;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.Orange01 : theme.colors.Black02};
  color: ${({ theme }) => theme.colors?.White || "#FFFFFF"};
  ${({ theme }) => theme.fonts.Bold16};
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
