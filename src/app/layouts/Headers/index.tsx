import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="bg-primary-color text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            src={"/logos/logo.svg"}
            alt={"/logos/logo.svg"}
            width={24}
            height={24}
          />
          <div>ប្រព័ន្ធ​​​បរិច្ចាគ​​សមាគម CICCA</div>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/donations">Donations</Link>
          <div>
            <button className="p-4">Log In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
