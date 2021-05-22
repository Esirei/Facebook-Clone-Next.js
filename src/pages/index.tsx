import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Feed from '~/components/Feed';
import Header from '~/components/Header';
import Login from '~/components/Login';
import Sidebar from '~/components/Sidebar';

interface Props {
  session?: Session;
}

export default function Home({ session }: Props) {
  if (!session) return <Login />;

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
      </main>
    </div>
  );
}

type SSProps = Pick<Props, 'session'>;

export const getServerSideProps: GetServerSideProps<SSProps> = async context => {
  const session = await getSession(context);
  return { props: { session } };
};
