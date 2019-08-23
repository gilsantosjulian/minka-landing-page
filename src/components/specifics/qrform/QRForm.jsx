import React, { Component } from "react";
import Notification from "components/generics/Notification";
import Recaptcha from "react-google-invisible-recaptcha";
import Spinner from "components/generics/Spinner";

//Import Grommet components
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Image,
  Heading,
  Paragraph,
  ResponsiveContext,
  Select,
  TextInput,
  TextArea
} from "grommet";

//Import publisher-subscriber and requester
import PubSub from "services/pubSub.js";
import requester from "services/requester.js";

const initialInputs = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  bank: ""
  // terms: false
};

const FORM_TEXT =
  "Diligencia el siguiente formulario para que hagas parte de los primeros colombianos que podrán transferir su dinero de forma rápida, fácil, segura y a bajo costo:";

let banks = [
  "Movii",
  "Nequi",
  "DaviPlata",
  "Banco Av Villas",
  "Banco Cooperativo Coopcentral",
  "Banco Caja Social",
  "Banco Davivienda",
  "Banco de Bogotá",
  "Dale - Aval Soluciones Digitales",
  "Banco GNB Sudameris",
  "Banco Agrario",
  "Banco Falabella",
  "Banco Procredit",
  "Banco Itaú",
  "Banco Pichincha",
  "Bancolombia",
  "Banco BBVA",
  "Banco Colpatria",
  "Banco Occidente",
  "Tecnipagos",
  "Banco Popular",
  "Bancoomeva",
  "Bancamia",
  "Banco W",
  "Pagos GDE",
  "Powii"
];

export default class HackathonRegisterForm extends Component {
  state = {
    form: { ...initialInputs },
    errors: { ...initialInputs },
    trigger: false,
    showNotification: false,
    showSpinner: false,
    checked: true
  };

  onChangeSelect = (key, value) => {
    let { form, trigger } = this.state;
    form[key] = value;
    this.setState({ ...form });
    if (trigger) this.requireFields();
  };

