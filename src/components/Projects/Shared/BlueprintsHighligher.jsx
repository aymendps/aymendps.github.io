function BlueprintsHighligher({
  src,
  title,
  height = "500px",
  width = "100%",
}) {
  return (
    <iframe
      title={title}
      className="screen-lg:w-full"
      src={src}
      style={{ height: height, width: width }}
      allowFullScreen={true}
    ></iframe>
  );
}

export default BlueprintsHighligher;
