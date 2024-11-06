import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center bg-white">
      <div className="flex justify-center items-center gap-">
        <h1 className="text-[200px] text-primary font-bold mb-4">4</h1>
        <img
          src="/assets/Website Maintenance.gif"
          alt="404 Error"
          className="h-[200px] border-[30px] border-primary rounded-full mb-4"
        />

        <h1 className="text-[200px] text-primary font-bold mb-4">4</h1>
      </div>
      <p className="text-xl text-gray-700 -mt-12 mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Go Back to Home
      </button>
    </div>
  );
}
