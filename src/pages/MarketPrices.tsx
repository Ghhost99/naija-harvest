import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown, Search, BarChart3, Filter } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface MarketPriceData {
  product: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  category: string;
  trend: "up" | "down";
  change: number;
  volume: string;
  marketInfo: string;
}

const MarketPrices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const marketData: MarketPriceData[] = [
    {
      product: "Tomato",
      currentPrice: 2500,
      previousPrice: 2300,
      unit: "per basket",
      category: "Vegetables",
      trend: "up",
      change: 8.7,
      volume: "1,250 baskets",
      marketInfo: "High demand from urban areas"
    },
    {
      product: "Maize (Corn)",
      currentPrice: 15000,
      previousPrice: 15500,
      unit: "per bag (100kg)",
      category: "Grains",
      trend: "down",
      change: -3.2,
      volume: "890 bags",
      marketInfo: "Good harvest season"
    },
    {
      product: "Rice (Local)",
      currentPrice: 35000,
      previousPrice: 32000,
      unit: "per bag (50kg)",
      category: "Grains",
      trend: "up",
      change: 9.4,
      volume: "2,100 bags",
      marketInfo: "Limited supply affecting prices"
    },
    {
      product: "Yam",
      currentPrice: 800,
      previousPrice: 750,
      unit: "per medium tuber",
      category: "Tubers",
      trend: "up",
      change: 6.7,
      volume: "5,600 tubers",
      marketInfo: "Festival season driving demand"
    },
    {
      product: "Plantain",
      currentPrice: 3500,
      previousPrice: 3700,
      unit: "per bunch",
      category: "Fruits",
      trend: "down",
      change: -5.4,
      volume: "780 bunches",
      marketInfo: "Abundant supply this week"
    },
    {
      product: "Palm Oil",
      currentPrice: 12000,
      previousPrice: 10500,
      unit: "per gallon",
      category: "Cash Crops",
      trend: "up",
      change: 14.3,
      volume: "450 gallons",
      marketInfo: "Export demand increasing"
    },
    {
      product: "Cowpea (Beans)",
      currentPrice: 18000,
      previousPrice: 17200,
      unit: "per bag (100kg)",
      category: "Legumes",
      trend: "up",
      change: 4.7,
      volume: "320 bags",
      marketInfo: "Steady demand from processors"
    },
    {
      product: "Cassava",
      currentPrice: 8000,
      previousPrice: 8200,
      unit: "per bag",
      category: "Tubers",
      trend: "down",
      change: -2.4,
      volume: "1,890 bags",
      marketInfo: "Good supply from farmers"
    }
  ];

  const categories = ["all", ...Array.from(new Set(marketData.map(item => item.category)))];

  const filteredData = marketData.filter(item => {
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Live Market{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Prices
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time pricing data from major Nigerian markets. Compare prices, track trends, and make informed decisions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Market Data Table */}
        <div className="space-y-4">
          {filteredData.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {/* Product Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">{item.product}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.unit}</p>
                </div>

                {/* Current Price */}
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(item.currentPrice)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Previous: {formatPrice(item.previousPrice)}
                  </div>
                </div>

                {/* Trend */}
                <div className="flex items-center space-x-2">
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                    item.trend === "up" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    {item.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span className="font-medium text-sm">
                      {Math.abs(item.change)}%
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Vol: {item.volume}
                  </div>
                </div>

                {/* Market Info & Action */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {item.marketInfo}
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full md:w-auto"
                  >
                    <BarChart3 className="h-3 w-3 mr-1" />
                    View Chart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Market Summary */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-accent/50 to-primary/10">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-lg">Market Summary</h3>
            <p className="text-muted-foreground">
              Data updated every 30 minutes from major Nigerian markets including Alaba, Mile 12, Bodija, and New Benin Market.
            </p>
            <div className="flex justify-center space-x-4 text-sm pt-2">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{filteredData.filter(item => item.trend === "up").length} products up</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{filteredData.filter(item => item.trend === "down").length} products down</span>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketPrices;