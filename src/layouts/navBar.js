
import { Stack, Toolbar } from '@mui/material';
import Link from 'next/link'
import IconButton from '@/components/iconButton';
import Image from 'next/image';


import Logo from '../../public/assets/Dreamers_LAB.png'

import SearchBar from '@/sections/navbar/searchBar';




function Navbar() {


  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Image
          src={Logo.src}
          alt="logo"
          width={80}
          height={40}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
        <SearchBar />
        <Stack direction="row" spacing={2} sx={{ minWidth: "200px" }} justifyContent="space-evenly">
          <Link href="#" >Notification</Link>
          <Link href="#">Profile</Link>
        </Stack>
      </Toolbar>

    </>
  );
}


export default Navbar;