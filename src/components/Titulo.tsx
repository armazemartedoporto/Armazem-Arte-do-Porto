import styled from 'styled-components';

interface Props {
  titulo: string;
}

const H1 = styled.h1 `
  font-family: 'Dancing Script', cursive;
  margin: 20px 0;
  @media (max-width: 768px) {
    font-size: 2.2rem;
   }
   @media (max-width: 450px) {
    font-size: 1.8rem;
   }
`;

export default function Titulo({ titulo }: Props) {

  return (
    <H1>{titulo}</H1>
  );
}
