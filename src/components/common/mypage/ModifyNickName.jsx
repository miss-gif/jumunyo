/* eslint-disable react/prop-types */
import React, { useState } from "react";
import jwtAxios from "../../../api/user/jwtUtil";
import { Box, TextField } from "@mui/material";
import Swal from "sweetalert2";

const ModifyNickName = ({
  nickName,
  isEditNickname,
  editMode,
  setNickName,
  editCancel,
  setIsEditNickname,
  isLogIn,
  getUserInfo,
}) => {
  const [newNickName, setNewNickName] = useState("");

  const modifyPassord = async () => {
    const data = {
      user_nickname: newNickName,
    };
    try {
      if (newNickName === "") {
        Swal.fire({
          icon: "warning",
          text: "공백은 사용할수없습니다.",
        });
        return;
      }
      setIsEditNickname(false);
      const res = await jwtAxios.patch("/api/update-nickname", data);
      if (res.data.statusCode === 1) {
        Swal.fire({
          icon: "success",
          text: "닉네임 변경 완료",
        });
        getUserInfo();
      } else {
        Swal.fire({
          icon: "warning",
          text: res.data.resultMsg,
        });
        getUserInfo();
      }
      return res;
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "서버에러입니다.",
      });
    }
  };

  return (
    <div className="mypage-title">
      <div className="mypage-title-box">닉네임</div>
      <div className="mypage-title-box-right">
        {!isEditNickname ? (
          <>
            <div>{nickName}</div>
            {!isLogIn ? null : (
              <button className="btn" onClick={() => editMode("nickname")}>
                변경
              </button>
            )}
          </>
        ) : (
          <>
            <div className="input-box">
              <h2>닉네임 변경</h2>
              <Box>
                <TextField
                  fullWidth
                  label="변경할 닉네임"
                  id="fullWidth"
                  onChange={e => {
                    setNewNickName(e.target.value);
                  }}
                />
              </Box>
            </div>
            <div>
              <button className="btn" onClick={modifyPassord}>
                저장
              </button>
              <button className="btn" onClick={editCancel}>
                취소
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModifyNickName;
