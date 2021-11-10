import React, {Component} from "react";
import logo from "../img/logo.png";

class Header extends Component {
    render() {
        return (
            <header>
                <a href="#main" className="current">Моя страница</a>
                <a href="#messages">Сообщения</a>
                <a href="#friends">Друзья</a>
                <div className="logo">
                    {/*<span>RU</span>*/}
                    <img src={logo} alt="Лого"/>
                    {/*<span>IN</span>*/}
                </div>
                <a href="#help">Помощь</a>
                <a href="#settings">Настройки</a>
                <a href="#exit">Выход</a>
            </header>
        );
    }
}

export default Header;