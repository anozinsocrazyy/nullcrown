import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ background: 'black', color: 'white', padding: '2rem', fontSize: '1.5rem', minHeight: '100vh' }}>
      🎭 nullcrown system initialized.<br /><br />
      <Link href="/onboarding">Start Your Journey →</Link><br />
      <Link href="/messenger">Enter Messenger →</Link><br />
      <Link href="/tier">View Tier Structure →</Link><br />
      <Link href="/trial">OMNI Trial →</Link><br />
      <Link href="/dashboard">Admin Dashboard →</Link>
    </div>
  );
}