import StartupCard from "../components/cards/StartupCard";
import SearchForm from "../components/forms/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query || "";

  const posts = [
    {
      _id: 1,
      author: { _id: 1, name: "John Doe", image: "/images/author1.jpg" },
      views: 29,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: new Date(),
      title: "Pitch your startup, Connect with enterpreneurs",
      category: "Startup",
    },
    {
      _id: 2,
      author: { _id: 1, name: "John Doe", image: "/images/author1.jpg" },
      views: 29,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: new Date(),
      title: "Pitch your startup, Connect with enterpreneurs",
      category: "Startup",
    },
    {
      _id: 3,
      author: { _id: 1, name: "John Doe", image: "/images/author1.jpg" },
      views: 29,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: new Date(),
      title: "Pitch your startup, Connect with enterpreneurs",
      category: "Startup",
    },
    {
      _id: 4,
      author: { _id: 1, name: "John Doe", image: "/images/author1.jpg" },
      views: 29,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: new Date(),
      title: "Pitch your startup, Connect with enterpreneurs",
      category: "Startup",
    }


  ]

  return (
    <>
      <section className="py-16 mx-auto bg-primaryColor min-h-[80vh]">
        <div className="custom_container">
          <div className="w-full lg:w-[80%] mx-auto">
            <h1 className="text-center text-4xl lg:text-6xl font-bold uppercase text-white mb-2 text-shadow-xs">Pitch your startup, Connect with enterpreneurs</h1>
            <p className="text-center text-base text-gray-200">Submit ideas, vote on pitches and get noticed online.</p>
            <SearchForm query={query} />
          </div>
        </div>
      </section>

      <section className="py-16 mx-auto">
        <div className="custom_container">
          <p className="text-2xl lg:text-3xl font-bold mb-10">{query ? `Search results for "${query}"` : 'All Startups'}</p>


          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {
              posts?.length === 0 && (
                <p className="text-gray-400 text-center col-span-4">No startups found.</p>
              )
            }
            {
              posts?.map(post => {
                return (
                  <StartupCard key={post?._id} post={post} />
                )
              })
            }
          </ul>
        </div>
      </section>
    </>

  );
}


// mongodb://muhammadatif974edupk:G8YozQvbz6CS20S1@ac-79akeiu-shard-00-00.n0eksbg.mongodb.net:27017,ac-79akeiu-shard-00-01.n0eksbg.mongodb.net:27017,ac-79akeiu-shard-00-02.n0eksbg.mongodb.net:27017/?ssl=true&replicaSet=atlas-11cydc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0