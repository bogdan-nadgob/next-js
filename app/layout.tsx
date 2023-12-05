import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

interface IRootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children, }: IRootLayoutProps) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
