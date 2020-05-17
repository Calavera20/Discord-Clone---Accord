import React from "react";
import "../Styles/NavUserInfo.css";

function NavUserInfo(props) {
  return (
    <div className="VerticalAlign">
      <div
        className="UserIcon"
        style={{
          backgroundImage:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABaFBMVEVMoUNNoURNokROokVPokZQo0dRpEhSpElTpUpUpUtVpk1Wpk1Xp09ZqFBZqFFaqFJbqVJbqVNdqlVeqlVeq1Zgq1hgrFhirFpirVtlrl5mr15nr2BpsGFqsWNssmRus2dvs2hwtGlxtGlytWtztWx4uHF5uXJ6uXR+u3d/vHiAvHqBvXqCvXyDvn2Evn6HwIGMw4aPxImRxYuUx46Vx5CWyJGbypacy5egzZuizp2kz5+kz6Cm0KGn0aKp0qSp0qWs1Kiu1Kmw1ayy1q602LC12LG627e83Lm+3bvF4cPI4sXJ48bK48jL5MjM5MrN5cvP5szQ5s7R58/S59DU6dLV6dPa7Nnf7t7g79/h79/i8OHj8OLk8ePm8uXn8ubp9Ojq9Onr9ers9evt9ezu9u3v9+7w9+/x+PDy+PHy+PL0+fP0+fT1+vX2+vX3+/f4+/j5/Pj5/Pn6/Pr7/fv9/v3+/v7+//7////VxbUKAAABVElEQVR4Ae3L65cKcQDH4e9YYe2utMnFsuu+rCyFKDVyKSTG/X6RVO5Ums+/r3HQOZz5zcyb7U3P+0drbcLKVRVF/DacVQSbnkL/oCJY+Axv4orgpAvOlMJYvJXU0GWgqBBSDd4ekhR7CINjClYGellJ21rwfocCWYUBcDUmHfkBj2IKlv4EPEhI54GKQlh4DjQOyKoBp2Syf1qemZtAN6PZV/Btr/xNdz5cnNeQVXKBK+uXvsNd+TsH9K4taujEF+D+1iw35uTP7gK4zlFL2vMCeL1vWUaJC208jzMbNFsHzijIxtPP8LzLz62z3UsKwTp+D8/Xyq7DUzKZ36nflq73AXpbZFSi49irKXm2lz9CVWZ3+KVVL6aT0ubcy90ye8JIs1ZYiStIYqVQa/JXXr4A/ZFMF+stPMsSYAojqVXbac+EDiPmwD/GH/431mAwhmA28RMGFbXqgVfHnwAAAABJRU5ErkJggg==)",
        }}
      >
        <div className="UserStatusIcon"></div>
      </div>
      <div className="UserInfo">
        <div className="Username">Masło Masło MasłoMasło</div>
        <div className="UserActivity">Spotify: Jack Reaper</div>
      </div>
    </div>
  );
}

export default NavUserInfo;
