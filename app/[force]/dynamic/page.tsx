export const dynamic = 'force-dynamic';
export const revalidate = 60;

interface Props {
  params: Promise<{ force: string }>;
}

export default async function Page({ params }: Props) {
  const { force } = await params;
  return <section>
    <p>Page rendered: {new Date().toLocaleString()}</p>
    <p>force: {force}</p>
  </section>
}