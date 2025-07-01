import SearchForm from "../components/forms/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query || "";
  return (
    <section className="py-24 mx-auto bg-primaryColor min-h-[80vh]">
      <div className="custom_container">
        <div className="w-full lg:w-[80%] mx-auto">
          <h1 className="text-center text-4xl lg:text-6xl font-bold uppercase text-white mb-2 text-shadow-xs">Pitch your startup, Connect with enterpreneurs</h1>
          <p className="text-center text-base text-gray-200">Submit ideas, vote on pitches and get noticed online.</p>
          <SearchForm query={query} />
        </div>
      </div>
    </section>
  );
}
