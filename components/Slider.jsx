import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
// import { Paper, Button, Grid, Card } from "@mui/material";
// import contact_brn from "../asset/images/contact_bnr.png";
import data from "../testimonial.json";

const galeryImages = [
  "https://img.freepik.com/free-photo/success-triumph-joy-happiness-concept-adorable-cute-excited-little-afro-american-boy-having-overjoyed-ecstatic-facial-expression-smiling-clenching-fists-receiving-good-positive-news_343059-2226.jpg?w=2000",
  "https://img.freepik.com/free-photo/success-triumph-joy-happiness-concept-adorable-cute-excited-little-afro-american-boy-having-overjoyed-ecstatic-facial-expression-smiling-clenching-fists-receiving-good-positive-news_343059-2226.jpg?w=2000",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9TdXH-6qc5f07FJYedQnxX0ix6qL6eiUATlXxqlTFxLnAiOrlwIinVf8ip-Cne97PIY&usqp=CAU",
  "https://mythemeshop.com/wp-content/themes/mts19/images/testimonials/Ryan-360x290.jpg",
];
const Slider = ({ gallery }) => {
  const [pageWidth, setPageWidth] = useState(0);
  // const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  let number;
  let len;
  if (gallery) {
    len = galeryImages.length;
  } else {
    len = data.length;
  }
  if (windowSize >= 768) {
    number = data.length > 3 ? 3 : data.length;
  } else if (windowSize > 640 && windowSize < 768) {
    number = 2;
  } else if (windowSize < 640) {
    number = 1;
  }
  const sliderItems = number;
  const items = [];

  for (let i = 0; i < len; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <section className="" key={i.toString()}>
          <div className="block sm:flex sm:gap-[15px] md:gap-[24px] sm:justify-center">
            {!gallery
              ? data.slice(i, i + sliderItems).map((da, index) => {
                  return <Item key={index.toString()} item={da} />;
                })
              : galeryImages.slice(i, i + sliderItems).map((da, index) => {
                  return <Item key={index.toString()} galery item={da} />;
                })}
          </div>
        </section>
      );
    }
  }
  return (
    <>
      <Carousel animation="slide">{items}</Carousel>
    </>
  );
};

export default Slider;
