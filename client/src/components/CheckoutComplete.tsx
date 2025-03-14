import React from "react";
import { Check, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../libs/utils";

interface CheckoutCompleteProps {
  transactionId: string;
  amount: number;
  className?: string;
}

export const CheckoutComplete: React.FC<CheckoutCompleteProps> = ({
  transactionId,
  amount,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto p-8 rounded-2xl",
        "border border-border/60 bg-card shadow-sm",
        "animate-slide-up text-center",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Check className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-2xl font-semibold">Payment Successful</h2>

        <p className="text-muted-foreground">
          Thank you! Your payment has been processed successfully.
        </p>

        <div className="my-4 w-full p-4 rounded-lg bg-secondary/50 text-left">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Amount paid:</span>
            <span className="font-medium">${amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Transaction ID:</span>
            <span className="font-mono text-xs">{transactionId}</span>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="flex items-center justify-center gap-1 py-2 px-4 rounded-lg border border-border text-sm font-medium hover:bg-secondary/70 transition-colors">
            <Download className="h-4 w-4 mr-1" />
            Receipt
          </button>

          <Link
            to="/docs"
            className="flex items-center justify-center gap-1 py-2 px-4 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Documentation
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
};
