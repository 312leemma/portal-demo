import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function BDXLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/logo.png" width={260} height={60} alt = "Biosignals DX Logo" />
      {/* <p className="text-[44px]">BiosignalsDX</p> */}
    </div>
  );
}

