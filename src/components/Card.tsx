import { Link } from "react-router-dom";
import { Resource } from "../interface/resource.interface";

interface CardProps {
  item: Resource;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { title, description, category, icon_url, link } = item;

  return (
    <ul>
      <li className="w-[360px] h-[240px] flex flex-col justify-around bg-white border-2 border-grey-500 p-6">
        <div className="flex my-2 height-[44px] items-center">
          <img
            className="object-cover mr-2 h-16 w-20"
            src={icon_url}
            alt="resource-icon"
            loading="lazy"
          />
          <div className="h-16 flex flex-col justify-evenly ml-2">
            <span className="">{title}</span>
            <span className="text-[12px] text-gray-400">{category}</span>
          </div>
        </div>
        <div>
          <Link
            className="text-sm text-blue-400 hover:text-blue-700 border-none outline-none"
            target="_blank"
            to={link}
          >
            {link}
          </Link>
        </div>
        <div>
          <span>
            <span className="text-sm line-clamp-3 text-gray-500">
              {description}
            </span>
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Card;
