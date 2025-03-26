import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { BellRing, Calendar, MessageSquare, FileText } from "lucide-react";

export default function Residential() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa)`,
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
              Community Mobile App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Foster stronger, more connected living environments with our comprehensive community management platform.
            </p>
            <Link href="/#demo">
              <Button size="lg">Explore Residential Solutions</Button>
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
              <BellRing className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Real-time Announcements</h3>
              <p className="text-sm text-gray-600">
                Keep residents informed with targeted community announcements and updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Event Management</h3>
              <p className="text-sm text-gray-600">
                Organize and promote community gatherings and activities with ease.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <MessageSquare className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Seamless Communication</h3>
              <p className="text-sm text-gray-600">
                Enable effortless interaction between residents and property managers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Resource Access</h3>
              <p className="text-sm text-gray-600">
                Centralized access to important documents and resources for residents.
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
              Ready to Transform Your Residential Community?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get started with Comet's residential solutions today.
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