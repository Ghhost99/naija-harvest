import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

interface PriceData {
  product: string;
  price: number;
  unit: string;
  change: number;
  trend: "up" | "down";
}

const PriceTicker = () => {
  const [prices] = useState<PriceData[]>([
    { product: "Tomato", price: 2500, unit: "per basket", change: 5.2, trend: "up" },
    { product: "Maize", price: 15000, unit: "per bag", change: -2.1, trend: "down" },
    { product: "Rice", price: 35000, unit: "per bag", change: 8.5, trend: "up" },
    { product: "Yam", price: 800, unit: "per tuber", change: 3.2, trend: "up" },
    { product: "Plantain", price: 3500, unit: "per bunch", change: -1.5, trend: "down" },
    { product: "Palm Oil", price: 12000, unit: "per gallon", change: 12.8, trend: "up" },
    { product: "Cowpea", price: 18000, unit: "per bag", change: 4.1, trend: "up" },
    { product: "Cassava", price: 8000, unit: "per bag", change: -0.8, trend: "down" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % prices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent to-primary/10 border-y border-border/50 py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/20 p-2 rounded-full">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Live Market Prices</span>
          </div>
          
          <div className="flex-1 mx-8">
            <div className="relative h-8 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {prices.map((item, index) => (
                  <div key={index} className="min-w-full flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground">{item.product}</span>
                      <span className="text-primary font-bold">{formatPrice(item.price)}</span>
                      <span className="text-sm text-muted-foreground">{item.unit}</span>
                      <div className={`flex items-center space-x-1 ${
                        item.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}>
                        {item.trend === "up" ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span className="text-xs font-medium">
                          {Math.abs(item.change)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-1">
            {prices.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;