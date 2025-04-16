"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageData {
  id: string;
  largeImageURL: string;
  tags: string;
  previewWidth: number;
  previewHeight: number;
}

const GridImages: React.FC = () => {
  const [data, setData] = useState<ImageData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=48699979-40d39168afdea165634ce8b4f&q=white&image_type=photo"
        );
        const result = await response.json();
        console.log("🚀 ~ fetchData ~ result:", result);
        setData(result.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Grid Images</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data ? (
          data.map((image) => (
            <div key={image.id} className="grid gap-4">
              <div>
                <Image
                  src={image.largeImageURL}
                  alt={image.tags}
                  width={image.previewWidth}
                  height={image.previewHeight}
                  className="h-auto max-w-full rounded-lg"
                />
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GridImages;
