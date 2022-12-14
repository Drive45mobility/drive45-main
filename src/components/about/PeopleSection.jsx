import React from "react";
import styled from "styled-components";
import Carousel, { carousel } from "react-elastic-carousel";
import PrevIcon from "../../../public/assets/prev-icon.svg";
import NextIcon from "../../../public/assets/next-icon.svg";
import WhatsAppLogo from "../../../public/assets/logo_whatsapp.svg";
import MailLogo from "../../../public/assets/mail-logo.svg";
import { device } from "constants/breakpoints";

const breakPoints2 = [
  { width: 1, itemsToShow: 2 },
  { width: 400, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const people = [
  {
    id: "1",
    image: "/assets/people2.png",
    name: "Oluwaseyi Adefemi",
    role: "CO-FOUNDER & CEO",
  },

  {
    id: "2",
    image: "/assets/people1.jpeg",
    name: "Soumobroto Ganguly",
    role: "CO-FOUNDER/BOARD CHAIRMAN",
  },
  {
    id: "3",
    image: "/assets/people4.jpeg",
    name: "Idara Esiobu",
    role: "CBO",
  },
  // {
  //   id: "3",
  //   image: "/assets/people3.jpeg",
  //   name: "Genco Sanli",
  //   role: "SENIOR ADVISOR",
  // },
  {
    id: "4",
    image: "/assets/people5.jpg",
    name: "Ayodele Kadeba",
    role: "HEAD, OPERATIONS",
  },
];

const PeopleSection = () => {
  return (
    <View>
      <div className="content">
        <div className="heading">
          <p>THE PEOPLE WHO MAKE THINGS WORK</p>
          <div className="row">
            <div className="line"></div>
            <h3>Our Key People</h3>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="people">
        <Carousel
          breakPoints={breakPoints2}
          showArrows={false}
          pagination={false}
          ref={(ref) => (carousel = ref)}
        >
          {people?.map((person) => {
            return (
              <div className="card" key={person?.id}>
                <img src={person?.image} alt={person?.name} />
                <h3>{person?.name}</h3>
                <p>{person?.role}</p>
              </div>
            );
          })}
        </Carousel>

        <div className="scroller">
          <button onClick={() => carousel.slidePrev()}>
            <PrevIcon />
          </button>
          <button onClick={() => carousel.slideNext()}>
            <NextIcon />
          </button>
        </div>

        <div className="cta-view">
          <p>Contact Us:</p>

          <div className="icons">
            <a
              href="https://wa.me/+2349139378969"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppLogo />
            </a>
            <div className="line"></div>
            <a href="mailto:">
              <MailLogo />
            </a>
          </div>
        </div>
      </div>
    </View>
  );
};

export default PeopleSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  margin-top: 100px;
  background: #efffef;
  padding: 50px 0;
  margin-top: 50px;
  padding-bottom: 0;

  .people {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-between; */

    .cta-view {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 100px;
      background-color: ${(props) => props.theme.colors.white};
      padding-bottom: 100px;

      @media ${device.phone} {
        flex-direction: column;
        padding-bottom: 200px;
      }

      p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-right: 37px;
      }

      .icons {
        display: flex;
        align-items: center;
      }

      .line {
        width: 2px;
        height: 70px;
        border: 1px solid #5f5f5f;
        margin: 0 40px;

        @media ${device.phone} {
          height: 50px;
        }
      }
    }

    .scroller {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      margin-bottom: 100px;

      @media ${device.phone} {
        margin-bottom: 40px;
      }

      button {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: none;
        outline: none;
        margin: 0 15px;
        background-color: ${(props) => props.theme.colors.green};

        @media ${device.phone} {
          width: 50px;
          height: 50px;
        }
      }
    }

    .card {
      width: 300px;
      height: 380px;
      background-color: #fff;
      border-radius: 30px;
      padding: 25px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 28px 107px rgba(0, 0, 0, 0.04);

      @media ${device.phone} {
        width: 180px;
        border-radius: 10px;
        height: 230px;
        margin-right: 20px;
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 12px;
        margin-top: 8px;
        line-height: 29.2px;

        @media ${device.phone} {
          font-size: 1rem;
          line-height: 15px;
        }
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        text-align: center;

        @media ${device.phone} {
          font-size: 0.6rem;
        }
      }

      img {
        width: 226px;
        height: 226px;
        border-radius: 50%;

        @media ${device.phone} {
          width: 100px;
          height: 100px;
        }
      }
    }
  }

  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    @media ${device.phone} {
      width: 100%;
      padding: 0 20px;
    }

    .heading {
      p {
        font-weight: 700;
        margin-bottom: 12px;
        text-align: center;

        @media ${device.phone} {
          font-size: 0.7rem;
        }
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
          width: 214px;
          border: 0.5px solid #5f5f5f;

          @media ${device.phone} {
            width: 40px;
          }
        }

        h3 {
          font-size: 3rem;
          font-weight: 500;
          margin: 0 20px;

          @media ${device.phone} {
            font-size: 1rem;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
