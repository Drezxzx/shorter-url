/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import FormNewUrl from './components/FormNewUrl';
import {IconScissors} from '@tabler/icons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen w-screen flex-col items-center justify-center">
      <div className='flex flex-col justify-center items-center gap-1'>
      <h1 className='text-5xl font-semibold flex items-center text-black/90 gap-2'>Acortador de url <IconScissors></IconScissors></h1>
      {/* <Link className='text-emerald-500 underline font-semibold' href={"/urls"}>Ver todas mis urls...</Link> */}
      </div>
      <FormNewUrl />
    </main>
  );
}