  onChange = e => {
    let { form, trigger } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ ...form });

    if (trigger) this.requireFields();
  };

  onSubmit = size => {
    this.setState({ trigger: true });
    this.requireFields();

    if (this.isErrorsEmpty()) {
      this.setState({ showSpinner: true });
      this.recaptcha.execute();
      if (size === "xsmall" || size === "small")
        PubSub.getInstance().emit("onVisibilityChange");
    }
  };

  onVerifyRecaptcha = token => {
    let { form } = this.state;
    requester
      .post("/addTransfersYaInterestings", { ...form, token: token })
      .then(() => {
        this.clearForm();
        this.setState({ showSpinner: false });
        this.setState({ showNotification: true });
        setTimeout(() => this.setState({ showNotification: false }), 4000);
      })
      .then(() => this.recaptcha.reset())
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  requireFields = () => {
    let { form, errors } = this.state;
    for (const key in form) {
      if (!form[key]) {
        errors[key] = "require";
        this.setState({ ...errors });
      } else {
        errors[key] = "";
        this.setState({ ...errors });
      }
    }
  };

  clearForm = () => {
    let { form } = this.state;
    for (const key in form) {
      form[key] = "";
      this.setState({ ...form });
    }
    this.setState({ trigger: false, checked: false });
  };

  isErrorsEmpty = () => {
    let { errors } = this.state;
    for (var key in errors) {
      if (errors[key] === "require") return false;
    }
    return true;
  };

  renderInput = (id, name, label, textArea, placeHolder) => {
    return (
      <FormField htmlFor={id} label={label} name={name}>
        {textArea ? (
          <TextArea
            id={id}
            name={name}
            placeholder={placeHolder}
            value={this.state.form[name]}
            onChange={e => this.onChange(e)}
          />
        ) : (
          <TextInput
            id={id}
            name={name}
            placeholder={placeHolder}
            value={this.state.form[name]}
            onChange={e => this.onChange(e)}
          />
        )}
      </FormField>
    );
  };

  renderSelectInput = (id, name, label, options) => {
    return (
      <FormField
        htmlFor={id}
        label={label}
        name={name}
        style={{ borderBottom: "none" }}
      >
        <Select
          id={id}
          name={name}
          multiple={false}
          options={options}
          value={this.state.form[name]}
          focusIndicator={false}
          onChange={({ option }) => this.onChangeSelect(name, option)}
        />
      </FormField>
    );
  };

  getLayerPosition = size => {
    return "center";
  };

  getFormWidth = size => {
    if (size === "xsmall" || size === "small") return "xlarge";
    return "medium";
  };

  getFormHeight = size => {
    if (size === "xsmall" || size === "small") return "450px";
    if (size === "medium") return "450px";
    return "390px";
  };

  displayTerms = () => {
    let url = "https://www.minka.io/pdf/CopyQRTransferenciasYA.pdf";
    return (
      <Box flex={true} direction="row" wrap={true}>
        <CheckBox
          style={{ marginLeft: 1, width: 30 }}
          checked={!this.state.checked}
          onChange={() =>
            this.setState({
              checked: !this.state.checked
            })
          }
        />
        <Box flex={true} direction="row" wrap={true} style={{ marginLeft: 5 }}>
          <Box style={{ minWidth: 280 }}>
            Acepto e indicó que leí y entendí la
          </Box>
          <Anchor
            style={{ marginRight: 5, minWidth: 172 }}
            href={url}
            primary
            target="_blank"
            label="Política de privacidad"
          />
          <Box style={{ minWidth: 280 }}>de Minka Colombia S.A.S.</Box>
        </Box>
      </Box>
    );
  };

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => {
          return (
            <Box
              flex={true}
              direction="row"
              justify="center"
              width="100%"
              height="100%"
              style={{ overflow: "hidden" }}
              // pad="small"
            >
              <Image
                fit="cover"
                style={{
                  position: "absolute",
                  zIndex: -1,
                  maxWidth: "100vw",
                  width: "auto",
                  height: "calc(100vh - 96px)"
                }}
                src={require("assets/images/fondo.jpg")}
              />

              <Box
                background="light-1"
                margin="large"
                pad="medium"
                round="21px"
                elevation="medium"
              >
                <Box
                  style={{
                    padding: "10px 25px 0px",
                    textAlign: "center",
                    marginBottom: 5
                  }}
                >
                  <Heading level="2" color="dark-2" size={size}>
                    <span
                      className="title-underlined"
                      style={{
                        backgroundSize: "100% 0.25em",
                        backgroundPosition: "0 95%"
                      }}
                    >
                      ¡Bienvenido a Transferencias YA!
                    </span>
                  </Heading>
                </Box>

                {this.props.visibility && (
                  <Box
                    width={() => this.getFormWidth(size)}
                    overflow="auto"
                    height={this.getFormHeight(size)}
                  >
                    <Paragraph
                      size={size}
                      style={{
                        margin: "10px 10px",
                        marginTop: 20,
                        textAlign: "justify"
                      }}
                    >
                      {FORM_TEXT}
                    </Paragraph>
                    <Form
                      onSubmit={() => this.onSubmit(size)}
                      errors={this.state.errors}
                      value={this.state.form}
                      height="auto"
                    >
                      <Box flex="grow" pad={{ vertical: "medium" }}>
                        {this.renderInput(
                          "first_name_id",
                          "first_name",
                          "Nombre",
                          false,
                          "Juan"
                        )}
                        {this.renderInput(
                          "last_name_id",
                          "last_name",
                          "Apellido",
                          false,
                          "Gómez"
                        )}
                        {this.renderInput(
                          "email_id",
                          "email",
                          "Correo electrónico",
                          false,
                          "juangomez@gmail.com"
                        )}
                        {this.renderInput(
                          "phone_id",
                          "phone",
                          "Número de teléfono",
                          false,
                          "+57 319463478"
                        )}
                        {this.renderSelectInput(
                          "bank_id",
                          "bank",
                          "Entidad Financiera",
                          banks
                        )}

                        {this.state.showSpinner && (
                          <Spinner visibility={true} />
                        )}
                      </Box>

                      {this.displayTerms()}

                      <Box
                        flex={false}
                        as="footer"
                        align="center"
                        style={{ marginTop: "30px" }}
                      >
                        <Button
                          disabled={this.state.checked}
                          style={{ width: "100%" }}
                          type="submit"
                          label="Registrar"
                          primary
                        />
                      </Box>
                    </Form>
                  </Box>
                )}
              </Box>
              <Box>
                {this.state.showNotification && (
                  <Notification
                    visibility={true}
                    text="Usuario registrado exitosamente!"
                  />
                )}
              </Box>
              <Recaptcha
                ref={ref => (this.recaptcha = ref)}
                sitekey={"6LdT158UAAAAAM-PEFOsJy9_fFAd0Jfg6-qRXMH2"}
                onResolved={this.onVerifyRecaptcha}
              />
            </Box>
          );
        }}
      </ResponsiveContext.Consumer>
    );
  }
}
