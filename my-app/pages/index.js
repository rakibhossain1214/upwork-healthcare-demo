import { useState } from "react";
import Image from 'next/image'

export default function Upload() {
  const [imageUrl, setImageUrl] = useState("");
  
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }

    setImageUrl(fields.key)
  };

  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
      <div style={{ marginTop: '20px' }}>
        <img 
          src={`https://storage.googleapis.com/healthcare-demo-ggl/${imageUrl}`}
          alt="Default"
          width={400}
          height={300}
        />
      </div>
     
    </>
  );
}
