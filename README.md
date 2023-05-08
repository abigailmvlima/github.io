# Sobre o API 


# Comandos 

    yarn serverless config credentials --provider aws --key <sua-access-key> --secret <sua-secret-key>
    yarn serverless deploy    

# APIs UTILIZADAS

## Tripadvisor API

    A API do Tripadvisor é uma interface de programação de aplicativos (API, na sigla em inglês) fornecida pelo Tripadvisor, que permite que desenvolvedores integrem dados e recursos do site do Tripadvisor em seus próprios aplicativos e sites.

    A API fornece acesso aos dados do Tripadvisor, incluindo informações sobre hotéis, restaurantes, atrações turísticas, bem como comentários, avaliações e fotos de usuários. Com a API, os desenvolvedores podem criar aplicativos e serviços personalizados, como agregadores de avaliações, guias turísticos, aplicativos móveis de reservas de viagens e muito mais.

## Utilização dos endpoint e a função de cada um

A utilização dos endpoint do tripadvisor, foi para pesquisa de localidades na apresentação da home no site. Tambem a utilização do endpoint de pesquisa das avaliações da experiencia dos usuarios "Classificação, texto de avaliação e etc …”. Outra para colher os detalhes da localidade podendo ser "Hotel, Restaurante, Ponto turistico e etc …”.

Ja por outro lado a lambda com o objetivo de ocultar os dados mais sensiveis do usuario e credenciais de acesso.

## AWS Function Lambda

Lambda é um serviço de computação sem servidor da AWS que permite executar código em resposta a eventos sem precisar gerenciar servidores ou infraestrutura. Ao usar o Lambda, não precisa se preocupar com capacidade, escalabilidade, disponibilidade ou manutenção de servidores. Em vez disso, a AWS cuida de tudo isso para você.

Rrazões pelas quais usar o Lambda na AWS:

1. Custo: Com o Lambda, você paga apenas pelo tempo que sua função leva para ser executada, sem se preocupar com o tempo de inatividade ou capacidade não utilizada. Isso pode ser muito mais econômico do que manter sua própria infraestrutura ou usar servidores em nuvem tradicionais.
2. Escalabilidade: O Lambda se dimensiona automaticamente para lidar com a carga de trabalho, portanto, você não precisa se preocupar com a capacidade ou escalabilidade de seus servidores.
3. Sem servidor: Ao não precisar gerenciar servidores, você pode se concentrar em escrever e melhorar o código de sua aplicação, em vez de se preocupar com a infraestrutura.
4. Integração com outros serviços da AWS: O Lambda se integra perfeitamente com outros serviços da AWS, permitindo que você construa aplicativos altamente escaláveis e resistentes.

Resumindo, o Lambda é uma excelente opção se você deseja executar código em resposta a eventos de maneira eficiente, econômica e sem se preocupar com a administração de servidores.
