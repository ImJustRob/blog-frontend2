export function PhotosIndex({ photos, onShow }) {
    return (
      <div>
        <h1>All post</h1>
       {photos.map((photo) => (
         <div key={photo.id}>
           <h2>{photo.name}</h2>
           <img src={photo.image} />
           <button onClick={() => onShow(photo)}>More info</button>
         </div>
       ))}
      </div>
    );
  }