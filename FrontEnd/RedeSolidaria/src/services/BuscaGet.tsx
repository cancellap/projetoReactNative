import axios from "axios";

export const BuscaGet = async () => {
  try {
    const response = await axios.get(
      "https://673bea0496b8dcd5f3f7de4f.mockapi.io/projetoReactNative/Instituicao"
    );
    return response.data;
  } catch (error) {
    console.log("chamou a api e deu erro");
  }
};
