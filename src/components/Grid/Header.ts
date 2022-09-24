import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--gray-8);
  display: none;
  gap: 8px;
  padding: 8px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderItem = styled.div<{
  textAlign?: 'left' | 'center' | 'right'
}>`
  flex: 1;
  font-weight: bold;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;