import BeforeAfterComparison from '@/components/BeforeAfter';

import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MediaSection from '@/components/MediaSection';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<HeroSection />
			<BeforeAfterComparison />
			<MediaSection />
			<Footer />
		</main>
	);
}
