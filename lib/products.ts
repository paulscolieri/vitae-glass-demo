export type ProductCategory =
  | "mouthpiece"
  | "percolator"
  | "base"
  | "connector"
  | "ashcatcher"
  | "downstem"
  | "bowl";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  price: number;
  description: string;
  compatible?: string[];
}

function img(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export const products: Product[] = [
  // Mouthpieces
  {
    slug: "arc-mouthpiece",
    name: "The Arc",
    category: "mouthpiece",
    image: img("the arc mouthpiece.webp"),
    price: 59,
    description: "Curved form with ergonomic angle for effortless draws. Borosilicate glass with precision flame-polished joint.",
  },
  {
    slug: "ufo-mouthpiece",
    name: "The UFO",
    category: "mouthpiece",
    image: img("the ufo mouthpiece.webp"),
    price: 69,
    description: "Disc-shaped rim with wide aperture for smooth, unrestricted airflow. A signature Vitae form.",
  },
  {
    slug: "hourglass-mouthpiece",
    name: "The Hourglass",
    category: "mouthpiece",
    image: img("the hourglass mouthpiece.webp"),
    price: 64,
    description: "Tapered waist profile creates a natural grip point. Timeless geometry, laboratory-grade glass.",
  },
  {
    slug: "trio-mouthpiece",
    name: "The Trio",
    category: "mouthpiece",
    image: img("the trio mouthpiece.webp"),
    price: 74,
    description: "Triple-chamber opening with diffused airflow across three channels. Maximum filtration at the source.",
  },

  // Percolators
  {
    slug: "mini-matrix-percolator",
    name: "Mini Matrix",
    category: "percolator",
    image: img("mini matrix percolator.webp"),
    price: 109,
    description: "Grid of slitted holes creates hundreds of fine bubbles for intense diffusion in a compact form.",
  },
  {
    slug: "swiss-freeze-mod-percolator",
    name: "Swiss Freeze Mod",
    category: "percolator",
    image: img("swiss freeze mod percoloator.webp"),
    price: 149,
    description: "Glycerin-filled Swiss disc that freezes solid. Cool every draw to 0°C without diluting flavor.",
  },
  {
    slug: "mini-ufo-percolator",
    name: "Mini UFO",
    category: "percolator",
    image: img("mini UFO percolator.webp"),
    price: 99,
    description: "Saucer-shaped disc percolator with 360° slit diffusion. Smooth pulls, minimal drag.",
  },
  {
    slug: "mini-8-arm-jellyfish-percolator",
    name: "Mini 8-Arm Jellyfish",
    category: "percolator",
    image: img("mini 8 arm jellyfish percolator.webp"),
    price: 129,
    description: "Eight downward-facing arms with slitted tips for downward diffusion. The jellyfish form in miniature.",
  },
  {
    slug: "dual-8-arm-percolator",
    name: "Dual 8-Arm",
    category: "percolator",
    image: img("dual 8 arm percolator.webp"),
    price: 139,
    description: "Sixteen total arms in two stacked tiers. Maximum surface area, immaculate smoothness.",
  },

  // Bases
  {
    slug: "classic-beaker-base",
    name: "Classic Beaker",
    category: "base",
    image: img("classic beker base.webp"),
    price: 199,
    description: "Wide-bottom beaker silhouette. Maximum water volume, rock-solid stability. The foundation of any build.",
  },
  {
    slug: "thc-base",
    name: "THC Base",
    category: "base",
    image: img("thc base.webp"),
    price: 229,
    description: "Angled chamber with precision water line marks. Engineered for ideal percolation depth.",
  },
  {
    slug: "swiss-sphere-base",
    name: "Swiss Sphere",
    category: "base",
    image: img("swiss sphere base.webp"),
    price: 279,
    description: "Spherical base with Swiss-hole ventilation. Unique form factor with exceptional cooling surface area.",
  },
  {
    slug: "voyager-base",
    name: "Voyager",
    category: "base",
    image: img("Voyager base.webp"),
    price: 349,
    description: "The flagship. Tall cylindrical chamber with scientific precision and a 16-inch draw. Our most iconic base.",
  },

  // Connectors
  {
    slug: "bamboo-wood-ring",
    name: "Bamboo Ring",
    category: "connector",
    image: img("bamboo wood ring connector.webp"),
    price: 39,
    description: "Sustainable bamboo with warm grain patterns. Lightweight and naturally moisture-resistant.",
  },
  {
    slug: "zebra-wood-ring",
    name: "Zebra Wood Ring",
    category: "connector",
    image: img("zebra wood ring connector.webp"),
    price: 54,
    description: "Bold contrasting stripes of dark and light grain. A statement connector for discerning builds.",
  },
  {
    slug: "walnut-wood-ring",
    name: "Walnut Ring",
    category: "connector",
    image: img("walnut wood ring connector.webp"),
    price: 49,
    description: "Rich chocolate-brown walnut with tight, consistent grain. Warmth that complements any glass.",
  },
  {
    slug: "olive-wood-ring",
    name: "Olive Wood Ring",
    category: "connector",
    image: img("olive wood ring connector.webp"),
    price: 59,
    description: "Mediterranean olive wood with swirling gold-brown patterns. Every ring is one-of-a-kind.",
  },

  // Ashcatchers
  {
    slug: "linea-ashcatcher",
    name: "Linea Ashcatcher",
    category: "ashcatcher",
    image: img("linea ashcatcher.webp"),
    price: 79,
    description: "Minimalist inline design with angled chamber. Catches debris before it reaches your percolator.",
  },
  {
    slug: "athos-ashcatcher",
    name: "Athos Ashcatcher",
    category: "ashcatcher",
    image: img("athos ashcatcher.webp"),
    price: 89,
    description: "Reclaim-optimized chamber with deep well. Dual-function: ash trap and concentrate collector.",
  },
  {
    slug: "florae-dry-ashcatcher",
    name: "Florae Dry Ashcatcher",
    category: "ashcatcher",
    image: img("florae dry ashcatcher.webp"),
    price: 69,
    description: "Dry ashcatcher for herb. Botanical-inspired form with precision-cut joint angles.",
  },
  {
    slug: "terra-dry-ashcatcher",
    name: "Terra Dry Ashcatcher",
    category: "ashcatcher",
    image: img("terra dry ashcatcher.webp"),
    price: 69,
    description: "Wide-mouth dry trap. Simple, efficient, and easy to clean. The everyday workhorse.",
  },

  // Downstems
  {
    slug: "slitted-downstem",
    name: "Slitted Downstem",
    category: "downstem",
    image: img("slitted downstem.webp"),
    price: 29,
    description: "Multi-slit diffuser cut at the base. Breaks smoke into fine streams before entering the water.",
  },
  {
    slug: "matrix-downstem",
    name: "Matrix Downstem",
    category: "downstem",
    image: img("matrix downstem.webp"),
    price: 39,
    description: "Grid-pattern matrix cuts at the tip for advanced diffusion. Matches the Matrix percolator series.",
  },

  // Bowls
  {
    slug: "leaf-bowl",
    name: "Leaf Bowl",
    category: "bowl",
    image: img("leaf bowl.webp"),
    price: 24,
    description: "Botanical leaf silhouette with deep well. Wide-screen opening for full-bowl combustion.",
  },
  {
    slug: "magnetic-bowl",
    name: "Magnetic Bowl",
    category: "bowl",
    image: img("magnetic bowl.webp"),
    price: 34,
    description: "Neodymium magnetic closure system. Snap-lock seat with one-hand release. Zero fumbling.",
  },
];

export const productsByCategory = products.reduce(
  (acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  },
  {} as Record<ProductCategory, Product[]>
);

export const configuratorSteps = [
  {
    step: 1,
    label: "Mouthpiece",
    category: "mouthpiece" as ProductCategory,
    description: "Choose your draw experience",
    helperText:
      "Mouthpieces change how the hit feels. Straight tubes keep airflow direct, while shaped options soften the pull a bit. We have mouthpieces with percolators built in, too! Go with what feels natural for how you inhale.",
  },
  {
    step: 2,
    label: "Percolator",
    category: "percolator" as ProductCategory,
    description: "Select your filtration system",
    helperText:
      "A percolator bong is perfect for cooler, easier rips. Those little \"percs\" tone down the harshness of smoke by breaking it into a bunch of tiny bubbles. On the other hand, an ash catcher keeps your main chamber cleaner between washes. You can run one, both, or neither — that's the whole point of building your own.",
  },
  {
    step: 3,
    label: "Base",
    category: "base" as ProductCategory,
    description: "Pick your foundation",
    helperText:
      "A taller bong base gives you more water and smoother pulls, whereas shorter ones keep things punchy and easier to manage. Think about where you'll hit your piece the most and how much space you want on the table.",
  },
  {
    step: 4,
    label: "Connector",
    category: "connector" as ProductCategory,
    description: "Finish with a wood ring",
    helperText:
      "This is what brings all the components together and the custom bong comes to life. Each ring locks your pieces in place while keeping them easy to separate when it's time to clean or switch things up.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
