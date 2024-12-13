import Link from "next/link";
import Text from "./Text";
import { formatDate } from "@/lib/date";

type CardProps = {
  slug: string;
  title: string;
  subTitle: string;
  date: string;
  categories?: string[];
};

const Card = (props: CardProps) => {
  const { slug, title, subTitle, date, categories } = props;
  return (
    <li
      key={slug}
      className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Link href={`/post/${slug}`} className="block flex flex-col gap-2">
        <Text as="h2" weight="bold" size="lg">
          {title}
        </Text>
        <Text size="sm" color="gray">
          {subTitle}
        </Text>
        <Text size="sm" color="gray">
          {formatDate(date)}
        </Text>
        {categories && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
};

type PostCardsProps = {
  list: CardProps[];
};

const PostCards = (props: PostCardsProps) => {
  const { list } = props;
  return (
    <ul className="flex flex-col gap-4">
      {list.map((post) => (
        <Card key={post.slug} {...post} />
      ))}
    </ul>
  );
};

export default PostCards;