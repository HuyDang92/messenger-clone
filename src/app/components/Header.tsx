import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="p-5 flex justify-between items-center">
      Header
      <div className="space-x-3">
        <Link href={'signin'}>Đăng nhập</Link>
        <Link href={'signup'}>Đăng ký</Link>
      </div>
    </div>
  );
}
