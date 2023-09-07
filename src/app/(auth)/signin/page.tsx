import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Đăng nhập',
};
export default function Home() {
  return (
    <div>
      Đăng nhập <Link href={'/'}>Home</Link>
    </div>
  );
}
