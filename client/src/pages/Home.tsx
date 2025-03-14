import { useState } from "react";
import {
  ArrowRight,
  CreditCard,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";
import { MainLayout } from "../layout/MainLayout";
import { ProductProps } from "../components/ProductCard";
import Steps, { Step } from "../components/ui/steps";
import ProductSelection from "../components/ProductSelection";
import { PaymentForm } from "../components/PaymentForm";
import { CheckoutComplete } from "../components/CheckoutComplete";

// Mock product data
const productData: ProductProps[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 9.99,
    features: ["Core payment processing", "Basic reporting", "Email support"],
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: 29.99,
    features: [
      "Advanced payment processing",
      "Detailed analytics",
      "Priority support",
      "Custom branding",
    ],
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: 99.99,
    features: [
      "Unlimited processing",
      "Advanced fraud detection",
      "Dedicated account manager",
      "Custom integration",
      "24/7 phone support",
    ],
  },
];

// Checkout flow steps
const steps: Step[] = [
  {
    id: "select",
    title: "Select Plan",
  },
  {
    id: "payment",
    title: "Payment",
  },
  {
    id: "complete",
    title: "Complete",
  },
];

export const Home = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>("pro");
  const [currentStep, setCurrentStep] = useState<string>("select");
  const [transactionId, setTransactionId] = useState<string>("");

  const selectedProduct = productData.find(
    (product) => product.id === selectedProductId
  );

  const handleProceedToPayment = () => {
    setCurrentStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentComplete = () => {
    // Generate random transaction ID
    const randomId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setTransactionId(randomId);
    setCurrentStep("complete");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainLayout>
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-12 text-center animate-slide-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Payment Demo
          </span>
          <h1 className="text-4xl font-bold mb-4">
            Stripe Payment Integration
          </h1>
          <p className="text-lg text-muted-foreground">
            A lightweight demo showcasing how to integrate Stripe payments in
            your MERN application
          </p>
        </div>

        <div className="mb-12">
          <Steps steps={steps} currentStep={currentStep} />
        </div>

        {currentStep === "select" && (
          <div className="space-y-8 animate-slide-up">
            <ProductSelection
              products={productData}
              selectedProductId={selectedProductId}
              onProductSelect={setSelectedProductId}
            />

            <div className="flex justify-center pt-4">
              <button
                onClick={handleProceedToPayment}
                className="px-6 py-3 rounded-xl bg-primary text-white flex items-center gap-2 hover:bg-primary/90 transition-all shadow-sm"
              >
                Proceed to Payment
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {currentStep === "payment" && selectedProduct && (
          <PaymentForm
            amount={selectedProduct.price}
            onPaymentComplete={handlePaymentComplete}
          />
        )}

        {currentStep === "complete" && selectedProduct && (
          <CheckoutComplete
            transactionId={transactionId}
            amount={selectedProduct.price}
          />
        )}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-card border border-border/40 rounded-xl p-6 text-center shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Simple Checkout</h3>
            <p className="text-sm text-muted-foreground">
              Minimal UI with intuitive steps for a smooth checkout experience.
            </p>
          </div>

          <div className="bg-card border border-border/40 rounded-xl p-6 text-center shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Secure Payments</h3>
            <p className="text-sm text-muted-foreground">
              PCI-compliant forms handle card details with industry-standard
              security.
            </p>
          </div>

          <div className="bg-card border border-border/40 rounded-xl p-6 text-center shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Ready to Implement</h3>
            <p className="text-sm text-muted-foreground">
              Clean code structure that's easy to understand and adapt to your
              needs.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
