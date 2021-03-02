import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useWeather } from "../../contexts/weather";
import Modal from "../Modal";
import API from "../../js/api";
import "./styles.css";

import logo from "../../assets/logo.png";

function Appbar() {
  const { setWeather } = useWeather();

  const [city, setCity] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  async function search(event) {
    event.preventDefault();
    setOpenModal(false);
    try {
      let response = await API.get("weather", {
        params: {
          appid: process.env.REACT_APP_OW_API_KEY,
          q: city,
          units: "metric",
          lang: "pt_br",
        },
      });

      setCity("");

      setWeather(response.data);
    } catch (err) {
      setModalTitle("ERROR");
      if (err.response.status === 404) {
        setModalContent("Cidade não encontrada");
      } else {
        setModalContent("Erro interno, por favor tente mais tarde");
      }
      setOpenModal(true);
    }
  }

  return (
    <>
      <div id="appbar">
        <img src={logo} alt="Logo do ClimaHoje" className="logo" />
        <form id="search" onSubmit={search}>
          <input
            type="text"
            placeholder="Busque por uma cidade"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <BiSearchAlt />
        </form>
      </div>
      {openModal ? (
        <Modal
          title={modalTitle}
          content={modalContent}
          onClose={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
}

export default Appbar;
