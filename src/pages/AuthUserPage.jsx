import { useState } from "react";
import { Link } from "react-router-dom";
import JoinFooter from "../components/layout/JoinFooter";

const AuthUserPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = e => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <>
      <div className="user-join-wrap">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            alt="Logo"
          />
        </Link>
        <h2>일반 회원가입</h2>
        <div className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="576"
            height="1"
            viewBox="0 0 576 1"
            fill="none"
          >
            <path d="M0.5 0.5H575.5" stroke="black" />
          </svg>
        </div>
        <form className="user-join-form">
          <h3>아이디</h3>
          <div>
            <input placeholder="아이디를 입력해 주세요."></input>
            <button type="button">중복 확인</button>
          </div>
          <h3>비밀번호</h3>
          <input placeholder="비밀번호를 입력해 주세요."></input>
          <h3>비밀번호 확인</h3>
          <input placeholder="비밀번호를 입력해 주세요."></input>
          <h3>이름</h3>
          <input placeholder="이름을 입력해 주세요."></input>
          <h3>닉네임</h3>
          <input placeholder="닉네임을 입력해 주세요."></input>
          <h3>전화번호</h3>
          <input placeholder="전화번호를 입력해 주세요."></input>
          <h3>프로필 사진</h3>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
          />
          {imageUrl && (
            <div className="image-preview">
              <img src={imageUrl} alt="이미지 미리보기" />
            </div>
          )}

          <button type="button">회원가입</button>
        </form>
      </div>
      <JoinFooter />
    </>
  );
};

export default AuthUserPage;
