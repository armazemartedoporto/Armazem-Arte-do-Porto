import styled from 'styled-components';

interface Props {
  texto: string;
}

const Paragrafo = styled.div`
  line-height: 20px;
   @media (min-width: 1094px) {
    font-size: 1.1rem;
    line-height: 25px;
   }
`;

export default function Texto({ texto }: Props) {

  return (
    <Paragrafo>
      {texto.split('\n').map((pedacoTexto, index) => <div key={index}>{pedacoTexto} </div>)}
    </Paragrafo>
  );
}
