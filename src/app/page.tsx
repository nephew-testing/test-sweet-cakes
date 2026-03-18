import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight">{siteConfig.business.name}</h1>
          <p className="mt-4 text-xl text-gray-600">{siteConfig.business.tagline}</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/contact" className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800">Get in Touch</a>
            <a href="/services" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50">Our Menu</a>
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-600">{siteConfig.business.description}</p>
        </div>
      </section>
      <section className="bg-black px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to order?</h2>
        <p className="mt-2 text-gray-300">Visit us at {siteConfig.business.address}</p>
        <p className="mt-1 text-gray-300">{siteConfig.business.hours}</p>
        <a href="/contact" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100">Contact Us</a>
      </section>
    </main>
  );
}
