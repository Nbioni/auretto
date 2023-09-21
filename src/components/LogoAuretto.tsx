import Image from 'next/image';

export function LogoAuretto() {
  return (
    <div>
      <Image
        src='./logo-auretto-white.svg'
        alt="Auretto Incorporadora"
        width={145}
        height={28}
        priority={true}
      />
    </div>
  );
}