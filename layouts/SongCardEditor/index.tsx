import { useState, useRef } from "react";

export const SongCardEditor = (props: any) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const {
    cardData,
    onChangeCardData,
    setSelectedImgFile
  } = props;

  const handleChangeValue = (onChangeValue: any) => {
    onChangeCardData({
      ...cardData,
      ...onChangeValue
    })
  }

  const handleClick = () => {
    if (!hiddenFileInput) return;
    if (!hiddenFileInput.current) return;

    hiddenFileInput.current.click();
  }

  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    setSelectedImgFile(fileUploaded)
  };


  return (
    <div style={{ width: "100%" }}>

      <div style={{ border: "1px solid white", borderRadius: "4px", padding: "15px" }}>
        <div>Version 0.1.0</div>

        <button onClick={handleClick} style={{padding: "10px"}}>
          Upload song picture
        </button>

        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleChange}
          ref={hiddenFileInput} />

        <div>
          <div>Song title</div>
          <input
            placeholder={cardData.songName}
            value={cardData.songName}
            onChange={(e) => handleChangeValue({ songName: e.target.value })}
          />
        </div>


        <div>Artist name</div>
        <input
          placeholder={cardData.artistName}
          value={cardData.artistName}
          onChange={(e) => handleChangeValue({ artistName: e.target.value })}
        />

        <div>Quote</div>
        <textarea
          rows={4}
          value={cardData.quote}
          onChange={(e) => handleChangeValue({ quote: e.target.value })}
        />
      </div>

    </div>
  )
}