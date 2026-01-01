import Link from "next/link";

const categories = [
  { name: "Basic Mehndi", slug: "basic-mehndi" },
  { name: "Trending Designs", slug: "trending-designs" },
  { name: "Aesthetic Designs", slug: "aesthetic-designs" },
  { name: "Feet Designs", slug: "feet-designs" },
  { name: "Backhand Designs", slug: "backhand-designs" },
  { name: "Arabic Designs", slug: "arabic-designs" },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Mehndi Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/project/${cat.slug}`}
            className="h-48 flex items-center justify-center rounded-xl
            bg-pink-100 hover:bg-pink-300 transition
            text-xl font-semibold shadow-lg hover:scale-105"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
