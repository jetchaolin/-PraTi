package org.exercicios.entities.frete;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class BuscarCep {
        private static final String BASE_URL = "https://viacep.com.br/ws";

        /**
         * @param cep CEP no formato "12345678" ou "12345-678"
         * @return Estado (UF) como String (ex: "SP", "RJ", "MG")
         * @throws IOException Se houver erro na requisição ou CEP inválido
         */
        public String buscarEstadoPorCep(String cep) throws IOException {
                String cepLimpo = cep.replaceAll("[^0-9]", "");

                if (cepLimpo.length() != 8) {
                        throw new IOException("CEP deve ter 8 dígitos");
                }

                String urlString = BASE_URL + "/" + cepLimpo + "/json";
                URL url = new URL(urlString);

                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setConnectTimeout(5000);
                connection.setReadTimeout(5000);

                StringBuilder response = new StringBuilder();
                try (BufferedReader reader = new BufferedReader(
                                new InputStreamReader(connection.getInputStream()))) {

                        String line;
                        while ((line = reader.readLine()) != null) {
                                response.append(line);
                        }
                }

                String json = response.toString();

                if (json.contains("\"erro\": true") || json.contains("\"erro\":true")) {
                        throw new IOException("CEP não encontrado: " + cep);
                }

                int ufIndex = json.indexOf("\"uf\":");
                if (ufIndex == -1) {
                        throw new IOException("Estado não encontrado na resposta");
                }

                int startQuote = json.indexOf("\"", ufIndex + 5);
                int endQuote = json.indexOf("\"", startQuote + 1);

                if (startQuote == -1 || endQuote == -1) {
                        throw new IOException("Erro ao extrair estado da resposta");
                }

                return json.substring(startQuote + 1, endQuote);
        }
}
