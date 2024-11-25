import axios from "axios";

export const BuscaGet = async () => {
  try {
    const response = await axios.get(
      "http://192.168.1.65:8080/instituicao"
    );
    return response.data;
  } catch (error) {
    console.log("chamou a api e deu erro");
  }
};
