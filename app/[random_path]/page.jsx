import Link from "next/link";

const RandomPath = ({ params }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl uppercase py-16 text-center">
        wrong path
        <span className="text-red-600 bg-gray-200 px-4 py-2 font-mono font-bold rounded-sm">
          {params.random_path}
        </span>
      </h1>
      <Link href="/" passHref>
        <a className="text-blue-700 text-2xl py-4 underline">back to home</a>
      </Link>
    </div>
  );
};

export default RandomPath;
