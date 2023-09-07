// import { Metadata } from 'next';

import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Đăng ký',
// };
export default function SignUp() {
  return (
    <div>
      Đăng ký <Link href={'/'}>Home</Link>
    </div>
  );
}
