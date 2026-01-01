"use client";

import CategoriesGallery from "@/app/components/Categories/Gallery";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <div className="px-4 py-16">
      <CategoriesGallery slug={slug as string} />
    </div>
  );
}
