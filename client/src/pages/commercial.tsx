import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building2, CreditCard, Key, BarChart3 } from "lucide-react";

export default function Commercial() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1448630360428-65456885c650)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Smart Solutions for Coworking & Community Spaces
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your commercial space with intelligent management solutions.
            </p>
            <Link href="/#demo">
              <Button size="lg">Enhance Your Space</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Space Management</h3>
              <p className="text-sm text-gray-600">
                Efficiently manage bookings and optimize space utilization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <CreditCard className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Automated Billing</h3>
              <p className="text-sm text-gray-600">
                Streamline payments and invoicing for space rentals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Key className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-sm text-gray-600">
                Secure and flexible access management system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">
                Gain insights with comprehensive usage analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Commercial Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get started with Comet's commercial solutions today.
            </p>
            <Link href="/#demo">
              <Button size="lg">Request a Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
