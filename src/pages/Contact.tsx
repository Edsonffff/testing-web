import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  PageTransition,
  AnimatedSection,
  AnimatedText,
  AnimatedCard,
} from "@/components/animations";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** ✅ WhatsApp submit (Cloudflare-safe) */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919442301105"; // ✅ change if needed

    const text = `
New Enquiry – Kiruba Education & Charitable Trust

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
    setIsSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9442301105 / 9443801105",
      href: "tel:9442301105",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kecttrust@gmail.com",
      href: "mailto:kecttrust@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value:
        "Kalladimamoodu Junction, Cherupaloor, Kulasekharam – 629161",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon – Sat, 9 AM – 5 PM",
    },
  ];

  return (
    <PageTransition>
      <Layout>
        {/* HEADER */}
        <section className="section-padding bg-secondary text-center">
          <AnimatedText
            as="h1"
            zoom
            className="text-4xl md:text-5xl font-bold"
          >
            Contact <span className="text-primary">Us</span>
          </AnimatedText>
          <p className="mt-4 text-muted-foreground">
            Have questions? Send us a WhatsApp message.
          </p>
        </section>

        {/* CONTENT */}
        <section className="section-padding">
          <div className="container-width grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <AnimatedCard className="p-8 rounded-2xl bg-card">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                  <h3 className="text-2xl font-bold mt-4">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Your enquiry has opened in WhatsApp. If it didn't open,
                    message us directly on{" "}
                    <a
                      href="https://wa.me/919442301105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        pattern="[0-9+\s-]{10,15}"
                        title="Please enter a valid phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g. Course enquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us how we can help you"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
                  >
                    <Button className="w-full text-lg">
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              )}
            </AnimatedCard>

            {/* INFO */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <AnimatedSection key={i} direction="left">
                  <div className="flex gap-4 p-4 bg-card rounded-xl">
                    <item.icon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Google Maps */}
              <AnimatedSection direction="left" className="mt-8">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <iframe
                    src="https://www.google.com/maps?q=Kiruba%20Education%20%26%20Charitable%20Trust%2C%20Kalladimamoodu%20Junction%2C%20Cherupaloor%2C%20Kulasekharam%20629161%2C%20Tamil%20Nadu&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kiruba Trust Location"
                    className="w-full"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/nzog2hDKYQpptZLh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default Contact;
