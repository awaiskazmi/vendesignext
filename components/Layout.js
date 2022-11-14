export default function Layout({ children }) {
  return (
    <>
      <header className="p-3 bg-black text-white">
        <h1>Header</h1>
      </header>
      <main className="px-5 py-12 min-h-screen">{children}</main>
      <footer className="p-3 bg-black text-white">
        <p>Copyrights &copy; 2022.</p>
      </footer>
    </>
  );
}
