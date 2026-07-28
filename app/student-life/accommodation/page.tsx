import PageHeader from "@/components/PageHeader";
import BrowseStays from "@/components/BrowseStays";
import { Metadata } from "next";
import Accreditations from "@/components/Accreditations";

export const metadata: Metadata = {
    title: "Accommodation | OIHE",
    description: "Find your home away from home while studying in Melbourne. We offer tailored support to find secure, convenient, and friendly living arrangements.",
};

export default function AccommodationPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Student Life", href: "#" },
                    { label: "Accommodation", href: "/student-life/accommodation" },
                ]}
                title="Accommodation"
                description="Find your home away from home while studying in Melbourne. We offer tailored support to find secure, convenient, and friendly living arrangements."
                rightImage="/accomodation.png"
                hideUnderline={true}
            />

            {/* Main Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
                    <div className=" text-[#2A2A2A] text-[15px]  leading-relaxed space-y-6">
                        <p>
                            Homestay is an enriching once in a lifetime experience. Get a real feel for the Australian lifestyle and learn directly from your home stay family all the joys of traditional Aussie culture. Homestay is also the perfect way for students to quickly improve their English. Many students have made lifelong bonds with their homestay families and share many happy memories.
                        </p>
                        <p>
                            The Homestay Program is arranged by our student services staff who carefully match you with a suitable family. We ensure all accommodation provides a safe, comfortable and caring environment.
                        </p>

                        <div className="mt-10 p-6 bg-[#EAEEF1] border-l-2 border-[#C8D7E0]">
                            <p className="text-[#0B1F4A] font-semibold text-[15px]">
                                Ozford Institute Of Higher Education is happy to book any of the below accommodations on your behalf, should you require any assistance. Please contact: <a href="mailto:info@ozford.edu.au" className="text-[#4D97E6] font-normal hover:underline transition-all">info@ozford.edu.au</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Browse Stays Section */}
            <BrowseStays />
            <Accreditations />
        </main>
    );
}
