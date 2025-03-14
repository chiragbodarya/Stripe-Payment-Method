import React, { useState } from "react";
import { CreditCard, Lock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../libs/utils";

interface PaymentFormProps {
  amount: number;
  onPaymentComplete: () => void;
  className?: string;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onPaymentComplete,
  className,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Add space after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Limit to 16 digits (19 chars with spaces)
    return formatted.substring(0, 19);
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Add slash after first 2 digits
    if (digits.length > 2) {
      return `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
    }

    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate API call
    try {
      // This would be where you integrate with Stripe.js in a real implementation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo, display success if using test card, otherwise show error
      if (cardNumber.replace(/\s/g, "") === "4242424242424242") {
        toast.success("Payment completed successfully!");
        onPaymentComplete();
      } else {
        setError(
          "Invalid card number. Try using 4242 4242 4242 4242 for testing."
        );
      }
    } catch (err) {
      setError("Payment processing failed. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto p-6 rounded-2xl",
        "border border-border/60 bg-card shadow-sm",
        "animate-slide-up",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Payment Details</h2>
        <CreditCard className="h-5 w-5 text-primary" />
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-destructive/10 text-destructive flex items-center gap-2">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name on Card
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="cardNumber" className="text-sm font-medium">
            Card Number
          </label>
          <div className="relative">
            <input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="4242 4242 4242 4242"
              required
              className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            For testing, use: 4242 4242 4242 4242
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="expiryDate" className="text-sm font-medium">
              Expiry Date
            </label>
            <input
              id="expiryDate"
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
              placeholder="MM/YY"
              required
              maxLength={5}
              className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="cvc" className="text-sm font-medium">
              CVC
            </label>
            <input
              id="cvc"
              type="text"
              value={cvc}
              onChange={(e) =>
                setCvc(e.target.value.replace(/\D/g, "").substring(0, 3))
              }
              placeholder="123"
              required
              maxLength={3}
              className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full py-3 rounded-xl text-base font-medium bg-primary text-white",
              "hover:bg-primary/90 transition-colors shadow-sm",
              "flex items-center justify-center gap-2",
              loading ? "opacity-80 cursor-not-allowed" : ""
            )}
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Pay ${amount.toFixed(2)}
                <Lock className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-center text-xs text-muted-foreground">
        <Lock className="h-3 w-3 mr-1" />
        <span>Payments are secure and encrypted</span>
      </div>
    </div>
  );
};
