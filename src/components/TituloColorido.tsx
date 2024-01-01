import styled from 'styled-components';

interface Props {
  titulo: string;
}

const H1 = styled.h1 `
font-family: 'Anton', sans-serif;
color: #96776a;
  width: 100%;
  margin: 20px 0 20px 0;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
   }
   @media (max-width: 450px) {
    font-size: 1.3rem;
   }
`;

export default function TituloColorido({ titulo }: Props) {

  return (
    <H1 className='d-flex justify-content-center'>{titulo}</H1>
  );
}
