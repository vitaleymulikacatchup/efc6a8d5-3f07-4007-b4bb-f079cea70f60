"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Leaf, Flame, Users, Heart, Star, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980046715-tsdbpkec.jpg"
          logoAlt="SuperCoffee Logo"
          brandName="SuperCoffee"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exceptional Coffee, Every Cup"
          description="Crafted from the finest beans, roasted to perfection and served with passion at SuperCoffee"
          tag="Premium Coffee"
          tagIcon={Coffee}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980048191-xb02n0ug.jpg",
              imageAlt: "Artisan espresso coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980049735-hf34a88t.jpg",
              imageAlt: "Premium specialty coffee roasted beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980051043-t324dw8d.jpg",
              imageAlt: "Professional barista brewing coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980052287-j3ni7975.jpg",
              imageAlt: "Cozy coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980053430-yz77ci99.jpg",
              imageAlt: "Coffee latte art decoration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980048191-xb02n0ug.jpg",
              imageAlt: "Premium espresso serving"
            }
          ]}
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="At SuperCoffee, we believe that great coffee starts with passion and quality. We source the finest beans from sustainable farms around the world and roast them in-house to bring you the most exceptional flavors."
          tag="Our Mission"
          tagIcon={Leaf}
          bulletPoints={[
            {
              title: "Ethically Sourced",
              description: "We partner directly with farmers who share our commitment to quality and sustainability",
              icon: Leaf
            },
            {
              title: "Small-Batch Roasting",
              description: "Each batch is carefully roasted in-house to achieve the perfect balance of flavor and aroma",
              icon: Flame
            },
            {
              title: "Expert Baristas",
              description: "Our team of skilled baristas craft every drink with precision and passion",
              icon: Users
            },
            {
              title: "Community Focused",
              description: "We create a welcoming space for coffee lovers to connect and share their passion",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980054674-jqej7go1.jpg"
          imageAlt="SuperCoffee roastery workspace"
          imagePosition="right"
          textboxLayout="default"
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu"
          description="Experience our signature coffee selections crafted by our expert baristas"
          tag="Daily Specials"
          tagIcon={Star}
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980055961-l32rxusl.jpg",
              imageAlt: "Single origin espresso shot",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Creamy Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980056994-miaqkx2j.jpg",
              imageAlt: "Cappuccino with latte art",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Classic Americano",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980058283-utd8dpe1.jpg",
              imageAlt: "Dark roast americano",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by Coffee Enthusiasts"
          description="Join our community of passionate coffee lovers who enjoy premium quality every day"
          tag="Customer Reviews"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahlovescoffee",
              testimonial: "SuperCoffee has completely changed my morning routine. The quality is unmatched and the atmosphere is incredibly welcoming. I cannot imagine starting my day anywhere else.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980059473-3y2iqxz9.jpg",
              imageAlt: "Sarah Mitchell smiling"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@coffeeaddict_james",
              testimonial: "As a coffee aficionado, I have tried many places. SuperCoffee stands out with their attention to detail and sourcing. Their baristas really know their craft.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980060592-wzadq8ke.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmacafe",
              testimonial: "The best espresso I have had in years. The cozy vibe makes it perfect for working or catching up with friends. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980062223-y92ttvj1.jpg",
              imageAlt: "Emma Rodriguez smiling"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@davidthompsonlife",
              testimonial: "Consistently excellent coffee and service. The team genuinely cares about their customers. This is my go-to spot without question.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980063460-9qbt8o9l.jpg",
              imageAlt: "David Thompson portrait"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with SuperCoffee"
          description="Subscribe to our newsletter for exclusive updates, new menu items, special promotions, and coffee brewing tips delivered straight to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763980064615-mnurx9wp.jpg"
          imageAlt="SuperCoffee cozy interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SuperCoffee"
          copyrightText="© SuperCoffee, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "menu" },
                { label: "Pastries", href: "menu" },
                { label: "Drinks", href: "menu" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}