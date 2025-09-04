import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Mock product data
  const products = [
    {
      id: "1",
      name: "Fresh Tomatoes",
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
      name: "Premium Rice",
      price: 33000,
      unit: "per bag (50kg)",
      quantity: "25 bags available",
      location: "Kebbi State",
      farmerName: "Fatima Usman",
      marketPrice: 35000,
      rating: 4.9,
      harvestDate: "2024-12-15",
      trend: "down" as const
    },
    {
      id: "3",
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
      id: "4",
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
    },
    {
      id: "5",
      name: "Ripe Plantain",
      price: 3200,
      unit: "per bunch",
      quantity: "30 bunches available",
      location: "Ogun State",
      farmerName: "Adebola Ogundimu",
      marketPrice: 3500,
      rating: 4.5,
      harvestDate: "2024-12-19",
      trend: "up" as const
    },
    {
      id: "6",
      name: "Red Palm Oil",
      price: 11500,
      unit: "per gallon",
      quantity: "15 gallons available",
      location: "Cross River State",
      farmerName: "Emeka Okafor",
      marketPrice: 12000,
      rating: 4.9,
      harvestDate: "2024-12-16",
      trend: "down" as const
    }
  ];

  const states = [
    "all", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", 
    "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", 
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", 
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
  ];

  const categories = [
    "all", "Grains & Cereals", "Vegetables", "Fruits", "Tubers", "Legumes", "Cash Crops"
  ];

  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "Under ₦5,000", value: "0-5000" },
    { label: "₦5,000 - ₦15,000", value: "5000-15000" },
    { label: "₦15,000 - ₦30,000", value: "15000-30000" },
    { label: "Above ₦30,000", value: "30000+" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmerName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesState = selectedState === "all" || product.location.includes(selectedState);
    
    const matchesPrice = () => {
      if (priceRange === "all") return true;
      if (priceRange === "0-5000") return product.price < 5000;
      if (priceRange === "5000-15000") return product.price >= 5000 && product.price <= 15000;
      if (priceRange === "15000-30000") return product.price >= 15000 && product.price <= 30000;
      if (priceRange === "30000+") return product.price > 30000;
      return true;
    };

    return matchesSearch && matchesState && matchesPrice();
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Nigerian{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect directly with verified farmers across Nigeria. Fresh produce, competitive prices, trusted sellers.
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products or farmers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* State Filter */}
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <SelectValue placeholder="Select State" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state} className="capitalize">
                    {state === "all" ? "All States" : state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <div className="flex items-center space-x-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <SelectValue placeholder="Price Range" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="space-y-4">
              <div className="text-muted-foreground text-lg">
                No products found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedState("all");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </Card>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Products
            </Button>
          </div>
        )}

        {/* Trust Indicators */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-accent/50 to-primary/10">
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-lg">Why Choose NaijaHarvest?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="text-primary font-semibold">✓ Verified Farmers</div>
                <div className="text-muted-foreground">All farmers are verified and rated by the community</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">✓ Best Prices</div>
                <div className="text-muted-foreground">Compare with market prices and save on every purchase</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-semibold">✓ Direct Contact</div>
                <div className="text-muted-foreground">Connect directly with farmers for fresh, quality produce</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Marketplace;