import React from "react";

export default function TweetContainer({ children }) {
  return (
    <section class="bg-white min-h-screen dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <div class="max-w-2xl mx-auto px-4">{children}</div>
    </section>
  );
}
