import { redirect } from 'next/navigation';

export default function Inicio() {

  return (
    redirect('/home')
  );
}
