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
                    <NavLink to={"/main"} onClick={this.props.toggleActiveClass}>Главная</NavLink>
                    <NavLink to={"/aboutUs"} onClick={this.props.toggleActiveClass}>Про нас</NavLink>
                    <NavLink to={"/examplesOfWork"} onClick={this.props.toggleActiveClass}>Примеры работ</NavLink>
                    <NavLink to={"/warranties"} onClick={this.props.toggleActiveClass}>Гаррантии</NavLink>
                </div>
            </div>
            <div className={styles.navInfo}>
                <div className={styles.number}>+7 495 665 22 72</div>
                <div className={styles.mail}>sales@remontprofi.ru</div>
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