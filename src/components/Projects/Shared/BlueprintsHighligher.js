function BlueprintsHighligher({ src, title }) {
  return (
    <iframe
      title={title}
      className="w-[69%] screen-md:w-full border-b-8 border-white h-[500px]"
      src={src}
    ></iframe>
  );
}

export default BlueprintsHighligher;
