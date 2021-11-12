import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import {
  SectionAppointment,
  AppointmentForm,
  Form,
  InputForm,
  Selectable,
  InfoSlected,
  Select,
  List,
  Item,
  BtnForm,
} from "./MarcacaoStyles";
import LogoImg from "../../Images/title.svg";
import BgImg from "../../Images/marcacao.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

const Marcacao = () => {
  const [Selected, setSelected] = useState(0);
  const toogleSelected = () => {
    if (Selected === 1) {
      setSelected(0);
    } else {
      setSelected(1);
    }
  };

  const [serviceValue, setServiceValue] = useState();

  console.log(serviceValue);

  return (
    <Section
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <SectionTitle>
        <Title style={{ color: "#fff" }}>Fazer Marcação</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph style={{ color: "#fff" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officiis
          quos quidem quisquam eligendi sed nihil porro earum accusantium
          dolorum?
        </SectionParagraph>
      </SectionTitle>

      <SectionAppointment>
        <AppointmentForm>
          <Form>
            <InputForm type="text" placeholder="Nome" />
          </Form>
          <Form>
            <InputForm type="text" placeholder="Telemóvel" />
          </Form>
          <Form>
            <Selectable onClick={toogleSelected}>
              <InfoSlected>
                {serviceValue === undefined ? "Serviço" : serviceValue}
              </InfoSlected>
              <IoMdArrowDropdown
                style={{
                  color: "#999",
                  width: "20px",
                  height: "20px",
                  transform: `${
                    Selected === 1 ? "rotate(180deg)" : "rotate(0deg)"
                  }`,
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Selectable>
            <Select
              style={{
                transform: `${Selected === 1 ? "scale(1)" : "scale(0)"}`,
                transformOrigin: "top right",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <List
                onClick={(e) =>
                  setServiceValue(e.target.getAttribute("data-value"))
                }
              >
                <Item data-value="Corte de cabelo">Corte de cabelo</Item>
                <Item data-value="Lavagem de cabelo">Lavagem de cabelo</Item>
                <Item data-value="Hair Styling">Hair Styling</Item>
                <Item data-value="Corte de Barba">Corte de Barba</Item>
              </List>
            </Select>
          </Form>
          <Form>
            <InputForm type="text" placeholder="Data" />
          </Form>
          <BtnForm>Fazer Marcação</BtnForm>
        </AppointmentForm>
      </SectionAppointment>
    </Section>
  );
};

export default Marcacao;
