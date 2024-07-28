// Mengimpor React dari library 'react'. React diperlukan untuk menulis komponen.
import React from 'react';

// Mendefinisikan fungsi 'RootLayout' yang menerima prop 'children'.
// 'children' adalah elemen atau komponen yang akan dirender di dalam layout ini.
export default function RootLayout({ children }) {
  return (
    // Elemen <html> merepresentasikan root document untuk halaman HTML.
    // Atribut 'lang' digunakan untuk menentukan bahasa dokumen, dalam hal ini bahasa Inggris ('en').
    <html lang="en">
      {/* Elemen <head> adalah tempat untuk metadata seperti title, meta tags, link ke stylesheet, dll. */}
      <head>
        <title>Next.js - Learn</title>
      </head>
      {/* Elemen <body> adalah tempat untuk konten utama halaman. Di sini, kita me-render prop 'children'. */}
      <body>{children}</body>
    </html>
  );
}