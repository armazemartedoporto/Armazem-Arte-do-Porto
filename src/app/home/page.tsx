import { redirect } from 'next/navigation';

// Mantém funcionando os links antigos (/home).
export default function Home() {
  redirect('/');
}
