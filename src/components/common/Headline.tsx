import styled from '@emotion/styled';

interface IProps {
  text: string;
}

const Headline = ({ text }: IProps) => {
  return <StHeadline>{text}</StHeadline>;
};

const StHeadline = styled.p`
  color: ${({ theme }) => theme.color.whiteColor};
  font-size: 21px;
  font-weight: 600;
`;

export default Headline;
