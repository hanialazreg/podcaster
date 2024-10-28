import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">leftsideBar </p>
        {children}
        <p className="text-white-1">rightsideBar</p>
      </main>
    </div>
  );
}
