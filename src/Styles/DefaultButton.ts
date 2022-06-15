import styled from "@emotion/styled";

export const LargeBtn = styled.button`
  padding: ${({ theme }) => theme.buttonPadding.large};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const MediumBtn = styled.button`
  padding: ${({ theme }) => theme.buttonPadding.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const SmallBtn = styled.button`
  padding: ${({ theme }) => theme.buttonPadding.small};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
