import React, {Component} from "react";
import {ava, photoRubin, p1, p2, p3, p4, p5, p6, p7, imagesSource} from "../img/ImagesSource"

class MainInformation extends Component {
    render() {

        function getImage( number ) {
            return imagesSource[ number ];
        }

        return (
            <section className="MainInformation">
                <div className="avatar">
                    <img src={ava} className="avatar" alt=""/>
                    <span className="avatarName">NickName</span>
                </div>

                <ul className="informationList">

                    <li>Имя</li> <li className="redText"> Фамилия</li>
                    <li className="redText">Страна: </li> <li>Беларусь  <img src="https://i.c97.org/ai/343838/aux-head-1565075194-20180727_pogonya_140_360.jpg" className="countryFlag" alt="флаг Беларуси"/></li>
                    <li className="redText">Город: </li> <li>Минск</li>
                    <li className="redText">Телефон: </li> <li>+375255473961</li>
                    <li className="redText">E-mail: </li> <li>simpleMail@mail.ru</li>

                </ul>

                <div className="photos">

                    <img src={photoRubin} alt="not uploaded" className="photoRubin"/>

                    <div className="row1">
                        <div className="imgWrap">
                            <img src={ p1 } className="photo"/>
                            <img src={ p1 } className="blur"/>
                        </div>
                        <div className="imgWrap">
                            <img src={ p2 } className="photo"/>
                            <img src={ p2 } className="blur"/>
                        </div>
                        <div className="imgWrap">
                            <img src={ p3 } className="photo"/>
                            <img src={ p3 } className="blur"/>
                        </div>
                        <div className="imgWrap">
                            <img src={ p4 } className="photo"/>
                            <img src={ p4 } className="blur"/>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="imgWrap">
                            <img src={ p5 } className="photo"/>
                            <img src={ p5 } className="blur"/>
                        </div>
                        <div className="imgWrap">
                            <img src={ p6 } className="photo"/>
                            <img src={ p6 } className="blur"/>
                        </div>
                    </div>

                    <div className="row3">
                        <div className="imgWrap">
                            <img src={ p7 } className="photo"/>
                            <img src={ p7 } className="blur"/>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default MainInformation;