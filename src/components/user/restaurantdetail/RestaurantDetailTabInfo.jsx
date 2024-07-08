import React from "react";

const RestaurantDetailTabInfo = () => {
  return (
    <div className="restaurant-detail">
      <div className="restaurant-detail__wrap">
        <div className="restaurant-detail__title">사장님알림</div>
        <div className="restaurant-detail__content">
          파스토보이 교대점은 ♥주문접수와 동시에 깨끗한 오픈주방에서 즉시
          조리합니다
        </div>
      </div>
      <div className="restaurant-detail__wrap">
        <div className="restaurant-detail__title">업체정보</div>
        <div className="restaurant-detail__content">
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">영업시간</p>
            <p className="restaurant-detail__info-detail">09:00 - 08:59</p>
          </div>
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">전화번호</p>
            <p className="restaurant-detail__info-detail">
              050352550768 (요기요 제공 번호)
            </p>
          </div>
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">주소</p>
            <p className="restaurant-detail__info-detail">
              대구광역시 남구 대명동 1792-8 2층
            </p>
          </div>
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">부가정보</p>
            <p className="restaurant-detail__info-detail">
              세스코멤버스 사업장
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail__wrap">
        <div className="restaurant-detail__title">결제정보</div>
        <div className="restaurant-detail__content">
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">결제수단</p>
            <p className="restaurant-detail__info-detail">
              신용카드, 현금, 요기서결제
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail__wrap">
        <div className="restaurant-detail__title">사업자정보</div>
        <div className="restaurant-detail__content">
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">상호명</p>
            <p className="restaurant-detail__info-detail">주식회사우주소년</p>
          </div>
          <div className="restaurant-detail__info">
            <p className="restaurant-detail__info-title">사업자등록번호</p>
            <p className="restaurant-detail__info-detail">148-86-01339</p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail__wrap">
        <div className="restaurant-detail__title">원산지정보</div>
        <div className="restaurant-detail__content">
          <p className="restaurant-detail__info-detail">
            [스테이크] 목살 스테이크 샐러드(돼지고기:스페인산) 그릴드 치킨
            스테이크 샐러드(닭고기:브라질산)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailTabInfo;