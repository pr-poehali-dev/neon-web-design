import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  price: string;
  features: string[];
  linkTo: string;
  popular?: boolean;
}

const ServiceCard = ({
  title,
  description,
  icon,
  price,
  features,
  linkTo,
  popular = false,
}: ServiceCardProps) => {
  return (
    <div className={`relative bg-gradient-to-b ${popular ? 'from-electron-neon-blue/10' : 'from-white/5'} to-transparent backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] group ${popular ? 'neon-border' : 'border border-white/10'}`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-electron-neon-blue text-electron-dark-blue text-xs font-bold px-3 py-1 rounded-bl-lg">
            Популярный
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className={`w-12 h-12 ${popular ? 'bg-electron-neon-blue/20' : 'bg-white/10'} rounded-lg flex items-center justify-center mb-4`}>
          <div className={`${popular ? 'text-electron-neon-blue' : 'text-white'}`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-electron-neon-blue text-3xl font-bold">{price}</span>
            <span className="text-white/70 ml-1">₽/мес</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex-shrink-0 w-5 h-5 ${popular ? 'text-electron-neon-blue' : 'text-white/50'} mr-3`}>
                <Check size={18} />
              </div>
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link to={linkTo}>
          <Button className={`w-full ${popular ? 'neon-button' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
            Подробнее
          </Button>
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-electron-neon-blue/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ServiceCard;
