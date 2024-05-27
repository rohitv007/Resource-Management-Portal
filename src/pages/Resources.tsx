import axios from "axios";
import { useEffect, useState } from "react";
import { Resource } from "../interface/resource.interface";
import Card from "../components/Card";

const Resources = () => {
  const resourcesUrl = import.meta.env.VITE_APP_API_URL;
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<string>("resource");
  const [tabs, setTabs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const res = await axios.get(`${resourcesUrl}/resources.json`);
        const data: Resource[] = await res.data;
        // console.log(data);
        setResources(data);

        const tags: string[] = [
          ...new Set(data.map((item: Resource) => item.tag)),
        ];
        // console.log(categories);
        setTabs(["resource", ...tags]);
      } catch (error) {
        setResources([]);
        setTabs([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [resourcesUrl]);

  useEffect(() => {
    (function () {
      let filtered =
        active == "resource"
          ? resources
          : resources.filter((item) => item.tag == active);

      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      // console.log(filtered);
      setFilteredResources(filtered);
    })();
  }, [resources, searchInput, active]);

  // calculate total number of pages for the given data
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  // slice to divide items for each page
  const paginatedResources = filteredResources.slice(
    itemsPerPage * (currentPage - 1),
    itemsPerPage * currentPage
  );

  return (
    <div className="m-6 p-6">
      {/* Categories */}
      <div className="flex flex-wrap justify-center">
        {tabs.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full text-black text-sm border-transparent outline-transparent m-1.5 px-5 py-2.5 md:w-1/5 w-max ${
                active === item
                  ? `bg-blue-500`
                  : `bg-gray-200 hover:bg-gray-300`
              }`}
            >
              {item.slice(0, 1).toUpperCase() + item.slice(1) + "s"}
            </button>
          );
        })}
      </div>

      {/* SearchBar */}
      <div className="my-6 flex justify-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border-transparent outline-none py-2 px-4 w-1/2 rounded"
          placeholder="Search"
        />
      </div>
      {/* Data */}
      {loading ? (
        <div className="grid place-content-center">
          <h3 className="text-2xl">Loading...</h3>
        </div>
      ) : (
        <>
          {filteredResources.length === 0 ? (
            <div className="grid place-content-center">
              <h3 className="text-2xl">Unable to find any resource!</h3>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap place-content-center gap-4">
                {paginatedResources.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`mx-1 px-3 py-1 border rounded-full ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Resources;
