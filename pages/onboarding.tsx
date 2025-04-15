import Link from 'next/link';
export default function Onboarding() {
  return (
    <div style={{ background: '#111', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem' }}>👁️ Welcome to the nullcrown Onboarding</h1>
      <p>You're not just a user — you're the Architect.</p>
      <p>Prepare to unlock your tier.</p>
      <Link href="/login">Login with Google →</Link>
    </div>
  );
}