import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const HeroSection = () => {
  const stats = [
    { label: "Active Farmers", value: "2,500+", icon: Users },
    { label: "Daily Listings", value: "1,200+", icon: ShoppingBag },
    { label: "Market Updates", value: "Real-time", icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                🇳🇬 Proudly Nigerian
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Connecting{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Farmers
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Buyers
                </span>{" "}
                Across Nigeria
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Get real-time market prices, connect directly with local farmers, and access fresh Nigerian produce at the best rates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Register as Farmer
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="p-4 bg-gradient-to-br from-background to-accent border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right side could have additional content or remain for the background image */}
          <div className="hidden lg:block">
            {/* This space showcases the beautiful background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;