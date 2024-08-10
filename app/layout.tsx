// Mengimpor React dari library 'react'.
// React diperlukan untuk menggunakan JSX dan mendefinisikan komponen.
import React from 'react';
import {Navbar, Footer} from '../components';
// Mendefinisikan fungsi 'RootLayout' sebagai komponen fungsional.
// Komponen ini menerima prop 'children' dengan tipe 'React.ReactNode'.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    // Elemen <html> yang mencakup seluruh dokumen HTML.
    // Atribut 'lang' digunakan untuk menentukan bahasa dokumen, dalam hal ini bahasa Inggris ('en').
    <html lang="en">
      {/* Elemen <head> adalah tempat untuk metadata seperti title, meta tags, link ke stylesheet, dll. */}
      <head>
        <title>Next.js - Learn</title>
      </head>
      {/* Elemen <body> adalah tempat untuk konten utama halaman. Di sini, kita me-render prop 'children'. */}
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
