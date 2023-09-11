const NotFound = () => {
  return (
    <>
      <div className="relative">
        <h1 className="font-extrabold tracking-widest text-gray-900 text-9xl">404</h1>
        <div className="absolute px-2 text-sm -translate-x-1/2 -translate-y-1/2 rounded bg-red rotate-12 top-1/2 left-1/2">
          Page Not Found
        </div>
      </div>
      <p className="text-gray-800">Oops! We can't find this page.</p>
    </>
  );
};

export default NotFound;
