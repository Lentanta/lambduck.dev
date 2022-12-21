import styled from "styled-components";

export const ColorDot = ({ colorHex }: any) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <div style={{ height: "32px", width: "32px", borderRadius: "100%", backgroundColor: colorHex }} />
      </div>

      <div style={{ marginLeft: "7px" }}>
        {colorHex}
      </div>
    </div>
  )
}