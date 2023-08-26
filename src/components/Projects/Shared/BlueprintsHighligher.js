function BlueprintsHighligher({ src, title, height = "500px", width = "69%" }) {
  return (
    <iframe
      title={title}
      className="screen-md:w-full"
      src={src}
      style={{ height: height, width: width }}
      allowFullScreen={true}
    ></iframe>
  );
}

export default BlueprintsHighligher;
