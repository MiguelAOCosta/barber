import React, { useState } from "react";
import { format } from "date-fns";
import AppCalendar from "./Calendar/AppCalendar";
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
import { GoCalendar } from "react-icons/go";

const Marcacao = () => {
  const [Selected, setSelected] = useState(0);
  const [serviceValue, setServiceValue] = useState();
  const [selectedDate, setselectedDate] = useState(new Date());

  console.log(selectedDate);

  return (
    <Section
      onClick={() => (Selected === 1 ? setSelected(0) : undefined)}
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100%",
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
            <Selectable onClick={() => setSelected(1)}>
              <InfoSlected
                style={{
                  color: `${serviceValue === undefined ? "#999" : "#fff"}`,
                }}
              >
                {serviceValue === undefined ? "Serviço" : serviceValue}
              </InfoSlected>
              <IoMdArrowDropdown
                style={{
                  color: "#999",
                  width: "20px",
                  height: "20px",
                  marginRight: "5px",
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
            <Selectable
              onClick={() => (Selected === 2 ? setSelected(0) : setSelected(2))}
            >
              <InfoSlected>{format(selectedDate, "dd.MM.yyyy")}</InfoSlected>
              <GoCalendar
                style={{
                  color: "#999",
                  width: "20px",
                  height: "20px",
                  marginRight: "5px",
                }}
              />
            </Selectable>

            <Select
              style={{
                transform: `${Selected === 2 ? "scale(1)" : "scale(0)"}`,
                transformOrigin: "top right",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <AppCalendar
                selectedDate={selectedDate}
                setselectedDate={setselectedDate}
              />
            </Select>
          </Form>
          <BtnForm>Fazer Marcação</BtnForm>
        </AppointmentForm>
      </SectionAppointment>
    </Section>
  );
};

export default Marcacao;
