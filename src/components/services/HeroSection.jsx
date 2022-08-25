import React from "react";
import styled from "styled-components";
import CalendarIcon from "../../../public/assets/calendar-icon.svg";
import CarsIcon from "../../../public/assets/cars-icon.svg";
import SettingsIcon from "../../../public/assets/settings-icon.svg";
import HireIcon from "../../../public/assets/hire-icon.svg";
import FlowerIcon from "../../../public/assets/flower-icon.svg";
import { device } from "constants/breakpoints";

const HeroSection = () => {
  return (
    <View>
      <img className="truck" src="/assets/car8.png" alt="truck" />
      <img className="lorry" src="/assets/car9.png" alt="truck" />
      <img className="car" src="/assets/car-camry.png" alt="truck" />
      <div className="content">
        <div className="display">
          <h1>Our Services</h1>
          <div className="line"></div>
          <img src="/assets/car7.png" alt="" />
        </div>

      <h2> We have a wide range of services</h2>
      
      <div className="row">
      <img className="star1" src="/assets/star1.png" alt="star" />

          <div className="box-view">          
            <table>
              <tr>
                <td><CalendarIcon className="icon" /></td>
                <td><h3> Vehicle Leasing (B2B)</h3></td>
              </tr>
            </table> 
            
            <p className="services1">
            <ul>
              <li>Contract based with tenor of 3-6 years</li>
              <li>Access to vehicle brand of the client’s choosing</li>
              <li>No cap to the number of vehicles to be leased</li>
              <li>Zero down-payment on the vehicle</li>
              <li>Fleet maintenance, insurance, tracker, documentation embedded in service</li>
              <li>Brand new cars as well as pre-owned vehicles</li>
            </ul>
              </p>
          </div> 
     </div>










     <div className="row">
     <img className="star1" src="/assets/star2.png" alt="star" />

          <div className="box-view2">          
            <table className="table">
              <tr>
                <td><SettingsIcon className="nicon" /></td>
                <td><h5> Fleet Management As A Service (FMAAS)</h5></td>
              </tr>
            </table> 
            
            <p className="services2">
            <ul>
              <li>Driver Sourcing & Management </li>
              <li>Fleet liquidation </li>
              <li>Fleet Maintenance </li>
              <li>Fleet Inspection</li>
              <li>Fleet Management System and Telematics technology service</li>
            </ul>
              </p>
          </div> 
     </div>

       
       









     <div className="row">
     <img className="star3" src="/assets/star3.png" alt="star" />

          <div className="box-view3">          
            <table>
              <tr>
                <td><HireIcon className="icon" /></td>
                <td><h6> Vehicle Financing</h6></td>
              </tr>
            </table> 
            
            <p className="services1">
            <ul>
              <li>Ride Hailing Fleet Service </li>
              <li>Vehicle Financing for individuals</li>
            </ul>
              </p>
          </div> 
     </div>




















       
      </div>
    </View>
  );
};

export default HeroSection;

