export default function GalleryImage({ painting }) {
  const { title, filename, dimensions, materials, year } = painting;

  return (
    <div className="mb-12" style={{ width: "100%", maxWidth: "400px" }}>
      <img
        src={`/paintings/${filename}`}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
      <div className="mt-2 text-sm text-gray-600 leading-tight">
        <p>
          <span className="font-semibold italic">{title},</span> {year}
        </p>
        <p className="text-xs">{materials} </p>
        <p className="text-xs">{dimensions}</p>
      </div>
    </div>
  );
}
