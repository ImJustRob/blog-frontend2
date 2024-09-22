 export function PhotosIndex({ photos }) {
    return (
      <div>
        <h1>All photos</h1>
       {photos.map((photo) => (
         <div key={photo.id}>
           <h2>{photo.name}</h2>
           <img src={photo.url} />
           <p>Width: {photo.width}</p>
           <p>Height: {photo.height}</p>
         </div>
       ))}
      </div>
    );
  }