import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className={`relative h-full rounded-2xl transition-transform duration-300 hover:scale-[1.02] ${
      popular ? "neon-border animate-pulse-neon" : "border border-white/10"
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electron-neon-blue text-electron-dark-blue text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
          Популярный
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-electron-neon-blue">{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-white/70 text-sm mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-white/70 text-sm">от</span>
          <div className="text-3xl font-bold text-white">
            {price} <span className="text-sm font-normal text-white/70">₽/мес</span>
          </div>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="text-white/80 text-sm flex items-start">
                <span className="text-electron-neon-blue mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          to={linkTo}
          className="inline-flex items-center gap-2 text-electron-neon-blue hover:text-electron-light-blue transition-colors mt-auto"
        >
          Подробнее
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
