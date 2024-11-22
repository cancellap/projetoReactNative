CREATE TABLE instituicao
(
    instituicao_id    serial PRIMARY KEY,
    razao_social      VARCHAR(50),
    endereco          VARCHAR(255),
    cnpj              VARCHAR(255),
    email_instituicao VARCHAR(255),
    tipo_instituicao VARCHAR (255)
)
