import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Copy, CodeIcon, Server } from "lucide-react";
import { toast } from "sonner";
import { MainLayout } from "../layout/MainLayout";

export const Documentation = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard");
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-slide-up">
        <div className="mb-12 text-center">
          zs
          <h1 className="text-4xl font-bold mb-4">Stripe Integration Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A step-by-step guide to integrating Stripe payments in your MERN
            stack application
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="frontend">Frontend Setup</TabsTrigger>
            <TabsTrigger value="backend">Backend Integration</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-6">
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Install Stripe.js</h2>
                <p className="text-muted-foreground">
                  Start by installing the Stripe.js library in your React
                  application.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>
                      npm install @stripe/stripe-js @stripe/react-stripe-js
                    </code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() =>
                      copyToClipboard(
                        "npm install @stripe/stripe-js @stripe/react-stripe-js"
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Initialize Stripe</h2>
                <p className="text-muted-foreground">
                  Set up the Stripe provider in your application.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your stripe publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <YourCheckoutComponent />
    </Elements>
  );
}`}</code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() =>
                      copyToClipboard(`import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your stripe publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <YourCheckoutComponent />
    </Elements>
  );
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  3. Create Payment Form
                </h2>
                <p className="text-muted-foreground">
                  Implement the CardElement from Stripe to collect payment
                  details securely.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    if (!stripe || !elements) {
      return;
    }
    
    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    
    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: 1000, // $10.00
        }),
      });
      
      const paymentResponse = await response.json();
      
      // Handle success or error
      console.log(paymentResponse);
    }
    
    setLoading(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
}`}</code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() =>
                      copyToClipboard(`import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    if (!stripe || !elements) {
      return;
    }
    
    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    
    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: 1000, // $10.00
        }),
      });
      
      const paymentResponse = await response.json();
      
      // Handle success or error
      console.log(paymentResponse);
    }
    
    setLoading(false);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white"
              >
                Try the Demo
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-6">
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  1. Install Stripe Server SDK
                </h2>
                <p className="text-muted-foreground">
                  Install the Stripe Node.js library in your Express backend.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>npm install stripe</code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() => copyToClipboard("npm install stripe")}
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Configure Stripe</h2>
                <p className="text-muted-foreground">
                  Initialize Stripe with your secret key in your Node.js
                  backend.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// In your server.js or payment controller
const express = require('express');
const Stripe = require('stripe');

// Initialize Stripe with your secret key
const stripe = Stripe('sk_test_your_secret_key');
const app = express();

app.use(express.json());`}</code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() =>
                      copyToClipboard(`// In your server.js or payment controller
const express = require('express');
const Stripe = require('stripe');

// Initialize Stripe with your secret key
const stripe = Stripe('sk_test_your_secret_key');
const app = express();

app.use(express.json());`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  3. Create Payment Endpoint
                </h2>
                <p className="text-muted-foreground">
                  Set up an API endpoint to process payments on your server.
                </p>

                <div className="relative rounded-lg bg-secondary p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`app.post('/api/payment', async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;
    
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: 'https://yourwebsite.com/success',
    });
    
    // Send the response back to the client
    res.json({
      success: true,
      paymentIntent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});`}</code>
                  </pre>
                  <button
                    className="absolute top-2 right-2 p-1 rounded-md hover:bg-background/50 transition-colors"
                    onClick={() =>
                      copyToClipboard(`app.post('/api/payment', async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;
    
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: 'https://yourwebsite.com/success',
    });
    
    // Send the response back to the client
    res.json({
      success: true,
      paymentIntent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </section>
            </div>

            <div className="border-t border-border/60 mt-8 pt-8">
              <h3 className="text-lg font-medium mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://stripe.com/docs/payments/accept-a-payment?platform=web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Stripe Official Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/stripe-samples/accept-a-payment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <CodeIcon className="h-4 w-4 mr-2" />
                    Stripe Payment Samples
                  </a>
                </li>
                <li>
                  <a
                    href="https://dashboard.stripe.com/test/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <Server className="h-4 w-4 mr-2" />
                    Stripe Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};
