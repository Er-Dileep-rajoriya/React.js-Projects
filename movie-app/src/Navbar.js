import React from "react";
// import styled from 'styled-components';
import NavbarStyle from './Navbar.module.css';

// const Nav = styled.div`
//         width:100%;
//         height:55px;
//         background-color:blue;
//         display:flex;
//         justify-content:space-between;
// `;

// const Title = styled.div`
//         font-size:1.5rem;
//         color:white;
//         font-weight:bold;
// `;

// const CartCount = styled.span`
//         color:${(props) => props.color};
//         font-size:1.2rem;
//         background-color:pink;
//         position:absolute;
//         height:30px;
//         width:30px;
//         text-align:center;
//         border-radius:50%;
//         &:hover{
//             cursor:pointer;
//         }
// `;

// const CartContainer = styled.div`
//         height:55px;
//         width:70px;
//         margin-right:20px;
//         position:relative;
// `;

// const CartIcon = styled.img`
//         height:45px;
//         width:45px;
// `;

export default class Navbar extends React.Component{

    render(){
        return(
            <div className={NavbarStyle.nav}>
                <div className={NavbarStyle.title}>Movie App</div>
                <div className={NavbarStyle.cartContainer}>
                    <img className={NavbarStyle.cartIcon}  alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"/>
                    <span className={NavbarStyle.cartCount}>{this.props.cartCount}</span>
                </div>
            </div>
        )
    }
}

// const styles = {
//     nav:{
        // width:'100%',
        // height:55,
        // backgroundColor:'blue',
        // display:'flex',
        // justifyContent:'space-between'
//     },
//     title: {
//         fontSize:'1.4rem',
//         color:'white',
//         fontWeight:'bold'
//     },
//     cartContainer:{
//         height:'55px',
//         width: '70px',
//         marginRight:'20px',
//         position:'relative'
//     },
//     cartIcon:{
//         height:45,
//         width:45,
//     },
//     cartCount:{
//         color:'black',
//         fontSize:'1.2rem',
//         backgroundColor:'pink',
//         position:'absolute',
//         height:30,
//         width:30,
//         textAlign:'center',
//         borderRadius:'50%'
//     }
// }