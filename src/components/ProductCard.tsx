import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, TrendingDown, MessageCircle, Star } from "lucide-react";
import nigerianProduce from "@/assets/nigerian-produce.jpg";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    unit: string;
    quantity: string;
    location: string;
    farmerName: string;
    marketPrice?: number;
    rating?: number;
    image?: string;
    harvestDate?: string;
    trend?: "up" | "down";
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateSavings = () => {
    if (product.marketPrice && product.price < product.marketPrice) {
      const savings = ((product.marketPrice - product.price) / product.marketPrice) * 100;
      return Math.round(savings);
    }
    return null;
  };

  const savings = calculateSavings();

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-b from-background to-accent/30">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image || nigerianProduce}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {savings && (
          <Badge className="absolute top-3 left-3 bg-green-500 text-white">
            Save {savings}%
          </Badge>
        )}
        {product.trend && (
          <div className={`absolute top-3 right-3 p-1 rounded-full ${
            product.trend === "up" ? "bg-green-500" : "bg-red-500"
          }`}>
            {product.trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-white" />
            ) : (
              <TrendingDown className="h-3 w-3 text-white" />
            )}
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        {/* Product Name & Price */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-muted-foreground">
              {product.unit}
            </span>
          </div>
          {product.marketPrice && (
            <div className="text-sm text-muted-foreground">
              Market avg: <span className="line-through">{formatPrice(product.marketPrice)}</span>
            </div>
          )}
        </div>

        {/* Quantity & Location */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Available:</span>
            <span className="font-medium">{product.quantity}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{product.location}</span>
          </div>
        </div>

        {/* Farmer Info */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="space-y-1">
            <div className="text-sm font-medium text-foreground">
              {product.farmerName}
            </div>
            {product.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground group"
          >
            <MessageCircle className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
            Contact
          </Button>
        </div>

        {product.harvestDate && (
          <div className="text-xs text-muted-foreground pt-1">
            Harvested: {new Date(product.harvestDate).toLocaleDateString()}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;