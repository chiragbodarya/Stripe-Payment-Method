import React from "react";
import { cn } from "../../libs/utils";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        "w-full py-8 px-4 sm:px-6 lg:px-8 mt-16",
        "bg-secondary/50 border-t border-border/40",
        "animate-fade-in",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Stripe Demo</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              A simple and elegant demonstration of Stripe payment integration
              for MERN stack developers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://stripe.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Stripe Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/stripe/stripe-node"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Stripe Node.js Library
                </a>
              </li>
              <li>
                <a
                  href="https://stripe.com/docs/testing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Test Cards & Data
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Stripe Demo. This is a demonstration
            project and not affiliated with Stripe Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
