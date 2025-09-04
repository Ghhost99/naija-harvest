import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PriceTicker from "@/components/PriceTicker";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, ShoppingBag, Star, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  // Featured products for homepage
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Tomatoes",
      price: 2300,
      unit: "per basket",
      quantity: "50 baskets available",
      location: "Kano State",
      farmerName: "Musa Ibrahim",
      marketPrice: 2500,
      rating: 4.8,
      harvestDate: "2024-12-20",
      trend: "up" as const
    },
    {
      id: "2",
      name: "Yellow Maize",
      price: 14500,
      unit: "per bag (100kg)",
      quantity: "40 bags available",
      location: "Kaduna State",
      farmerName: "John Adebayo",
      marketPrice: 15000,
      rating: 4.6,
      harvestDate: "2024-12-18",
      trend: "up" as const
    },
    {
      id: "3",
      name: "Sweet Yam",
      price: 750,
      unit: "per tuber",
      quantity: "200 tubers available",
      location: "Benue State",
      farmerName: "Grace Ochoche",
      marketPrice: 800,
      rating: 4.7,
      harvestDate: "2024-12-22",
      trend: "down" as const
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Prices",
      description: "Get live market prices updated every 30 minutes from major Nigerian markets."
    },
    {
      icon: Users,
      title: "Verified Farmers",
      description: "Connect with authenticated farmers who provide quality produce and transparent pricing."
    },
    {
      icon: ShoppingBag,
      title: "Direct Trading",
      description: "Skip middlemen and trade directly with farmers for better prices and fresher produce."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Community ratings and reviews ensure you get the best products from trusted sellers."
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "Restaurant Owner, Lagos",
      content: "NaijaHarvest has revolutionized how I source ingredients. Direct farmer connections mean fresher produce and better prices for my restaurant.",
      rating: 5
    },
    {
      name: "Fatima Usman",
      role: "Farmer, Kebbi State", 
      content: "I've increased my income by 40% since joining NaijaHarvest. Direct access to buyers means better prices for my rice harvest.",
      rating: 5
    },
    {
      name: "Michael Okonkwo",
      role: "Food Processor, Onitsha",
      content: "The real-time pricing helps me make better purchasing decisions. I always know I'm getting competitive rates.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PriceTicker />
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NaijaHarvest?
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering Nigerian agriculture through technology, connecting farmers and buyers for a stronger food supply chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Fresh picks from verified farmers across Nigeria</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center space-x-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" className="flex items-center space-x-2 mx-auto">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-accent/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of farmers and buyers who trust NaijaHarvest for their agricultural needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Agricultural Business?
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Join NaijaHarvest today and connect with Nigeria's largest agricultural marketplace. Whether you're a farmer looking to sell or a buyer seeking fresh produce, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground"
              >
                Start Buying
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Become a Seller
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified farmers</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Real-time prices</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Direct communication</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 NaijaHarvest. Connecting Nigerian farmers and buyers for a stronger agricultural future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
