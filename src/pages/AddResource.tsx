import { Link } from "react-router-dom";
import addBgImage from "../assets/bg_image.jpg";
import axios from "axios";
import { useState } from "react";

const AddResource = () => {
  // POST endpoint - `${VITE_APP_API_URL}/add_resource.json`

  const resourcesUrl = import.meta.env.VITE_APP_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    icon_url: "",
    link: "",
    tag: "",
  });

  const handleInputChange = <
    T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >(
    e: React.ChangeEvent<T>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.post(
        `${resourcesUrl}/add_resource.json`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-[calc(100dvh-4rem)] w-full">
      {/* Form Section */}
      <div className="flex flex-col w-full lg:w-full h-full">
        {/* <div className="px-2 py-4 w-max"> */}
        <Link to="/" className="text-gray-500 px-2 py-4 h-fit flex items-center">
          <div>&lt;</div>
          <div>&nbsp;Users</div>
        </Link>
        {/* </div> */}
        <div className="flex items-center justify-center w-full p-4 h-full">
          <form
            className="flex flex-col space-y-2 w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/2 xl:w-2/5 h-full"
            onSubmit={handleSubmit}
          >
            <p className="text-2xl mb-4 text-center">Item Details</p>
            <div>
              <label
                htmlFor="item-title"
                className="block text-sm text-gray-500 font-light"
              >
                ITEM TITLE&nbsp;<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="item-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full my-1 block border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="link"
                className="block text-sm text-gray-500 font-light"
              >
                LINK&nbsp;<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                required
                className="w-full my-1 block border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="icon_url"
                className="block text-sm text-gray-500 font-light"
              >
                ICON URL
              </label>
              <input
                type="text"
                id="icon_url"
                name="icon_url"
                value={formData.icon_url}
                onChange={handleInputChange}
                placeholder="(optional)"
                className="w-full my-1 block border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="tag-name"
                className="block text-sm text-gray-500 font-light"
              >
                TAG NAME&nbsp;<span className="text-red-600">*</span>
              </label>
              <select
                id="tag-name"
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                required
                className="w-full my-1 block border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
              >
                <option value="" disabled>Select an option</option>
                <option value="user">User</option>
                <option value="request">Request</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm text-gray-500 font-light"
              >
                CATEGORY&nbsp;<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full my-1 block border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-gray-500 font-light"
              >
                DESCRIPTION&nbsp;<span className="text-red-600">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full my-1 block border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-3 py-1"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-fit px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-0 lg:w-1/2">
        <img
          src={addBgImage}
          alt="Office"
          className="object-fill w-full h-[calc(100dvh-4rem)]"
        />
      </div>
    </div>
  );
};

export default AddResource;
