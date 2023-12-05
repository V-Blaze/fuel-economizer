import React, { useState, useEffect, useRef } from 'react';
import { BsCartCheckFill } from 'react-icons/bs';

// COMPONENTS
import CountDownTImmer from '../components/CountDownTImmer';

// ASSETS
import {
  cod,
  fuelEco2,
  fuelEco4, fuelEco5, fuelEcoMain, hourSale, timeOffer, warranty,
} from '../assets/images';
import { Footer, Form, TestimoneyCard } from '../components';

const Home = () => {
  const [targetTime, setTargetTime] = useState('2023-11-12T12:00:00');
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 12);
    const targetDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    setTargetTime(targetDate);
  }, []);

  const testimonies = [
    {
      name: 'Jane, Lagos',
      date: '17-05-2023',
      text: 'Since using Namur Fuel Economizer, I have noticed a significant reduction infuel costs, and my car runs smoother than ever!',
    },
    {
      name: 'Ahmed, Abuja',
      date: '16-05-2023',
      text: 'I was skeptical at first, but the results speak for themselves. I highly recommend Namur Fuel Economizer to every driver!',
    },
    {
      name: 'Fatima from Port Harcourt',
      date: '04-06-2023',
      text: 'Ever since I started using Namur Fuel Economizer, my fuel costs have plummeted, and my car runs like a dream. I never thought a small device could make such a big difference. Highly recommended!',
    },
    {
      name: 'Chuks, Kanu',
      date: '01-07-2023',
      text: 'I was skeptical at first, but Namur Fuel Economizer exceeded my expectations. My engine runs smoother, and I have noticed a significant reduction in emissions. This product is a game-changer!',
    },
    {
      name: 'Ebuka, Anambra',
      date: '11-10-2023',
      text: 'As a conscious driver, I wanted to contribute to a cleaner environment. Namur Fuel Economizer not only helped me save on fuel, but it also reduced my carbon footprint. It is a win-win for me and the planet!',
    },
  ];

  return (
    <>
      <main className=" w-full flex flex-col items-center">
        <section className="w-[95%] md:w-[50%] flex flex-col items-center gap-3">
          <CountDownTImmer targetDate={targetTime} />
          <h1 className="text-2xl text-[#ca8806] font-bold text-center">
            Namur Fuel Economizer - Revolutionize Your Drive
          </h1>
          <img src={hourSale} alt="sales banner" className=" my-3 w-[40%] " />
          <span className=" font-bold">For Enquries, Call/WhatsApp 08060340700</span>
          <h4 className=" font-bold italic text-center">
            Limited-Time Offer:
            {' '}
            with
            {' '}
            <span className="font-bold text-xl text-red-500"> Free Nationwide Delivery!</span>
          </h4>
          <img src={fuelEcoMain} alt="main" />
          <div className="w-full h-full flex">
            <img src={fuelEco5} alt="fuelEco5" className=" w-[50%] rounded-l-md" />
            <img src={fuelEco4} alt="fuelEco4" className=" w-[50%] rounded-r-md" />
          </div>
          <button
            className="text-xl bg-[#2fbe00] w-[40%] py-2 rounded-md font-bold text-white hover:bg-green-800 my-2 flex  justify-center gap-1"
            type="button"
            onClick={scrollToForm}
          >
            <BsCartCheckFill />
            ORDER NOW
          </button>
          <p>
            <span className=" font-bold block text-center">
              Are you tired of skyrocketing fuel costs and concerned
              about the environmental impact of your vehicle?
            </span>
            <span className="font-bold text-2xl underline text-red-500 block text-center">
              Introducing
            </span>
            <span className="block text-center text-[#ca8806] font-bold text-4xl my-4">
              The Namur Fuel Economizer
            </span>
            <span className="block text-center font-bold italic">
              your ultimate solution to fuel consumption challenges.
              Our unique product, crafted in Japan, offers a 100% remedy to fuel consumption,
              delivering unparalleled benefits for both your vehicle and the environment.
            </span>
          </p>
        </section>
        <section className="w-[95%] md:w-[50%]">
          <h4 className="my-4 w-full bg-[#ac4b00] text-white text-center py-2 font-black text-xl">Why Choose Namur Fuel Economizer?</h4>
          <ul className="flex flex-col items-start gap-2">
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Improve Engine Performance:</span>
              Experience enhanced horsepower for all petrol and diesel engines,
              ensuring a smoother and more powerful drive.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Reduce Fuel Consumption:</span>
              With our cutting-edge technology, enjoy significant fuel savings ranging from 5% to
              30%, putting money back in your pocket.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Minimize Exhaust Emissions:</span>
              Contribute to a cleaner environment as the product reduces smoke and
              odor emissions by more than 45%, making your drive eco-friendly.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Environmentally Friendly:</span>
              Namur Fuel Economizer is designed to be environmentally conscious,
              contributing to a reduction in carbon footprint.
            </li>
          </ul>
        </section>
        <section className="w-[95%] md:w-[50%]">
          <div className="w-full h-full flex">
            <img src={fuelEco2} alt="fuelEco5" className=" w-[100%] rounded-md" />
          </div>
        </section>
        <section className="w-[95%] md:w-[50%]">
          <h4
            className="my-4 w-full bg-[#ac4b00] text-white text-center py-2 font-black text-xl"
          >
            BENEFITS
          </h4>
          <ul className="flex flex-col items-start gap-2">
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Save Fuel:</span>
              Experience substantial fuel savings as ultra-fine fuel modification improves
              combustion, increasing horsepower and reducing fuel consumption.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Extend Engine Life:</span>
              Protect your engine and extend its lifespan by up to 20%
              by creating a clean and efficient working environment.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Clean Exhaust Emissions:</span>
              Witness a significant reduction in smoke and odor emissions,
              making your vehicle more environmentally friendly.
            </li>
            <li className=" text-start">
              <span className="font-bold text-lg mr-2">Removal and Prevention of Carbon Deposition:</span>
              Say goodbye to carbon deposits as our product cleans engine
              components, ensuring a smooth and efficient performance.
            </li>
          </ul>
        </section>
        <section className=" w-[95%] md:w-[50%] flex flex-col justify-center items-center">
          <h4 className="mt-6 text-3xl font-bold text-center text-red-500">Watch These Videos</h4>
          <iframe
            src="https://drive.google.com/file/d/1ye-7aW_wNMpy4NKE2ThSJrqgwmG0Rlbc/preview"
            className="w-[90%] h-80 border-2 border-orange-500 rounded-lg dark:border-gray-700 mb-3"
            allow="autoplay"
            title="Fuel Economizer"
          />
          <iframe
            src="https://drive.google.com/file/d/1unShWDnC2XXkyhDS-gvcaRJKqi7zvCeX/preview"
            className="w-[90%] h-80 border-2 border-orange-500 rounded-lg dark:border-gray-700 mb-3"
            allow="autoplay"
            title="Fuel Economizer fixing"
          />
        </section>
        <section className="w-[95%] md:w-[50%] flex flex-col items-center my-4">
          <img src={timeOffer} alt="limited offer" className=" w-[40%] my-3" />
          <div className="flex flex-col items-center">
            <h3 className="text-2xl text-red-600 font-bold">BUY 1 FUEL ECONOMIZER</h3>
            <div className=" my-4 flex flex-col items-center">
              <span className=" font-bold line-through">REGULAR PRICE: N55,000 PER ONE</span>
              <span className="font-bold text-4xl text-red-600">Promo Price: N45,000</span>
            </div>
            <span className="block font-bold text-lg italic underline text-center">GET FREE DELIVERY NATION WIDE TO YOUR DOOR STEP</span>
            <span className="font-bold text-4xl text-red-600 my-4 block text-center">SPECIAL OFFER: GET 2 FOR N80,000</span>
          </div>
          <button
            className="text-xl bg-[#2fbe00] w-[40%] py-2 rounded-md font-bold text-white hover:bg-green-800 my-2 flex  justify-center gap-1"
            type="button"
            onClick={scrollToForm}
          >
            <BsCartCheckFill />
            ORDER NOW
          </button>
        </section>
        <section className="w-[95%] md:w-[50%] flex flex-col items-center">
          <h4
            className="my-4 w-full bg-[#ac4b00] text-white text-center py-2 font-black text-xl "
          >
            How to Use Namur Fuel Economizer
          </h4>
          <div className="flex flex-col items-start font-bold text-lg">
            <span className=" text-start">
              1. Take one Namur Fuel Economizer.
            </span>
            <span className=" text-start">
              2. Place it inside your fuel tank.
            </span>
            <span className=" text-start">
              3. Optionally, consult your mechanic to ensure proper installation.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className=" text-2xl text-red-600 font-bold">Duration:</span>
            <p className=" font-bold text">
              Each Namur Fuel Economizer is designed to be used for one year,
              providing continuous benefits for an extended period.
            </p>
          </div>
          <img src={warranty} alt="one year warranty" className="w-[40%]" />
        </section>
        <section className="w-[95%] md:w-[50%] border-2 border-[#ac4b00] rounded-md flex flex-col items-center">
          <div className="flex flex-col justify-center items-center w-[80%] " ref={formRef}>
            <p className="text font-bold my-3 text-center">
              Please Do Not order for Jokes, Dont Place An Order To Tell Us To Come Next
              Week. Please We Want Only Buyers Who Are Ready To Purchase This Product To Enjoy
              Our SPECIAL PROMO...
            </p>
            <p className=" font-bold italic text-lg text-red-600 text-center">
              AFTER PLACING YOUR ORDER, OUR SALES REP WILL CONTACT YOU TO CONFIRM THE ORDER
            </p>
            <p className=" font-bold italic text-xl text-[#ac4b00] my-2 text-center">
              PAYMENT IS ON DELIVER || FREE DELIVERY NATION WIDE
            </p>
          </div>
          <Form />
          <img src={cod} alt="one year warranty" className="w-[40%]" />
        </section>
        <section className="w-[95%] md:w-[50%] flex flex-col items-center">
          <h4
            className="my-4 w-full bg-[#ac4b00] text-white text-center py-2 font-black text-xl"
          >
            TESTIMONIES FROM OUR CUSTOMERS
          </h4>
          <div className=" flex flex-col items-center gap-3 w-[70%]">
            {testimonies.map((testimony) => (
              <TestimoneyCard testimony={testimony} key={testimony.name} />
            ))}
          </div>
        </section>
        <section className="w-[95%] md:w-[50%]">
          <h4
            className="my-4 w-full bg-[#ac4b00] text-white text-center py-2 font-black text-xl"
          >
            BECOME A DISTRIBUTOR
          </h4>
          <div className="flex flex-col items-center">
            <iframe
              src="https://drive.google.com/file/d/1RUb5YWG3wPZFZKhQj2D1U06Wt5Etxqyl/preview"
              className="w-[90%] h-80 border-2 border-orange-500 rounded-lg dark:border-gray-700 mb-3"
              allow="autoplay"
              title="Fuel Economizer"
            />
            <div>
              <p className=" text-center text-sm italic">
                Are you ready to embark on a lucrative journey as a distributor
                of the revolutionary Namur Fuel Economizer? Fuel the success of
                your business and join us in empowering drivers across Nigeria
                with cutting-edge fuel efficiency technology.
              </p>
              <h5 className=" text-[#ac4b00] text-center font-bold text-xl my-3">
                Why Choose Namur Fuel Economizer Distribution?
              </h5>
            </div>
            <ul className="flex flex-col items-start gap-2">
              <li className=" text-start">
                <span className="font-bold text-lg mr-2">High Demand:</span>
                The market is craving the efficiency and savings that Namur Fuel
                Economizer offers. Tap into a product with unprecedented demand.
              </li>
              <li className=" text-start">
                <span className="font-bold text-lg mr-2">Lucrative Margins:</span>
                Enjoy generous profit margins as you provide drivers with a
                solution to soaring fuel costs and environmental concerns.
              </li>
              <li className=" text-start">
                <span className="font-bold text-lg mr-2">Nationwide Recognition:</span>
                Benefit from a product that&apos;s making waves nationwide.
                Join a brand that stands for quality and innovation.
              </li>
              <li className=" text-start">
                <span className="font-bold text-lg mr-2">Easy Start-Up:</span>
                No complicated processes! Start your distribution journey
                with ease and watch your business thrive.
              </li>
            </ul>
            <div>
              <p className=" font-bold italic text-lg text-red-600 text-center">
                Contact Us on WhatsApp: 📲 +2348060340700 | +2349066711277 And Express Your Interest
              </p>
              <p className=" font-bold italic text-xl text-[#ac4b00] my-2 text-center">
                Gain access to exclusive distributor benefits and resources Now!!!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
