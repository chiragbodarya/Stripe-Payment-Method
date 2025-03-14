import React from "react";
import { cn } from "../../libs/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "w-full py-6 px-4 sm:px-6 lg:px-8",
        "backdrop-blur-md bg-background/70 border-b border-border/40 z-10",
        "animate-fade-in fixed top-0 left-0 right-0",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Stripe<span className="text-primary font-semibold">Demo</span>
        </Link>

        <nav className="hidden sm:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Documentation
          </Link>
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Stripe Docs
          </a>
        </nav>

        <div className="hidden sm:block">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};
