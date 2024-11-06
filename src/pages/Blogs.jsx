import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const data = useLoaderData()
  const latest = data.slice(0,2);
  const rest = data.slice(2, data.length);
  console.log(rest)
  return (
    <div>
      <div className="bg-primary">
      <PageTitle
            title={"Insights & Stories"}
            subTitle={
              "Explore our latest articles, tutorials, and insights on topics ranging from industry trends to personal stories. Stay informed and inspired with every post."
            }
          />
      </div>
      <div className="container mx-auto px-5 md:px-10 mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-5">
          {
          latest.map((blog)=><BlogCard key={blog.slug} blog={blog}/>)
          }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
        {
          rest.map((blog)=><BlogCard key={blog.slug} blog={blog}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;
