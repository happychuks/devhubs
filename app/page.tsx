import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1 className="text-primary">The Hub for Awesome Projects</h1>
        <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
        DevHubs is a developer-centric marketplace that allows developers publish, sell, or freely distribute their projects. DevHubs stands out as the premier marketplace for all things related
          to development, offering an unparalleled platform for developers and other users.
        </p>
      </div>
      <ProductRow category="latest" />
      <ProductRow category="templates" />
      <ProductRow category="apis" />
      <ProductRow category="uikit" />
    </section>
  );
}
