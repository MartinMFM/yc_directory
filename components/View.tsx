import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // Update views in background without blocking the response
  try {
    writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit()
      .catch((error) => {
        console.error("Failed to update views:", error);
      });
  } catch (error) {
    console.error("Failed to update views:", error);
  }
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <div className="view-text">
        <span className="font-black">{totalViews} views</span>
      </div>
    </div>
  );
};

export default View;
