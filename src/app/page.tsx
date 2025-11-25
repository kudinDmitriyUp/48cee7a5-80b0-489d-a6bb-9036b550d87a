"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Calendar, Heart, Home, Leaf, Sparkles, Star, Utensils } from "lucide-react";

export default function SushiArtisanPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Sushi Artisan"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108917780-b8h083th.jpg"
          logoAlt="Sushi Artisan Logo"
          button={{
            text: "Reserve Your Table Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Savor the Art of Sushi"
          description="Handcrafted rolls, fresh ingredients, and a taste of tradition in every bite"
          tag="Premium Dining"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Reserve Your Table Now",
              href: "contact"
            },
            {
              text: "View Our Menu",
              href: "products"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108918640-o59zqxxl.jpg",
              imageAlt: "Fresh sushi rolls artisan plating"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108919312-avezg264.jpg",
              imageAlt: "Nigiri sushi presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108919976-0xu3y5k5.jpg",
              imageAlt: "Sashimi platter arrangement"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108920764-6bshg89p.jpg",
              imageAlt: "Sushi restaurant interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108921526-0m0gyqoh.jpg",
              imageAlt: "Chef preparing sushi"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Sushi Artisan"
          description={[
            "At Sushi Artisan, we believe that exceptional sushi is more than food—it's an art form. Each roll is crafted with meticulous attention to detail, using only the freshest ingredients sourced from trusted suppliers. Our chefs bring decades of combined experience in authentic Japanese cuisine preparation.",
            "We are dedicated to creating an unforgettable dining experience that honors traditional sushi-making techniques while celebrating modern culinary innovation. From the moment you walk through our doors, our welcoming team ensures every detail exceeds your expectations."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why Choose Sushi Artisan"
          description="Experience excellence in every aspect of your dining journey"
          tag="Our Strengths"
          tagIcon={Star}
          features={[
            {
              title: "Premium Fresh Ingredients",
              description: "We source the finest, freshest fish and ingredients daily from verified suppliers to ensure uncompromising quality",
              icon: Leaf
            },
            {
              title: "Authentic Japanese Craft",
              description: "Our master chefs trained in traditional Japanese techniques bring decades of expertise to every dish",
              icon: Award
            },
            {
              title: "Elegant Ambiance",
              description: "Dine in our thoughtfully designed space that combines modern comfort with traditional Japanese aesthetics",
              icon: Home
            },
            {
              title: "Personalized Service",
              description: "Our attentive staff works with you to create a customized dining experience tailored to your preferences",
              icon: Star
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu Items"
          description="Explore our signature dishes and seasonal favorites"
          tag="Menu Showcase"
          tagIcon={Utensils}
          products={[
            {
              id: "1",
              name: "Dragon Fire Roll",
              price: "$18.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108924798-wydpalvb.jpg",
              imageAlt: "Dragon Fire Roll - spicy and vibrant"
            },
            {
              id: "2",
              name: "Premium Nigiri Selection",
              price: "$22.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108925469-g0op36sp.jpg",
              imageAlt: "Premium Nigiri Selection - chef's special"
            },
            {
              id: "3",
              name: "Sashimi Deluxe Platter",
              price: "$28.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108926129-6awiqv5w.jpg",
              imageAlt: "Sashimi Deluxe Platter - premium raw fish"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real reviews from satisfied diners who love Sushi Artisan"
          tag="Customer Testimonials"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Food Blogger",
              company: "Culinary Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108926899-3l3ra2o3.jpg",
              imageAlt: "Sarah Chen enjoying sushi"
            },
            {
              id: "2",
              name: "Michael Johnson",
              role: "Restaurant Critic",
              company: "Urban Eats Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108927921-gbfswm2w.jpg",
              imageAlt: "Michael Johnson dining experience"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Marketing Director",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108928571-ix8o5q1n.jpg",
              imageAlt: "Emma Rodriguez at the restaurant"
            },
            {
              id: "4",
              name: "David Park",
              role: "CEO",
              company: "Digital Innovations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108929397-zel1kb2m.jpg",
              imageAlt: "David Park enjoying premium sushi"
            },
            {
              id: "5",
              name: "Jessica Williams",
              role: "Travel Influencer",
              company: "Wanderlust Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108930143-s320qih1.jpg",
              imageAlt: "Jessica Williams celebrating at sushi restaurant"
            },
            {
              id: "6",
              name: "Thomas Mueller",
              role: "Sommelier",
              company: "Fine Dining Alliance",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108930782-vyfadmbi.jpg",
              imageAlt: "Thomas Mueller enjoying fine dining experience"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Reserve Your Dining Experience"
          description="Join us for an unforgettable evening of authentic sushi and exceptional service. Subscribe to our newsletter for exclusive offers and special events."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108931710-8lhdk3c7.jpg"
          imageAlt="Elegant sushi dining setup"
          mediaPosition="right"
          tagIcon={Calendar}
          inputPlaceholder="Enter your email address"
          buttonText="Reserve Now"
          termsText="By subscribing, you agree to receive updates about our restaurant. We respect your privacy and never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108917780-b8h083th.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Sushi Artisan. All rights reserved."
          columns={[
            {
              title: "Dining",
              items: [
                {
                  label: "Reserve a Table",
                  href: "contact"
                },
                {
                  label: "View Menu",
                  href: "products"
                },
                {
                  label: "Private Events",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Blog",
                  href: "blog"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Cookie Policy",
                  href: "cookies"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}