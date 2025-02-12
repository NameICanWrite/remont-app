import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Nav.module.css'
import mainStyles from '../../App.module.css'
import {toggleActiveClass} from "../../redux/nav-reducer";
import {connect} from "react-redux";
class Nav extends React.Component{

    render(){
        return <div className={styles.nav}>
            <div className={mainStyles.container}>
                <div className={styles.menu+' '+ (
                    this.props.isActive ? styles.menuActive:'')}>
                    {/* <NavLink to={"/main"} onClick={this.props.toggleActiveClass}>Главная</NavLink> */}
                    <NavLink to={"/"} onClick={this.props.toggleActiveClass}>Главная</NavLink>
                    <NavLink to={"/aboutUs"} onClick={this.props.toggleActiveClass}>Про нас</NavLink>
                    <NavLink to={"/examplesOfWork"} onClick={this.props.toggleActiveClass}>Примеры работ</NavLink>
                    <NavLink to={"/warranties"} onClick={this.props.toggleActiveClass}>Гарантии</NavLink>
                    <a href="https://github.com/NameICanWrite/remont-app">Source Code</a>
                </div>
            </div>
            <div className={styles.navInfo}>
                <div className={styles.number}>
                    <a href="tel:+380735925381">+380 (73) 592 5381</a>
                    <a href="tel:+380999115738">+380 (99) 911 5738</a>
                    </div>
                <div className={styles.mail}>
                    <a href="mailto:sales@remontprofi.ru">
                        Abnbud2021@gmail.com</a>
                    </div>
            </div>
            <div className={styles.hamburger+' '+ (
                this.props.isActive ? styles.hamburgerActive: '')} onClick={this.props.toggleActiveClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }
}

let mapStateToProps=  (state)=>({
    isActive: state.nav.isActive
})

export default connect(mapStateToProps, {toggleActiveClass})(Nav)