const View = styled.section`
  width: 100vw;
  height: 100%;
  padding: 100px 0;
  position: relative;
  margin-bottom: 100px;

  @media ${device.phone} {
    padding: 50px 0;
    margin-bottom: 200px;
  }



  .services1{
    width:75%;
    font-size: 1.6rem;
    font-weight: 400px;
    line-height: 48.9px;
    margin-top:20px;

    @media ${device.phone} {
      width: 100%;
      font-size: 0.9rem;
      line-height: 20px;
    }
  }

  .services2{
    width:100%;
    font-size: 1.6rem;
    font-weight: 400px;
    line-height: 48.9px;
    margin-top:20px;
    padding-left: 450px;

    @media ${device.phone} {
      width: 100%;
      font-size: 0.9rem;
      line-height: 20px;
      padding-left: 0px;
    }
  }

  .table{
  padding-left: 400px;

  @media ${device.phone} {
  padding-left: 0px

  }
}


  .truck {
    position: absolute;
    top: 900px;
    right: 0;
    z-index: 2;
    width: 550px;
    transform: scaleX(-1);

    @media ${device.phone} {
      top: 1350px;
      width: 0px;
    }
  }


  .lorry {
    position: absolute;
    top: 1600px;
    left: 0;
    z-index: 2;
    width: 550px;
    transform: scaleX(-1);

    @media ${device.phone} {
      top: 1350px;
      width: 0px;
    }
  }


  .car {
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 2;
    width: 500px;
    transform: scaleX(-1);


    @media ${device.phone} {
      bottom: 0px;
      width: 250px;
    }
  }

  .star1{
    position: absolute;
    width: 130px;
    right: -30px;
    top: -60px;

    @media ${device.phone} {
      width: 70px;
      right: -25px;
      top: -5px;
    }
  }

  .star3{
    position: absolute;
    width: 130px;
    left: -30px;
    top: -60px;
  
    @media ${device.phone} {
      width: 70px;
      left: -25px;
      top: -5px;
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

    .display {
      width: 100%;
      height: 340px;
      background-color: #ffe8e8;
      border-radius: 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 100px;
      position: relative;

      @media ${device.phone} {
        padding: 50px 40px;
        height: 250px;
        justify-content: flex-start;
        border-radius: 20px;
      }

      img {
        position: absolute;
        bottom: -200px;
        right: -50px;

        @media ${device.phone} {
          right: 0;
          bottom: -80px;
        }
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;

        @media ${device.phone} {
          font-size: 1.8rem;
        }
      }

      .line {
        width: 94px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.green};
      }
    }

    .row {
      width: 100%;
      display: flex;
      align-items: flex-start;
      margin-top: 120px;
      position: relative;

      @media ${device.phone} {
        flex-direction: column;
        margin-top: 50px;
      }
    }
     

      h3 {
        font-size: 2.2rem;
        font-weight: 600;
        color: #FFC500;
        padding: 20px;
       

        @media ${device.phone} {
          max-width: 100%;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 40px;
        }
      }


      h5 {
        font-size: 2.2rem;
        font-weight: 600;
        color: #FF0101;
        padding: 20px;
       

        @media ${device.phone} {
          max-width: 100%;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 40px;
        }
      }
      


      h6 {
        font-size: 2.2rem;
        font-weight: 600;
        color: #00AC00;
        padding: 20px;
       

        @media ${device.phone} {
          max-width: 100%;
          text-align: center;
          font-size: 1rem;
          margin-bottom: 40px;
        }
      }

      .box-view {
        width: 100%;
        height: 600px;
        background: #FFF5D2;
        border-radius: 50.9338px;
        margin-left: 0px;
        position: relative;
        padding: 50px;

        @media ${device.phone} {
          width: 100%;
          height: 400px;
          border-radius: 20px;
          margin-left: 0;
          margin-top: 30px;
          padding: 20px;
        }
      }

        .box-view2 {
          width: 100%;
          height: 550px;
          background: #FFDBDB;
          border-radius: 50.9338px;
          margin-left: 0;
          position: relative;
          padding: 50px;
  
          @media ${device.phone} {
            width: 100%;
            height: 400px;
            border-radius: 20px;
            margin-left: 0;
            margin-top: 30px;
            padding: 20px;
          }
        }


        .box-view3 {
          width: 100%;
          height: 350px;
          background: #D8FBD8;
          border-radius: 50.9338px;
          margin-left: 0;
          position: relative;
          padding: 50px;
  
          @media ${device.phone} {
            width: 100%;
            height: 400px;
            border-radius: 20px;
            margin-left: 0;
            margin-top: 30px;
            padding: 20px;
          }
        }

        .nicon {
          width: 200px;
        @media ${device.phone} {
          display: block;
        }
      }


      
        .boxes {
          display: flex;
          width: 840px;
          justify-content: space-between;
          flex-wrap: wrap;
          position: absolute;
          left: 135px;
          top: -50px;
          z-index: 4;

          @media ${device.phone} {
            flex-direction: column;
            left: 50px;
          }

          .box {
            width: 390px;
            height: 400px;
            background: #ffffff;
            box-shadow: 0px 36.7197px 75.8084px rgba(0, 0, 0, 0.07);
            border-radius: 38.2798px;
            padding: 40px 50px;
            margin-bottom: 40px;

            @media ${device.phone} {
              width: 240px;
              height: 210px;
              border-radius: 20px;
              padding: 15px;
              margin-bottom: 20px;
            }

            .icon {
              @media ${device.phone} {
                display: block;
              }
            }

            hunused3 {
              margin: 25px 0;
              font-size: 2.2rem;
              font-weight: 400;
              font-color: #FFC500;
              line-height: 37.9px;


              @media ${device.phone} {
                font-size: 1rem;
                margin: 5px 0;
                line-height: 16px;
                font-weight: 600;
                text-align: left;
              }
            }

            p {
              line-height: 21.64px;

              @media ${device.phone} {
                font-size: 0.7rem;
                line-height: 16px;
              }
            }
          }
        }
      }
    }

    .row2 {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-top: 140px;

      .box {
        width: 524px;
        height: 860px;
        background: #ff0101;
        border-radius: 50.9338px;
        position: relative;

        @media ${device.phone} {
          width: 100%;
          border-radius: 20px;
          height: 900px;
        }

        .list {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: -90px;
          z-index: 5;

          @media ${device.phone} {
            left: 30px;
            top: -50px;
          }

          left: -300px;

          .item {
            width: 520px;
            height: 225px;
            background: #ffffff;
            box-shadow: 0px 31.8107px 65.6736px rgba(0, 0, 0, 0.07);
            border-radius: 33.1622px;
            margin-bottom: 40px;
            padding: 30px 40px;

            @media ${device.phone} {
              width: 80%;
              height: 150px;
              border-radius: 20px;
              padding: 12px 20px;
              margin-bottom: 20px;
            }

            p {
              font-size: 1.5rem;
              font-weight: 400;
              margin-top: 20px;

              @media ${device.phone} {
                font-size: 1rem;
                margin-top: 0;
              }
            }
          }


        


          .item-left {
            position: absolute;
            top: 0;
            right: -600px;

            @media ${device.phone} {
              position: initial;
              right: 0;
            }
          }
        }
      }
    }

    h2{
      font-size: 2.6rem;
      font-weight: 500;
      margin-top: 200px;

      @media ${device.phone} {
        font-size: 1.8rem;
      }
    }
  }
`;
