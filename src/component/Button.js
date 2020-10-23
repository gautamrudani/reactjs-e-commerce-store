import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.09rem solid var(--mainDark);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow);" : "var(--mainDark);"};
  color: ${(props) =>
    props.cart ? "var(--mainYellow);" : "var(--mainWhite);"};
  // color: var(--lightBlue);
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
    props.cart ? "var(--mainYellow);" : "var(--mainWhite);"};
    color: ${(props) =>
    props.cart ? "var(--mainWhite);" : "var(--mainDark);"};
  
    // color: #000 !important;
  }
  &:focus {
    outline: none;
  }

`;

const NavWrapper = styled.nav`
  background: #000 !important;
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 10 rgba(0, 0, 0, 0.2) !important;
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0 !important;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export { NavWrapper, ButtonContainer, ProductWrapper };
