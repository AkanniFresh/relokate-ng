import { Button } from "../components/ui/button";
import { Globe, Video } from "lucide-react";
import { Link } from "wouter";


export default function AboutAdventure() {
  const stats = [
    { value: "250+", label: "Successful Application" },
    { value: "350+", label: "Happy Clients" },
    { value: "150+", label: "Destinations" },
    { value: "08+", label: "Years Experience" }
  ];
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold">Study & Work Abroad</h2>
              <p className="text-gray-600">
              We help individuals pursue their dreams of studying or working abroad. From university admissions to job placements, we provide expert guidance every step of the way. <br /> With a focus on personalized support and reliable information, we make the journey to international success smoother and more achievable.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tailored travel goals</h4>
                    <p className="text-xs text-gray-500">Customized for your preferences</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Memory & Video</h4>
                    <p className="text-xs text-gray-500">Capture your journey's highlights</p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
                    <img 
                      src="./logos/Profile.jpeg" 
                      alt="Abioye Bolarin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Abioye Bolarin</p>
                    <p className="text-xs text-gray-500">Travel Specialist</p>
                  </div>
                </div>
                <Link href="/consultation">
                <a>
                <Button 
                  variant="outline" 
                  className="text-[#203864] border-[#203864] hover:bg-[#203864]/90 hover:text-white"
                >
                  Contact Us
                </Button>
                </a>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-[#203864]">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
