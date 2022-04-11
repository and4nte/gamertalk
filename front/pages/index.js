import Link from 'next/link';

import AppLayout from '../components/AppLayout';

const Index = () => {
  return (
    <AppLayout>
      <Link href="/signup">
        <a>signup으로 이동</a>
      </Link>
    </AppLayout>
  );
};

export default Index;
