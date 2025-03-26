import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Trophy, Calendar, BarChart } from "lucide-react";

export default function Sports() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)`,
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
              Empowering Sports Clubs with Seamless Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your club operations with our comprehensive sports management platform.
            </p>
            <Link href="/#demo">
              <Button size="lg">Discover Sports Solutions</Button>
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
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Membership Management</h3>
              <p className="text-sm text-gray-600">
                Efficiently manage member profiles, subscriptions, and access control.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Training Programs</h3>
              <p className="text-sm text-gray-600">
                Organize and track training sessions and player development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Event Planning</h3>
              <p className="text-sm text-gray-600">
                Schedule and manage tournaments, matches, and club events.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <BarChart className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Performance Analytics</h3>
              <p className="text-sm text-gray-600">
                Track and analyze team and individual performance metrics.
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
              Ready to Elevate Your Sports Club?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get started with Comet's sports management solutions today.
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
