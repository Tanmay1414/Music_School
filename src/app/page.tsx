import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomigWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection key="hero" />
      <FeaturedCourses key="featured-courses" />
      <WhyChooseUs key="why-choose-us" />
      <MusicSchoolTestimonial key="testimonials" />
      <UpcomingWebinars key="webinars" />
      <Instructors key="instructors" />
      <Footer key="footer" />
    </main>
  );
}
