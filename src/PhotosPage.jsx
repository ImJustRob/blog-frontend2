 import axios from "axios";
 import { useState, useEffect } from "react";
  import { PhotosIndex } from "./PhotosIndex";
  import { PhotosNew } from "./PhotosNew";
  import { PhotosShow } from "./PhotosShow.jsx";
  import { Modal } from "./Modal";

  export function PhotosPage() {
   const [photos, setPhotos] = useState([]);
      const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
      const [currentPhoto, setCurrentPhoto] = useState({});

   const handleIndex = () => {
     console.log("handleIndex");
     axios.get("http://localhost:3000/posts.json").then((response) => {
       console.log(response.data);
       setPhotos(response.data);
     });
   };

      const handleCreate = (params, successCallback) => {
         console.log("handleCreate", params);
         axios.post("http://localhost:3000/posts.json", params).then((response) => {
           setPhotos([...photos, response.data]);
           successCallback();
         });
       };

          const handleShow = (photo) => {
             console.log("handleShow", photo);
             setIsPhotosShowVisible(true);
             setCurrentPhoto(photo);
           };

              const handleUpdate = (id, params, successCallback) => {
                 console.log("handleUpdate", params);
                 axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
                   setPhotos(
                     photos.map((photo) => {
                       if (photo.id === response.data.id) {
                         return response.data;
                       } else {
                         return photo;
                       }
                     })
                   );
                   successCallback();
                   handleClose();
                 });
               };

                  const handleDestroy = (id) => {
                     console.log("handleDestroy", id);
                     axios.delete(`http://localhost:3000/posts/${id}.json`).then(() => {
                       setPhotos(photos.filter((photo) => photo.id !== id));
                       handleClose();
                     });
                   };
        
           const handleClose = () => {
             console.log("handleClose");
             setIsPhotosShowVisible(false);
           };

   useEffect(handleIndex, []);

    return (
      <main>
        <PhotosNew onCreate={handleCreate} />
        <PhotosIndex photos={photos} onShow={handleShow} />
        <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <PhotosShow photo={currentPhoto} onUpdate={handleUpdate} onDestroy={handleDestroy} />
       </Modal>
      </main>
    );
  }