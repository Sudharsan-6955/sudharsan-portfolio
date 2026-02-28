
import React from 'react';
import styled from 'styled-components';

const ThreeDCard = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title ">3D Card</span>
            <p className="card-content ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.

            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
            <span className="month">JUNE</span>
            <span className="date">29</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    padding: 0;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .card {
    padding-top: 30px;
    border-radius: 15px;
    border: 3px solid rgb(255, 255, 255);
    transform-style: preserve-3d;
    background: linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0),
      repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 0;
    background-color: #f0f0f0;
    width: 100%;
    min-height: 220px;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    position: relative;
    overflow: visible;
  }

  .card:hover {
    background-position: -100px 100px, -100px 100px;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: rgba(4, 193, 250, 0.85);
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    padding: 60px 25px 25px 25px;
    transform-style: preserve-3d;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    position: relative;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 0.8rem;
    display: inline-block;
    font-weight: 900;
    font-size: 9px;
    text-transform: uppercase;
    color: rgb(7, 185, 255);
    /* border-radius: 5px; */
    background: white;
    padding: 0.5rem 0.9rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
    margin-bottom:0px;
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 40px;
    height: 56px;
    width: 56px;
    background: white;
    border: 1.5px solid rgb(7, 185, 255);
    border-radius: 0px;
    padding: 8px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(100, 100, 111, 0.18) 0px 17px 10px -10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: rgb(4, 193, 250);
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: rgb(4, 193, 250);
  }`;

export default ThreeDCard;
