import Layout from '@/shared/layout/layout';
import './globals.css';

export const metadata = {
  title: 'Сайт-визитка',
  description: 'Мой персональный сайт-визитка',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
