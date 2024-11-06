const BlogCard = ({ blog }) => {  
    return (
      <div className="rounded-xl overflow-hidden shadow-lg bg-white ">
        <div className="w-full h-[280px]">
        <img className="w-full h-full object-cover" src={blog.image} alt={blog.title} />
        </div>
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3> 
          <p className="text-gray-600 text-base mb-4">{blog.description}</p> 
          <a href={`/blog/${blog.slug}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium">Read More</a> 
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  