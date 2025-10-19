import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Authentication page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased flex items-center justify-center bg-background`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
