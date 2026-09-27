import { CheckCircle2, Truck, ShieldCheck, Clock } from "lucide-react";

export const productsData = [
  { 
    id: "amber-cloud-4-piece", 
    name: "Amber Cloud 4-Piece Sectional", 
    price: 2399.00, 
    tag: "Best Seller", 
    category: "Sectional", 
    image: "/product/sofa-1.jpg", 
    images: ["/product/sofa-1.jpg", "/product/sofa-2.jpg", "/product/sofa-3.jpg", "/product/sofa-4.jpg"],
    colors: ["#DCD3C6", "#EBE9E2", "#C2BDB8", "#5B5B5B"],
    description: "Experience unparalleled comfort with the Amber Cloud Sectional. Crafted with high-resilience foam and premium linen-blend upholstery, this modular piece effortlessly adapts to your living space. Designed for deep lounging and everyday luxury.",
    dimensions: "120\"W x 80\"D x 32\"H"
  },
  { 
    id: "amber-cloud-3-piece", 
    name: "Amber Cloud 3-Piece Sofa", 
    price: 1899.00, 
    tag: "New Arrival", 
    category: "Sofa", 
    image: "/product/sofa-2.jpg", 
    images: ["/product/sofa-2.jpg", "/product/sofa-1.jpg"],
    colors: ["#DCD3C6", "#EBE9E2"],
    description: "The perfect balance of minimalist design and plush comfort. The 3-Piece Sofa offers deep seating and a sleek silhouette that elevates any modern living room.",
    dimensions: "90\"W x 40\"D x 32\"H"
  },
  { 
    id: "amber-cloud-l-shape", 
    name: "Amber Cloud L-Shape Sectional", 
    price: 2899.00, 
    tag: "Best Seller", 
    category: "Sectional", 
    image: "/product/sofa-3.jpg", 
    images: ["/product/sofa-3.jpg", "/product/sofa-2.jpg"],
    colors: ["#C2BDB8", "#5B5B5B", "#EBE9E2"],
    description: "Maximize your seating with this luxurious L-Shape Sectional. Perfect for family gatherings, featuring easy-to-clean fabric and sturdy construction.",
    dimensions: "110\"W x 110\"D x 32\"H"
  },
  { 
    id: "amber-cloud-2-piece", 
    name: "Amber Cloud 2-Piece Loveseat", 
    price: 1499.00, 
    tag: "", 
    category: "Sofa", 
    image: "/product/sofa-4.jpg", 
    images: ["/product/sofa-4.jpg", "/product/sofa-3.jpg"],
    colors: ["#5B5B5B"],
    description: "Cozy and compact, the 2-Piece Loveseat is ideal for smaller spaces or apartments without compromising on the signature Amber Cloud comfort.",
    dimensions: "65\"W x 40\"D x 32\"H"
  },
  { 
    id: "amber-cloud-5-piece", 
    name: "Amber Cloud 5-Piece Modular", 
    price: 3499.00, 
    tag: "Premium", 
    category: "Sectional", 
    image: "/product/sofa-1.jpg", 
    images: ["/product/sofa-1.jpg", "/product/sofa-4.jpg"],
    colors: ["#DCD3C6", "#C2BDB8"],
    description: "The ultimate entertainment setup. Rearrange the 5 pieces to perfectly suit your movie nights, parties, or lazy Sunday afternoons.",
    dimensions: "150\"W x 80\"D x 32\"H"
  }, 
  { 
    id: "kashi-luxe-accent-chair", 
    name: "Kashi Luxe Accent Chair", 
    price: 899.00, 
    tag: "", 
    category: "Chair", 
    image: "/product/sofa-2.jpg", 
    images: ["/product/sofa-2.jpg"],
    colors: ["#EBE9E2", "#C2BDB8"],
    description: "A statement piece for any room. The Luxe Accent Chair features ergonomic curves, premium fabric, and a sturdy steel frame finished in matte black.",
    dimensions: "32\"W x 34\"D x 36\"H"
  },
  { 
    id: "kashi-minimal-coffee-table", 
    name: "Kashi Minimal Coffee Table", 
    price: 599.00, 
    tag: "Top Rated", 
    category: "Table", 
    image: "/product/sofa-3.jpg", 
    images: ["/product/sofa-3.jpg"],
    colors: ["#DCD3C6"],
    description: "Sleek and highly functional. This minimalist coffee table adds a touch of modern luxury with its clean lines and durable finish.",
    dimensions: "48\"W x 24\"D x 16\"H"
  },
  { 
    id: "amber-cloud-ottoman", 
    name: "Amber Cloud Ottoman", 
    price: 499.00, 
    tag: "", 
    category: "Storage", 
    image: "/product/sofa-4.jpg", 
    images: ["/product/sofa-4.jpg"],
    colors: ["#5B5B5B", "#EBE9E2"],
    description: "Versatile and stylish. Use it as a footrest, extra seating, or even a soft center table. Features a hidden storage compartment.",
    dimensions: "32\"W x 32\"D x 18\"H"
  },
  { 
    id: "kashi-velvet-sofa", 
    name: "Kashi Velvet 3-Seater", 
    price: 2100.00, 
    tag: "Limited", 
    category: "Sofa", 
    image: "/product/sofa-1.jpg", 
    images: ["/product/sofa-1.jpg"],
    colors: ["#2a7f62", "#DCD3C6"],
    description: "Draped in rich velvet, this 3-seater exudes opulence. Its striking color and luxurious texture make it the centerpiece of any premium living room.",
    dimensions: "88\"W x 38\"D x 34\"H"
  }, 
  { 
    id: "kashi-steel-dining-set", 
    name: "Kashi Steel Dining Set", 
    price: 3999.00, 
    tag: "", 
    category: "Table", 
    image: "/product/sofa-2.jpg", 
    images: ["/product/sofa-2.jpg"],
    colors: ["#5B5B5B"],
    description: "Gather around in style. This durable yet elegant dining set combines a robust steel base with a premium tabletop for unforgettable meals.",
    dimensions: "72\"W x 36\"D x 30\"H"
  },
];

export const categories = ["All", "Sectional", "Sofa", "Chair", "Table", "Storage"];

export const features = [
  { icon: CheckCircle2, text: "Craftsmanship" },
  { icon: Truck, text: "Fast Delivery" },
  { icon: ShieldCheck, text: "Secure Payment" },
  { icon: Clock, text: "24/7 Support" },
];

export const roomInspo = [
  { id: 1, name: "Living Room", image: "/product/inspo-1.jpg" },
  { id: 2, name: "Minimalist Space", image: "/product/inspo-2.jpg" },
  { id: 3, name: "Modern Lounge", image: "/product/inspo-3.jpg" },
  { id: 4, name: "Cozy Corner", image: "/product/inspo-4.jpg" },
];

export const reviews = [
  { id: 1, text: "We loved the Amber Cloud sectional. The modular design makes it so easy to fit perfectly in our living room. It's beautiful and the fabric is premium.", author: "Sarah T.", image: "/avatar3.jpg" },
  { id: 2, text: "Absolutely stunning quality! The delivery was quick, and the customer service was fantastic.", author: "Mike R.", image: "/avatar1.jpg" },
  { id: 3, text: "The comfort is unmatched. It completely transformed our everyday living experience.", author: "Emily C.", image: "/avatar2.jpg" },
];