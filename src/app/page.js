import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MediaSection from '@/components/MediaSection';
import Navbar from '@/components/Navbar';
import MissionVisionSection from '@/components/MissionVision';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<HeroSection />
			<MissionVisionSection />
			<MediaSection />
			<Footer />
		</main>
	);
}
