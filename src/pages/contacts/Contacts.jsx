"use client";
import React, { useEffect } from "react";
import scss from "./Contacts.module.scss";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import FancyButton from "../../components/ui/Buttons/FancyButton";
import MapComponent from "../map/MapComponent";
import { getVisit } from "../../api/visit";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaPhone } from "react-icons/fa";

const Contacts = () => {
  const { data: visitData, refetch, isLoading } = getVisit();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.visit}>
            {visitData && visitData.length > 0 ? (
              visitData.map((item, index) => (
                <div key={index} className={scss.visitItem}>
                  <SectionHeader title="Visit Restaurant" leftIcon={left} />
                  <h1>{item.title}</h1>
                  <p>
                    <span>{item.restaurant_address.title}</span>
                    {item.restaurant_address.address}
                  </p>

                  <p>
                    <span>{item.restaurant_time.title}</span>
                    {item.restaurant_time.day_range1}{" "}
                    {item.restaurant_time.open_time1} am -{" "}
                    {item.restaurant_time.close_time1} am
                  </p>

                  <p>
                    {item.restaurant_time.day_range2}{" "}
                    {item.restaurant_time.open_time2} am -{" "}
                    {item.restaurant_time.close_time2} am
                  </p>
                  <FancyButton
                    label="Purchase gift card"
                    onClick={() => console.log("gift card")}
                    className={scss.btn}
                  />
                </div>
              ))
            ) : (
              <p>No visit data available</p>
            )}
          </div>

          {/* Правая часть */}
          <div className={scss.contactCard}>
            <div className={scss.contact}>
              {visitData && visitData.length > 0 ? (
                <>
                  <p> {visitData[0].restaurant_contact.title}</p>
                  <p>
                    {" "}
                    <a href="#">
                      <FaPhone />{" "}
                    </a>
                    {visitData[0].restaurant_contact.phone_number}
                  </p>
                  <p>
                    {" "}
                    <a href="#">
                      <SlEnvolopeLetter />
                    </a>{" "}
                    {visitData[0].restaurant_contact.mail}
                  </p>
                </>
              ) : (
                <p>No contact info</p>
              )}

              <div className={scss.map}>
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
