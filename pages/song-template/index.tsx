import { PageWrapper } from "../../layouts/PageWrapper";
import { SongCardEditor } from "../../layouts/SongCardEditor";

import { MapPinLine } from "./MapPinLine";
import { PlayLine } from "./PlayLine";
import { SkipBackLine } from "./SkipBackLine";
import { SkipForwardLine } from "./SkipForwardLine";

import { RepeatLine } from "./RepeatLine";
import { SuffleLine } from "./SuffleLine";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

import html2canvas from "html2canvas";

const SongTemplate = (props: any) => {

  const [selectedImgFile, setSelectedImgFile] = useState();
  const [previewImg, setPreviewImg] = useState<string>();

  const [cardData, setCardData] = useState({
    songImage: "https://lh3.google.com/u/0/d/1hBO5kA-ljTBWcSfZXzu_uninvoymVa6P=w1152-h943-iv1",
    songName: "Song name",
    artistName: "Artist name",
    quote: "This is what I do when I'm feel empty, making silly stuffs with code",
    startTime: "",
    endTime: ""
  })

  useEffect(() => {
    if (!selectedImgFile) {
      setPreviewImg(undefined)
      return
    }

    const imgURL = URL.createObjectURL(selectedImgFile)
    setPreviewImg(imgURL)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(imgURL)
  }, [selectedImgFile])

  const handleDownloadImg = async () => {
    const element = document.getElementById('music-player')
    if (!element) return;
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/jpg')
    let link = document.createElement('a')

    link.href = data;
    link.download = 'downloaded-image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <PageWrapper pageName="">
      <div style={{ display: "flex", gap: "15px" }}>
        <button onClick={handleDownloadImg}>Download</button>
        <SongCardEditor
          cardData={cardData}
          onChangeCardData={setCardData}
          setSelectedImgFile={setSelectedImgFile}
        />

        <div id="music-player" className={styles.musicPlayer}>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <MapPinLine />
            <div style={{ fontSize: "20px" }}>Somewhere in Da Lat</div>
          </div> */}
          <div className={styles.songImage}>
            <img
              src={previewImg}
              style={{
                width: "320px",
                height: "320px",
                // objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          </div>

          <div
            style={{
              margin: "auto",
              textAlign: "center",
              marginTop: "30px",
              fontSize: "24px",
              color: "#282828",
              fontWeight: "bold",
            }}
          >
            {cardData.songName}
          </div>
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              marginTop: "5px",
              color: "#282828",
            }}
          >
            {cardData.artistName}
          </div>

          <div
            className="track-slider"
            style={{
              position: "relative",
              width: "320px",
              margin: "auto",
              marginTop: "20px",
              height: "5px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1d2021",
                height: "5px",
                width: "100%",
                position: "absolute",
                borderRadius: "4px",
                opacity: 0.8,
              }}
            />
            <div
              style={{
                backgroundColor: "#a89984",
                height: "5px",
                width: "30%",
                position: "absolute",
                borderRadius: "4px",
              }}
            />
          </div>

          <div
            style={{
              width: "320px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto",
              marginTop: "10px",
            }}
          >
            <div>01:00</div>
            <div>03:27</div>
          </div>

          <div className={styles.buttonGroup}>
            <SuffleLine />
            <SkipBackLine />
            <div
              style={{
                border: "1px solid #a89984",
                borderRadius: "100%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PlayLine />
            </div>
            <SkipForwardLine />
            <RepeatLine />
          </div>

          <div className={styles.quoteContainer}>
            "{cardData.quote}"
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default SongTemplate;
