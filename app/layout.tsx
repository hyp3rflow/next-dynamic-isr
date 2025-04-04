import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await headers();
  const length = [...header.entries()].length;
  return (
    <html lang="en">
      <body>
        <p>rendered time: {new Date().toLocaleString()}</p>
        <p>header-length: {length}</p>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
