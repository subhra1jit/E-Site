import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from "styled-components";
import pro1 from "./imges/product1.jpg";
import pro2 from "./imges/product2.jpg";
import pro3 from "./imges/product3.jpg";
import calculation from "./imges/calculation.jpg";
import logo from "./imges/logo.png";
import cleaninghome from "./imges/cleaninghome.jpg";
import consulting from "./imges/consulting.jpg";
import medical from "./imges/medical.jpg";
import construction from "./imges/construction.jpg"; 

const Container = styled.div`
width:90%;
display:flex;
flex-direction:column;
margin:0px auto;
`

const ContList = styled.div`
display:flex;
flex-direction:row;
align-items:center;
background:white;
padding:15px;
box-shadow:10px 10px 10px #e2e2e2;
`
const Headtitle = styled.div`
width:60%;
font-size:25px;
font-weight:600;
margin:5px;
`
const Linkdetails = styled.div`
display:flex;
flex-direction:row;
algn-items:center;
justify-content:center;
`
const Detailtem = styled.span`
font-size:18px;
font-weight:600;
margin:0px 10px;
cursor:pointer;
`
const CarouselItem = styled.div`
margin:10px 10px;

`
const ButtonItem = styled.div`
width:120px;
height:50px;
background:tomato;
color:white;
font-size:18px;
padding:7px;
margin:0px auto;
border-radius:5px;
cursor:pointer;

`

const Carousel = () =>
{
  return(
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height="500px" src={pro1} class="d-block w-100" alt="..."/>
      <div style={{backgroundColor:"#595959"}} class="carousel-caption d-none d-md-block">
        <h5>Vegetables 20% discount</h5>
        <p>Click Here For Shopping</p>
        <ButtonItem>Shop Now</ButtonItem>
      </div>
    </div>
    <div class="carousel-item">
      <img height="500px" src={pro2} class="d-block w-100" alt="..."/>
      <div style={{backgroundColor:"#595959"}} class="carousel-caption d-none d-md-block">
        <h5>Groceries with 20% discount</h5>
        <p>Click here to shop</p>
        <ButtonItem>Shop Now</ButtonItem>
      </div>
    </div>
    <div class="carousel-item">
      <img height="500px" src={pro3} class="d-block w-100" alt="..."/>
      <div style={{backgroundColor:"#595959"}} class="carousel-caption d-none d-md-block">
        <h5>Stay hygenic with diffrent product</h5>
        <p>Click here to shop</p>
        <ButtonItem>Shop Now</ButtonItem>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

const SearchPlace = styled.div`
display:flex;
flex-direction:column;
margin-top:30px;
`

const SearchHere = styled.div`
width:80%;
margin:10px auto;
display:flex;
flex-direction:row;
`
const SearchItem = styled.input`
width:70%;
font-size:18px;
padding:3px;
`
const ServiceItem = styled.div`
margin:30px 20px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:space-evenly;
`


const Card = ()=>
{
  return(
    <>
    <div class="card" style={{width:"18rem", margin:"10px"}}>
  <img src={cleaninghome} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laundry</h5>
    <p class="card-text">Click to Start your service with us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
<div class="card" style={{width:"18rem" , margin:"10px"}}>
  <img src={cleaninghome} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cleaning</h5>
    <p class="card-text">Click to Start your service width us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
<div class="card" style={{width:"18rem",margin:"10px"}}>
  <img src={consulting} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Consulting</h5>
    <p class="card-text">Click to Start your service width us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
<div class="card" style={{width:"18rem", margin:"10px"}}>
  <img src={medical} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Medical Emergency</h5>
    <p class="card-text">Click to Start your service width us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
<div class="card" style={{width:"18rem" , margin:"10px"}}>
  <img src={construction} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Construction</h5>
    <p class="card-text">Click to Start your service width us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
<div class="card" style={{width:"18rem" , margin:"10px"}}>
  <img src={calculation} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Recharge and pay bills</h5>
    <p class="card-text">Click to Start your service width us </p>
    <a href="/product" class="btn btn-primary">Click Here</a>
  </div>
</div>
</>
  )
}

const Footer = styled.div`
width:100%;
padding:50px;
margin-top:50px;
background-color:#797979;
text-align:center;
`



const Home = () =>
{
    return(
        <>
          <Container>
               <ContList>
                <img src={logo} style={{width:"40px",height:"40px"}} alt="..."/>
                <Headtitle>Putatoe Service</Headtitle>
                <Linkdetails>
                  <Detailtem>Home</Detailtem>
                  <Detailtem>Product</Detailtem>
                  <Detailtem>Carrier</Detailtem>
                  <Detailtem>Contact</Detailtem>
                </Linkdetails>
               </ContList>
               <CarouselItem>
               <Carousel/>
               </CarouselItem>
               <SearchPlace>
                <h2 style={{textAlign:"center"}}>Welcome Search Here</h2>
                <SearchHere>
                  <SearchItem tyoe="text" placeholder="enter your text here"/>
                  <ButtonItem>Click Here</ButtonItem>
                </SearchHere>
               </SearchPlace>
               <h2 style={{margin:"30px 0px 20px 10px"}}>Services That We Provide</h2>
               <ServiceItem>
                <Card/>
               </ServiceItem>
               <Footer>
                <h4>All works are reserve under Putatoe Technologies @2022</h4>
               </Footer>
          </Container> 
        </>
    )
}

export default Home;
